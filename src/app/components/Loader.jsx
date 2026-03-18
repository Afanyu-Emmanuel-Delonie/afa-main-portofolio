import { useEffect, useState } from 'react';

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // Fill progress bar over ~1.4s
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 2;
      });
    }, 28);

    // Start fade-out at 1.6s, call onDone at 2s
    const fadeTimer = setTimeout(() => setHiding(true), 1600);
    const doneTimer = setTimeout(() => onDone(), 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#18181B]"
      style={{
        transition: 'opacity 0.4s ease',
        opacity: hiding ? 0 : 1,
        pointerEvents: hiding ? 'none' : 'all',
      }}
    >
      {/* Monogram */}
      <div className="relative mb-8 flex items-center justify-center">
        {/* Spinning ring */}
        <svg
          className="absolute"
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          style={{ animation: 'loaderSpin 1.8s linear infinite' }}
        >
          <circle cx="48" cy="48" r="44" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.15" />
          <circle
            cx="48" cy="48" r="44"
            stroke="#F59E0B" strokeWidth="2"
            strokeDasharray="276"
            strokeDashoffset="207"
            strokeLinecap="round"
          />
        </svg>
        {/* Initials */}
        <span
          className="text-2xl font-bold text-amber-400 select-none"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.05em' }}
        >
          AE
        </span>
      </div>

      {/* Name */}
      <p
        className="text-white/70 text-sm tracking-widest uppercase mb-8 select-none"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Afanyu Emmanuel
      </p>

      {/* Progress bar */}
      <div className="w-40 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-400 rounded-full"
          style={{ width: `${progress}%`, transition: 'width 0.03s linear' }}
        />
      </div>
    </div>
  );
}
