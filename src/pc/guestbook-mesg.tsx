// "use client";
// import {signIn, signOut, useSession} from "next-auth/react";
//  //we will also need a state to store the message that the user wants to send to me.
// import { useState } from "react";


// export async function submitMessage(message:string){
//     //this function will send the message to the backend
//     await fetch("/api/guestbook", {
//   method: "POST",
//   body: JSON.stringify({ message }),
// });
// }
// //now i will worrk on tqo things ,no empty message and on send the msg the recent msg should refresh 


// export default function Guestbookmsg() {
//   const [message,setMessage]=useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   const { data: session, status } = useSession();//This line means: 👉 "Give me the current login session and the loading state of authentication."
// //here we are destructering the thingss use seesion give us two things: session and status,so we rename the session->data
// //and status can be "loading","authenticated" or "unauthenticated"

// if(status=="loading"){
//   return (
//     <div className="p-6 max-w-xl mx-auto text-center">
//       <p className="text-gray-400">Please wait while we load your session...</p>
//     </div>
//   )
// }

// //if user is not logged in then show the sign in button
//   if (!session) {
//     return (
//       <div className="p-6 max-w-xl mx-auto text-center space-y-4">
//         <button
//           onClick={() => signIn("github")}
//           className="px-6 py-3 rounded-lg bg-white text-black hover:bg-gray-100 transition-all duration-200 font-medium"
//         >
//           Sign in
//         </button>
//       </div>
//     );
//   }
  
//   return (
//     <>
//       <div className="p-6 max-w-xl mx-auto text-center space-y-4">
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="px-6 py-3 rounded-lg bg-white text-black hover:bg-gray-100 transition-all duration-200 font-medium"
//         >
//           Leave a message
//         </button>
        
//         <button
//           onClick={() => signOut()}
//           className="ml-4 text-sm text-gray-400 hover:text-gray-300 px-3 py-1.5 rounded-md border border-gray-700 hover:border-gray-600 transition-all duration-200"
//         >
//           Logout
//         </button>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-neutral-900 rounded-lg p-6 max-w-md w-full mx-4 relative">
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
//             >
//               ✕
//             </button>
            
//             <h2 className="text-2xl font-semibold text-white mb-4">
//               Write Something Nice :3
//             </h2>
            
//             <textarea
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Leave a message..."
//               className="w-full border border-gray-700 focus:border-gray-500 rounded-lg p-3 min-h-[120px] bg-neutral-800 text-white placeholder-gray-500 outline-none transition-colors duration-200 mb-4"
//             />
            
//             <button
//               className="px-6 py-2 rounded-md bg-neutral-700 text-white hover:bg-neutral-600 transition-all duration-200 font-medium"
//               onClick={() => {
//                 if (message.trim().length > 0) {
//                   submitMessage(message);
//                   setMessage("");
//                   setIsModalOpen(false);
//                 } else {
//                   alert("Please enter a message");
//                 }
//               }}
//             >
//               Sign
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


// "use client";

// import { signIn, signOut, useSession } from "next-auth/react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { Loader2 } from "lucide-react";

// export default function GuestbookMsg() {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   const [message, setMessage] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async () => {
//     if (!message.trim()) return;

//     setIsSubmitting(true);

//     try {
//       await fetch("/api/guestbook", {
//         method: "POST",
//         body: JSON.stringify({ message }),
//       });

//       setMessage("");
//       setIsModalOpen(false);
//       router.refresh();
//     } catch (error) {
//       console.error("Failed to sign guestbook", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // ================= LOADING =================
//   if (status === "loading") {
//     return (
//       <div className="p-6 max-w-xl mx-auto text-center flex justify-center">
//         <Loader2 className="animate-spin text-gray-500 w-6 h-6" />
//       </div>
//     );
//   }

//   // ================= NOT LOGGED IN =================
//   if (!session) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}        // first launch effect
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//         className="p-6 max-w-xl mx-auto text-center space-y-4"
//       >
//         {/* GitHub */}
//         <button
//           onClick={() => signIn("github")}
//           className="group relative w-full px-6 py-3 rounded-full bg-white text-black font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
//         >
//           Sign in with GitHub
//           <div className="absolute inset-0 rounded-full bg-white blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
//         </button>

//         {/* Google */}
//         <button
//           onClick={() => signIn("google")}
//           className="group relative w-full px-6 py-3 rounded-full bg-neutral-900 border border-neutral-700 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
//         >
//           Sign in with Google
//           <div className="absolute inset-0 rounded-full bg-white/10 blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
//         </button>
//       </motion.div>
//     );
//   }

//   // ================= LOGGED IN =================
//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}   // first entrance animation
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="p-6 max-w-xl mx-auto text-center space-y-4"
//       >
//         <div className="flex items-center justify-center gap-4">
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="px-6 py-3 rounded-lg bg-white text-black font-bold shadow-md hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-200"
//           >
//             Leave a message
//           </button>

//           <button
//             onClick={() => signOut()}
//             className="px-4 py-2.5 rounded-lg border border-neutral-700 text-neutral-400 text-sm hover:text-white hover:border-neutral-500 hover:bg-neutral-800 transition-all duration-200"
//           >
//             Logout
//           </button>
//         </div>
//       </motion.div>

//       {/* ================= MODAL ================= */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center">
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsModalOpen(false)}
//               className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//             />

//             {/* Modal */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.92, y: 30 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.92, y: 30 }}
//               transition={{ type: "spring", damping: 22, stiffness: 260 }}
//               className="relative w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 mx-4"
//             >
//               {/* Close */}
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
//               >
//                 ✕
//               </button>

//               <h2 className="text-xl font-bold text-white mb-1">
//                 Write Something Nice
//                 <span className="text-neutral-500 font-serif italic ml-2">
//                   Future me will smile.
//                 </span>
//               </h2>

//               <p className="text-sm text-neutral-400 mb-4">
//                 Your message will appear publicly on the guestbook.
//               </p>

//               <textarea
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="Type your message here..."
//                 disabled={isSubmitting}
//                 className="w-full h-32 bg-neutral-800 border border-neutral-700 rounded-xl p-4 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all resize-none mb-4"
//               />

//               <div className="flex justify-end gap-2">
//                 <button
//                   onClick={() => setIsModalOpen(false)}
//                   disabled={isSubmitting}
//                   className="px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   onClick={handleSubmit}
//                   disabled={isSubmitting || message.length === 0}
//                   className="flex items-center gap-2 px-6 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 active:scale-95 disabled:opacity-50 transition-all duration-200"
//                 >
//                   {isSubmitting ? (
//                     <Loader2 className="w-4 h-4 animate-spin" />
//                   ) : (
//                     "Sign Guestbook"
//                   )}
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }



"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, X } from "lucide-react";

export default function GuestbookMsg() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleMessageClick = () => {
    if (!session) {
      setIsSignInModalOpen(true);
    } else {
      setIsMessageModalOpen(true);
    }
  };

  const handleSubmit = async () => {
    if (!message.trim()) return;

    setIsSubmitting(true);

    try {
      await fetch("/api/guestbook", {
        method: "POST",
        body: JSON.stringify({ message }),
      });

      setMessage("");
      setIsMessageModalOpen(false);
      router.refresh();
    } catch (error) {
      console.error("Failed to sign guestbook", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ================= LOADING =================
  if (status === "loading") {
    return (
      <div className="p-6 max-w-xl mx-auto text-center flex justify-center">
        <Loader2 className="animate-spin text-gray-500 w-6 h-6" />
      </div>
    );
  }

  // ================= MAIN VIEW =================
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="p-6 max-w-xl mx-auto text-center"
      >
        {/* Message Button */}
        <button
          onClick={handleMessageClick}
          className="px-6 py-3 rounded-lg bg-white text-black font-bold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Leave a message
        </button>

        {/* Logout Button - Only show if logged in */}
        {session && (
          <button
            onClick={() => signOut()}
            className="block mt-3 mx-auto px-4 py-2 text-sm border border-neutral-700 text-neutral-400 rounded-lg hover:text-white hover:border-neutral-500 hover:bg-neutral-800 transition-all duration-200"
          >
            Logout
          </button>
        )}
      </motion.div>

      {/* ================= SIGN IN MODAL ================= */}
      <AnimatePresence>
        {isSignInModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSignInModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: "spring", damping: 22, stiffness: 260 }}
              className="relative w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 mx-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsSignInModalOpen(false)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-lg font-bold text-white mb-1">
                Sign in to guestbook
              </h2>

              <p className="text-xs text-neutral-400 mb-5">
                Choose your preferred method
              </p>

              <div className="space-y-2">
                {/* GitHub */}
                <button
                  onClick={() => signIn("github")}
                  className="w-full px-4 py-2.5 rounded-lg bg-white text-black font-medium text-sm hover:bg-gray-100 active:scale-95 transition-all duration-200"
                >
                  Continue with GitHub
                </button>

                {/* Google */}
                <button
                  onClick={() => signIn("google")}
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-800 border border-neutral-700 text-white font-medium text-sm hover:bg-neutral-700 active:scale-95 transition-all duration-200"
                >
                  Continue with Google
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= MESSAGE MODAL ================= */}
      <AnimatePresence>
        {isMessageModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMessageModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: "spring", damping: 22, stiffness: 260 }}
              className="relative w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 mx-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMessageModalOpen(false)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-lg font-bold text-white mb-1">
                Leave a message
              </h2>

              <p className="text-xs text-neutral-400 mb-4">
                Your message will appear on the guestbook
              </p>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                disabled={isSubmitting}
                className="w-full h-24 bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-all resize-none mb-4"
              />

              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => setIsMessageModalOpen(false)}
                  disabled={isSubmitting}
                  className="px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || message.trim().length === 0}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-medium text-sm hover:bg-gray-100 active:scale-95 disabled:opacity-50 transition-all duration-200"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Sign"
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}