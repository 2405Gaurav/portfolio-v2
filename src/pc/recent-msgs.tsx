"use client";
import { useEffect, useState } from "react";

export default function RecentMsgs() {
  const [messages, setMessages] = useState<any[] | null>(null);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const pageSize = 2;

  useEffect(() => {
    fetch("/api/guestbook")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setMessages(data))
      .catch(() => setError(true));
  }, []);

  if (error)
    return <div className="text-red-500 dark:text-red-400">Failed to load messages</div>;

  if (messages === null)
    return <div className="text-gray-600 dark:text-gray-400">Loading messages...</div>;

  if (messages.length === 0)
    return <div className="text-gray-600 dark:text-gray-400">No messages yet</div>;

  const totalPages = Math.ceil(messages.length / pageSize);

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Recent Messages
      </h2>
  <div className="min-h-[300px]">

      {messages.slice(start, end).map((msg: any) => (
        <div
        key={msg.id}
        className="flex gap-4 pb-6 border-b border-gray-200 dark:border-gray-800"
        >
          <img
            src={msg.user_image}
            alt="avatar"
            className="w-12 h-12 rounded-full shrink-0"
            />

          <div className="flex-1">
            <div className="flex items-baseline gap-3 mb-2">
              <p className="font-semibold text-gray-900 dark:text-white text-lg">
                {msg.user_name}
              </p>

              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {new Date(msg.created_at).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {msg.message}
            </p>
          </div>
        </div>
      ))}
      </div>
      {/* total pages should be grater then 1 ,only then we will show pagination  */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center items-center gap-2">
          {/* Prev */}
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            ⬅
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages).keys()].map((n) => {
            const pageNumber = n + 1;

            return (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`px-3 py-1 border rounded ${
                  page === pageNumber ? "bg-amber-600 text-white" : ""
                }`}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* Next */}
          <button
            disabled={page === totalPages}
            onClick={() => setPage((prev) => prev + 1)}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            ➡
          </button>
        </div>
      )}
    </div>
  );
}