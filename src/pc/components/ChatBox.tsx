import React, { useEffect, useRef, useState } from "react";
import { generateAIResponse } from "@/config/chat-gemini";

const XIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

type PersonalityTone = "default" | "funny" | "advice" | "educational" | "professional";

interface Message {
  user?: string;
  ai?: string;
}

export default function ChatBox() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [shouldScroll, setShouldScroll] = useState(false);

  const personalityTone: PersonalityTone = "default";
  const temperature = 0.7;

  const messagesRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const el = messagesRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  };

  const handleScroll = () => {
    const el = messagesRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    setIsAtBottom(scrollHeight - scrollTop - clientHeight < 50);
  };

  useEffect(() => {
    if (shouldScroll) {
      scrollToBottom();
      setShouldScroll(false);
    }
  }, [chatHistory, shouldScroll]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage = message.trim();
    setMessage("");
    setError("");
    setIsLoading(true);

    setChatHistory((prev) => [...prev, { user: userMessage }]);

    try {
      const aiResponse = await generateAIResponse(userMessage, temperature, personalityTone);

      setChatHistory((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { ...updated[updated.length - 1], ai: aiResponse };
        return updated;
      });

      setShouldScroll(true);
    } catch (err) {
      console.error(err);
      setError("Failed to get response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-row sm:gap-2 gap-4 mt-6 pl-0 flex-wrap relative z-40">
      <button
        className="group relative inline-flex items-center justify-center whitespace-nowrap text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-zinc-700/50 hover:border-blue-400/50 cursor-pointer h-12 px-6 rounded-xl bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-800/80 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transform hover:scale-[1.02] active:scale-[0.98]"
        aria-label="Chat with me"
        onClick={() => setShow((s) => !s)}
      >
        <svg
          className="pointer-events-none size-6 shrink-0 mr-3 transition-transform group-hover:rotate-12 text-blue-400"
          viewBox="0 0 512 512"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M87.48 380c1.2-4.38-1.43-10.47-3.94-14.86a42.63 42.63 0 0 0-2.54-3.8 199.81 199.81 0 0 1-33-110C47.64 139.09 140.72 48 255.82 48 356.2 48 440 117.54 459.57 209.85a199 199 0 0 1 4.43 41.64c0 112.41-89.49 204.93-204.59 204.93-18.31 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.14 31.14 0 0 0-11.13-2.07 30.7 30.7 0 0 0-12.08 2.43L81.5 462.78a15.92 15.92 0 0 1-4.66 1.22 9.61 9.61 0 0 1-9.41-9.74 15.85 15.85 0 0 1 .6-3.29z"
          />
          <circle cx="160" cy="256" r="32" />
          <circle cx="256" cy="256" r="32" />
          <circle cx="352" cy="256" r="32" />
        </svg>
        <span className="text-gray-200 group-hover:text-blue-400 transition-colors">
          Chat with me
        </span>
      </button>

      <button
        className="items-center justify-center whitespace-nowrap text-[0.55rem] font-medium transition-all duration-300 focus-visible:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/50 h-14 w-14 p-0 rounded-full cursor-pointer fixed bottom-6 right-6 z-50 hidden shadow-lg shadow-black/50"
        onClick={() => setShow(true)}
        aria-label="Open chat"
        aria-expanded={show}
        style={{ display: show ? "none" : "flex" }}
      >
        <svg
          className="pointer-events-none flex items-center size-7 shrink text-blue-400"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M87.48 380c1.2-4.38-1.43-10.47-3.94-14.86a42.63 42.63 0 0 0-2.54-3.8 199.81 199.81 0 0 1-33-110C47.64 139.09 140.72 48 255.82 48 356.2 48 440 117.54 459.57 209.85a199 199 0 0 1 4.43 41.64c0 112.41-89.49 204.93-204.59 204.93-18.31 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.14 31.14 0 0 0-11.13-2.07 30.7 30.7 0 0 0-12.08 2.43L81.5 462.78a15.92 15.92 0 0 1-4.66 1.22 9.61 9.61 0 0 1-9.41-9.74 15.85 15.85 0 0 1 .6-3.29z"
          />
          <circle cx="160" cy="256" r="32" />
          <circle cx="256" cy="256" r="32" />
          <circle cx="352" cy="256" r="32" />
        </svg>
      </button>

      {show && (
        <div
          className="fixed z-50 bottom-6 right-6 w-[92vw] sm:w-[400px] h-[78vh] sm:h-[600px]
          flex flex-col bg-[#09090b] border border-zinc-800/50 rounded-2xl shadow-2xl shadow-black/80
          overflow-hidden ring-1 ring-white/5"
        >
          <div className="relative flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-md">
            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-white">Hello! I'm Gaurav Thakur</h2>
              <p className="text-xs text-zinc-400">Online</p>
            </div>
            <button
              className="h-8 w-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all"
              onClick={() => setShow(false)}
              aria-label="Close chat modal"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          <div
            ref={messagesRef}
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
          >
            {chatHistory.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-zinc-500 space-y-4">
                <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                  <svg className="w-8 h-8 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <p className="text-sm">Ask me anything about my projects!</p>
              </div>
            )}

            {chatHistory.map((chat, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                {chat.user && (
                  <div className="flex justify-end">
                    <div className="bg-blue-600/20 border border-blue-500/20 text-blue-100 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] text-sm leading-relaxed">
                      {chat.user}
                    </div>
                  </div>
                )}
                {chat.ai && (
                  <div className="flex justify-start">
                    <div className="bg-zinc-800/50 border border-zinc-700/50 text-zinc-200 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] text-sm leading-relaxed">
                      {chat.ai}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                  <div className="flex space-x-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" />
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="flex justify-center my-2">
                <div className="text-xs bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1.5 rounded-full flex items-center gap-2">
                  <span>{error}</span>
                  <button
                    onClick={() => handleSubmit()}
                    className="underline hover:text-red-300 font-medium"
                  >
                    Retry
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 bg-zinc-900/30 border-t border-zinc-800 backdrop-blur-sm">
            <form
              className="relative flex gap-2 items-center"
              onSubmit={(e) => {
                handleSubmit(e);
                setShouldScroll(true);
              }}
            >
              <input
                placeholder="Ask a question..."
                required
                className="w-full pl-4 pr-12 py-3 bg-zinc-950/50 border border-zinc-800/80 text-white rounded-xl focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all text-sm placeholder-zinc-600 shadow-inner"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isLoading}
              />
              <button
                className={`absolute right-1.5 top-1.5 bottom-1.5 aspect-square flex items-center justify-center rounded-lg transition-all duration-200 ${
                  !message.trim() || isLoading
                    ? "bg-zinc-800 text-zinc-600 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/20"
                }`}
                type="submit"
                disabled={isLoading || !message.trim()}
                aria-label="Send message"
              >
                <svg className="w-4 h-4 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>

          {!isAtBottom && (
            <button
              className="absolute right-5 bottom-20 h-8 w-8 flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 shadow-lg cursor-pointer hover:bg-zinc-700 transition-all z-10"
              onClick={() => {
                scrollToBottom();
                setIsAtBottom(true);
              }}
            >
              <svg className="h-4 w-4 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
