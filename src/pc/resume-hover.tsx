'use client';

import { useState } from 'react';

export default function ResumeButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleDownload = () => {
    const resumeUrl = '/resume_GT.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume_GT.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMouseMove = (e:any) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div className="inline-block">
      <button
        onClick={handleDownload}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-gray-600 rounded-full text-white text-sm hover:border-gray-400 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
        Resume
      </button>

      {isHovered && (
       <div
  className="fixed flex items-center justify-center w-20 h-8 border border-white/20 bg-black/70 text-white text-xs rounded-sm pointer-events-none transition-opacity duration-150"
  style={{
    left: mousePos.x + 10,
    top: mousePos.y + 10,
  }}
>
  Hire Me!!  🫡
</div>
      )}
    </div>
  );
}