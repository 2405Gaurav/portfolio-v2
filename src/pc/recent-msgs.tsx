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
  }, []);//jsut yestedrady i did the useeffect and now i wans tbale to think if using ut he he  he 

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
    <div className="space-y-4">
        <div className="text-xl font-bold">Recent Messages</div>
      {messages.map((msg: any) => (
        <div key={msg.id} className="flex items-center gap-3">
          <img
            src={msg.user_image}
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">{msg.user_name}</p>
            <p>{new Date(msg.created_at).toLocaleDateString()}</p>
            <p className="text-gray-500 text-sm">{msg.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
