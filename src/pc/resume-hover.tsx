'use client';

import { useState } from 'react';

export default function ResumeButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    // Corrected resume URL - use forward slashes and /public directory
    const resumeUrl = '/resume_GT.pdf'; // Place your PDF in the public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume_GT.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleDownload}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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

      {/* Tooltip */}
      <div
        className={`absolute left-0 top-full mt-2 px-4 py-2  rounded-lg text-white text-sm whitespace-nowrap transition-all duration-300 ${
          isHovered
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-2 invisible'
        }`}
      >
        Hire me 😊
      </div>
    </div>
  );
}