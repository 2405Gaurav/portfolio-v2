// "use client";
// import { useEffect, useState } from "react";

// export default function RecentMsgs() {
//   const [messages, setMessages] = useState<any[] | null>(null);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     fetch("/api/guestbook")
//       .then((res) => res.json())
//       .then((data) => setMessages(data))
//       .catch(() => setError(true));
//   }, []);//jsut yestedrady i did the useeffect and now i wans tbale to think if using ut he he  he 

//   if (error) {
//     return <div className="text-red-500">Failed to load messages</div>;
//   }

//   if (messages === null) {
//     return <div>Loading messages...</div>;
//   }

//   if (messages.length === 0) {
//     return <div>No messages yet</div>;
//   }

//   return (
//     <div className="space-y-4">
//         <div className="text-4xl font-bold">Recent Messages</div>
//       {messages.map((msg: any) => (
//         <div key={msg.id} className="flex items-center gap-3">
//           <img
//             src={msg.user_image}
//             alt="avatar"
//             className="w-8 h-8 rounded-full"
//           />
//           <div>
//             <p className="font-semibold text-sm">{msg.user_name}</p>
//             <p>{new Date(msg.created_at).toLocaleDateString()}</p>
//             <p className="text-gray-500 text-sm">{msg.message}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


"use client";
import { useEffect, useState } from "react";

export default function RecentMsgs() {
  const [messages, setMessages] = useState<any[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/guestbook")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <div className="text-red-500">Failed to load messages</div>;
  }

  if (messages === null) {
    return <div>Loading messages...</div>;
  }

  if (messages.length === 0) {
    return <div>No messages yet</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Changed text-white to text-gray-900 */}
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Recent Messages</h2>
      
      {messages.map((msg: any) => (
        <div 
          key={msg.id} 
          // Changed border-gray-800 to border-gray-200 (lighter border)
          className="flex gap-4 pb-6 border-b border-gray-200"
        >
          <img
            src={msg.user_image}
            alt="avatar"
            className="w-12 h-12 rounded-full shrink-0"
          />
          <div className="flex-1">
            <div className="flex items-baseline gap-3 mb-2">
              {/* Changed text-white to text-gray-900 */}
              <p className="font-semibold text-gray-900 text-lg">{msg.user_name}</p>
              
              <p className="text-gray-500 text-sm">
                {new Date(msg.created_at).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric'
                })}
              </p>
            </div>
            {/* Changed text-gray-300 to text-gray-600 (darker text for readability) */}
            <p className="text-gray-600 leading-relaxed">{msg.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}