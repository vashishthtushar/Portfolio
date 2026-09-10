// Step 2 of the Decap CMS GitHub OAuth flow.
// GitHub redirects here with a `code`; we exchange it server-side
// for an access token (this is why a serverless function is needed —
// the client secret can never be exposed to the browser), then hand
// the token back to the CMS tab via postMessage.
export default async function handler(req, res) {
  const { code, error } = req.query;

  if (error) {
    res.status(400).send(renderResult('error', JSON.stringify({ message: error })));
    return;
  }

  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    res.status(500).send('Missing GITHUB_OAUTH_CLIENT_ID / GITHUB_OAUTH_CLIENT_SECRET environment variables.');
    return;
  }

  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      res.status(400).send(renderResult('error', JSON.stringify(tokenData)));
      return;
    }

    res.status(200).send(
      renderResult('success', JSON.stringify({ token: tokenData.access_token, provider: 'github' }))
    );
  } catch (err) {
    res.status(500).send(renderResult('error', JSON.stringify({ message: err.message })));
  }
}

function renderResult(status, content) {
  // Standard Decap/Netlify CMS OAuth popup handshake:
  // 1. This popup tells its opener it's ready ("authorizing:github").
  // 2. The opener replies (any message) to confirm it's listening.
  // 3. Only then does the popup send the real result.
  return `<!doctype html>
<html><body>
<script>
  (function() {
    function receiveMessage() {
      window.opener.postMessage(
        'authorization:github:${status}:${content.replace(/'/g, "\\'")}',
        '*'
      );
      window.removeEventListener('message', receiveMessage, false);
    }
    window.addEventListener('message', receiveMessage, false);
    window.opener.postMessage('authorizing:github', '*');
  })();
</script>
</body></html>`;
}
