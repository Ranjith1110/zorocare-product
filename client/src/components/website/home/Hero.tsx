import React from 'react';

const collageImages = [
  { src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', alt: 'Healthcare', className: 'hidden lg:block w-40 h-48 rounded-3xl translate-y-8' },
  { src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', alt: 'Family', className: 'w-24 h-32 sm:w-48 sm:h-64 md:w-56 md:h-72 rounded-2xl md:rounded-3xl -translate-y-2 md:-translate-y-12' },
  { src: '/home/hero/5.png', alt: 'Happy couple', className: 'w-40 h-52 sm:w-64 sm:h-80 md:w-72 md:h-[400px] rounded-2xl md:rounded-3xl border-2 md:border-4 border-[#16002c] -translate-y-6 md:-translate-y-24 z-20 relative' },
  { src: '/home/hero/1.png', alt: 'Doctor', className: 'w-24 h-32 sm:w-48 sm:h-64 md:w-56 md:h-72 rounded-2xl md:rounded-3xl -translate-y-1 md:-translate-y-6' },
  { src: '/home/hero/3.png', alt: 'Family (Right)', className: 'hidden lg:block w-40 h-48 rounded-3xl translate-y-4' },
];

const stats = [
  {
    value: '1M+',
    label: 'Consultations',
    iconBg: 'bg-[#5301ab]/20',
    iconColor: 'text-[#5301ab]',
    filled: true,
    icon: <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />,
    dividerClass: 'hidden md:block',
  },
  {
    value: '2000+',
    label: 'Expert Doctors',
    iconBg: 'bg-[#fd5800]/20',
    iconColor: 'text-[#fd5800]',
    filled: false,
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
    dividerClass: 'hidden md:block',
  },
  {
    value: '500+',
    label: 'Partner Hospitals',
    iconBg: 'bg-[#5301ab]/20',
    iconColor: 'text-[#5301ab]',
    filled: false,
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
    dividerClass: 'hidden lg:block',
  },
  {
    value: '98%',
    label: 'Happy Families',
    iconBg: 'bg-[#fd5800]/20',
    iconColor: 'text-[#fd5800]',
    filled: false,
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
    dividerClass: '',
  },
];

const Hero: React.FC = () => {
  return (
    <div className="relative w-full bg-[#16002c] overflow-hidden pt-12 md:pt-20 pb-16 flex flex-col items-center">

      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">

        <div className="mb-6 px-4 py-1.5 rounded-full border border-[#5301ab]/50 bg-[#5301ab]/20 text-[#fd5800] text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
          AI Powered Healthcare Ecosystem
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#fcfbf7] tracking-tight leading-[1.15] md:leading-[1.1]">
          Smarter Healthcare <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5301ab] via-[#a236d2] to-[#fd5800]">
            For You. For Your Family.
          </span>
        </h1>

        <p className="mt-4 md:mt-6 text-base md:text-xl text-gray-300 max-w-2xl font-medium px-2">
          ZoroCare brings healthcare, technology, and compassion together to deliver complete care for every stage of life.
        </p>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <button className="w-full sm:w-auto justify-center bg-gradient-to-r from-[#5301ab] to-[#fd5800] text-white px-8 py-3.5 rounded-lg font-semibold text-[15px] hover:opacity-90 transition-opacity shadow-lg shadow-[#fd5800]/20 flex items-center gap-2">
            Book Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
          <button className="w-full sm:w-auto justify-center border-2 border-gray-400 text-white px-8 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-white/10 hover:border-white transition-all flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Download App
          </button>
        </div>

        <div className="mt-8 flex items-center gap-3 md:gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-[#16002c] object-cover" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
            ))}
          </div>
          <div className="flex flex-col text-left">
            <span className="text-white text-[11px] md:text-xs font-semibold">Trusted by 1M+ Families</span>
            <div className="flex items-center gap-1">
              <div className="flex text-yellow-400 text-[9px] md:text-[10px]">★★★★★</div>
              <span className="text-gray-400 text-[9px] md:text-[10px]">4.8/5 (25K+ Reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto mt-12 md:mt-20 h-[220px] sm:h-[300px] md:h-[450px] flex justify-center items-end gap-2 md:gap-6 z-10 px-2 md:px-4">
        {collageImages.map((img) => (
          <div key={img.src} className={`overflow-hidden shadow-2xl transform ${img.className}`}>
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[150px] sm:h-[250px] md:h-[350px] z-0 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full h-full object-cover min-w-[1440px]">
          <path d="M0 220 C 400 350, 1000 70, 1440 250 L 1440 320 L 0 320 Z" fill="#5301ab" opacity="0.95" />
          <path d="M0 240 C 450 370, 950 90, 1440 270 L 1440 320 L 0 320 Z" fill="#fd5800" opacity="0.95" />
          <path d="M0 260 C 500 390, 900 110, 1440 290 L 1440 320 L 0 320 Z" fill="#110022" />
        </svg>
      </div>

      <div className="relative z-20 w-full max-w-[1200px] mx-auto mt-8 md:mt-16 px-4">
        <div className="bg-[#0f001f]/80 backdrop-blur-xl border border-white/10 rounded-2xl py-6 px-4 md:px-10 grid grid-cols-2 gap-y-6 gap-x-2 md:flex md:flex-wrap md:justify-between md:items-center md:gap-6 shadow-2xl">
          {stats.map((stat) => (
            <React.Fragment key={stat.label}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3">
                <div className={`w-10 h-10 rounded-full ${stat.iconBg} flex items-center justify-center ${stat.iconColor} shrink-0`}>
                  <svg
                    className="w-5 h-5"
                    fill={stat.filled ? 'currentColor' : 'none'}
                    stroke={stat.filled ? undefined : 'currentColor'}
                    viewBox="0 0 24 24"
                  >
                    {stat.icon}
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-base sm:text-lg leading-tight">{stat.value}</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5">{stat.label}</p>
                </div>
              </div>
              {stat.dividerClass && <div className={`${stat.dividerClass} w-px h-10 bg-white/10`}></div>}
            </React.Fragment>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Hero;