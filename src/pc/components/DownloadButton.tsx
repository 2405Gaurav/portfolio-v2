import Link from "next/link";
import { Download } from "lucide-react"; 
import React from "react";

const DownloadResumeButton = () => {
  return (
    <div className="inline-block rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-1 shadow-md transition-colors duration-300">
      <Link
        href="/files/resume_gt.pdf"
        download="Gaurav_Resume.pdf"
        aria-label="Download my resume"
        className="flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:to-indigo-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition-all duration-300"
      >
        <Download className="w-4 h-4" />
        Download Resume
      </Link>

    </div>


  );
};

export default DownloadResumeButton;
