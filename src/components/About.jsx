import { aboutContent } from '../data/portfolioData';
import avatarImage from '../assets/about/tushar-avatar.png';

// Tech stack SVG icons rendered inline for crisp rendering
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M63.4 0c-5.2 0-9.9.5-13.9 1.4-11.7 2.6-13.8 8-13.8 18v13.2h27.8v3.5h-38.2c-10.1 0-19 6.1-21.8 17.6-3.2 13.3-3.3 21.6 0 35.5 2.5 10.4 8.4 17.6 18.5 17.6h12v-15.9c0-11.5 10-21.6 21.8-21.6h27.7c9.7 0 17.4-8 17.4-17.7v-33.2c0-9.4-8-16.4-17.4-18-6.3-1.1-12.8-1.6-19.1-1.6zm-15.1 8.6c3.6 0 6.5 3 6.5 6.6 0 3.6-2.9 6.6-6.5 6.6-3.6 0-6.5-3-6.5-6.6 0-3.6 2.9-6.6 6.5-6.6z"/>
      <path fill="#FFD43B" d="M96.6 34.1v15.5c0 12-10.2 22.1-21.8 22.1H47.1c-9.5 0-17.4 8.2-17.4 17.7v33.2c0 9.4 8.2 15 17.4 17.7 11 3.3 21.6 3.9 33.7 0 8.5-2.4 16.9-7.3 16.9-17.7v-13.3H70v-3.5h50.5c10.1 0 13.8-7 17.5-17.6 3.8-10.9 3.6-21.4 0-35.5-2.6-10.1-6.9-17.6-17.5-17.6h-23.9zm-14.4 79.5c3.6 0 6.5 3 6.5 6.6 0 3.6-2.9 6.6-6.5 6.6-3.6 0-6.5-3-6.5-6.6 0-3.6 2.9-6.6 6.5-6.6z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);

const HuggingFaceIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="58" fill="#FFD21E" />
      <ellipse cx="34" cy="58" rx="9" ry="13" fill="#FFAC03" />
      <ellipse cx="94" cy="58" rx="9" ry="13" fill="#FFAC03" />
      <path d="M40 74c6 10 16 15 24 15s18-5 24-15" fill="none" stroke="#3A2617" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="46" cy="80" rx="7" ry="4" fill="#FF9D9D" opacity="0.8" />
      <ellipse cx="82" cy="80" rx="7" ry="4" fill="#FF9D9D" opacity="0.8" />
      <path d="M44 52c2-4 8-4 10 0" fill="none" stroke="#3A2617" strokeWidth="5" strokeLinecap="round" />
      <path d="M74 52c2-4 8-4 10 0" fill="none" stroke="#3A2617" strokeWidth="5" strokeLinecap="round" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Hugging Face</span>
  </div>
);

const FastApiIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="60" fill="#05998b" />
      <path fill="#fff" d="M58 22 L30 70 H54 L48 106 L98 54 H72 Z" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">FastAPI</span>
  </div>
);

const DjangoIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#092E20" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="10.5"
        fontWeight="800"
        fill="#44B78B"
      >
        Dj
      </text>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Django</span>
  </div>
);

const TensorFlowIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#FF6F00" />
      <path fill="#fff" d="M12 3l4 2.3v4.6l-4-2.3-4 2.3V5.3L12 3z" />
      <path fill="#fff" opacity="0.85" d="M8 9.9l4 2.3v7.4l-4-2.3V9.9z" />
      <path fill="#fff" opacity="0.7" d="M16 9.9v7.4l-4 2.3v-7.4l4-2.3z" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">TensorFlow</span>
  </div>
);

const PyTorchIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#0a0a0a" />
      <path
        fill="#EE4C2C"
        d="M12.963 5.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.176 7.547 7.547 0 01-1.705-1.715.75.75 0 00-1.152-.082A9 9 0 1015.68 7.534a7.46 7.46 0 01-2.717-2.248zM15.75 17.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
      />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">PyTorch</span>
  </div>
);

const LangChainIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#1C3830" />
      <path
        fill="#4ADE80"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.902 6.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
      />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">LangChain</span>
  </div>
);

const DockerIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#2496ED" />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8.75l-5-2.9-5 2.9m10 0l-5 2.9m5-2.9v5.5l-5 2.9M7 8.75l5 2.9M7 8.75v5.5l5 2.9m0-5.5v5.5"
      />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Docker</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">

          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-black border-2 border-transparent">
                <img
                  src={avatarImage}
                  alt="Tushar Vashishth — AI/ML Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">

          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex flex-wrap items-center gap-8 md:gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="350" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <DjangoIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="400" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <FastApiIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PyTorchIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="500" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <TensorFlowIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="550" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <LangChainIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <HuggingFaceIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="650" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <DockerIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
