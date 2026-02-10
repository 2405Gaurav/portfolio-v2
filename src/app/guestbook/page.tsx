"use client";

import { motion } from "framer-motion";
import Guestbookmsg from "@/pc/guestbook-mesg";
import RecentMsgs from "@/pc/recent-msgs";

export async function submitMessage(message: string) {
  // This function will send the message to the backend
  await fetch("/api/guestbook", {
    method: "POST",
    body: JSON.stringify({ message }),
  });
}

export default function Guestbook() {
  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.15 }} // Delays each element slightly
    >
      {/* Enhanced Heading */}
      <motion.h1 
        variants={variants} 
        className="text-5xl font-bold tracking-tight"
      >
        Guestbook.
      </motion.h1>

      {/* Enhanced Description - Minimal & Clean */}
      <motion.p 
        variants={variants} 
        className="mt-2 text-lg text-gray-600 dark:text-gray-400"
      >
        You’ve reached the end. Leave a trace behind so I know you were here.
      </motion.p>

      {/* Image with original sizing */}
      <motion.div variants={variants}>
        <img
          className="w-full h-54 mt-3 object-cover rounded-3xl"
          src="/images/guestbook.png"
          alt="Guestbook"
        />
      </motion.div>

      <motion.div variants={variants}>
        <Guestbookmsg />
      </motion.div>

      <motion.div variants={variants}>
        <RecentMsgs />
      </motion.div>
    </motion.section>
  );
}