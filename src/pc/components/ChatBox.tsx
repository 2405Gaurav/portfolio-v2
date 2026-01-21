import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { generateAIResponse } from '@/config/chat-gemini';

type PersonalityTone = "default" | "funny" | "advice" | "educational" | "professional";

interface Message {
  user?: string;
  ai?: string;
}



export default function ChatBox() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [shouldScroll, setShouldScroll] = useState(false);
  const [personalityTone] = useState<PersonalityTone>('default');
  const [temperature] = useState(0.7);
  
  const chatRef = useRef<HTMLDivElement>(null);
  const chatWithMeButtonRef = useRef<HTMLButtonElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const handleScroll = () => {
    if (chatRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatRef.current;
      setIsAtBottom(scrollHeight - scrollTop - clientHeight < 50);
    }
  };

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (shouldScroll) {
      scrollToBottom();
      setShouldScroll(false);
    }
  }, [chatHistory, shouldScroll]);

  const handleChatClick = () => {
    setShow(!show);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage = message;
    setMessage('');
    setError('');
    setIsLoading(true);

    setChatHistory(prev => [...prev, { user: userMessage }]);

    try {
      const aiResponse = await generateAIResponse(userMessage, temperature, personalityTone);
      setChatHistory(prev => {
        const newHistory = [...prev];
        newHistory[newHistory.length - 1].ai = aiResponse;
        return newHistory;
      });
      setShouldScroll(true);
    } catch (err) {
      setError('Failed to get response. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-row sm:gap-2 gap-4 mt-6 pl-3 flex-wrap">
        <button
          ref={chatWithMeButtonRef}
          className="group relative inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-zinc-800 hover:border-blue-400 cursor-pointer h-11 px-5 rounded-lg bg-gradient-to-r from-transparent to-transparent hover:from-blue-50/5 hover:to-purple-50/5 hover:shadow-lg hover:shadow-blue-500/10 transform hover:scale-[1.02] active:scale-[0.98]"
          aria-label="Chat with me"
          onClick={handleChatClick}
        >
          <svg
            className="pointer-events-none size-5 shrink-0 mr-2.5 transition-transform group-hover:rotate-12"
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
          <span className="group-hover:text-blue-400 transition-colors">Chat with me</span>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none"></div>
        </button>

        <button
          ref={toggleButtonRef}
          className="items-center justify-center whitespace-nowrap text-[0.55rem] font-medium transition-colors focus-visible:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 hover:bg-zinc-800 h-10 w-10 p-0 rounded-md border cursor-pointer fixed bottom-4 right-4 z-50 hidden md:flex bg-zinc-900"
          onClick={handleChatClick}
          aria-label="Open chat"
          aria-expanded={show}
        >
          <svg
            className="pointer-events-none flex items-center size-6 shrink"
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
            ref={chatRef}
            className="fixed z-50 bottom-0 right-0 w-full sm:max-w-[400px] h-[80vh] min-h-[400px] max-h-[600px] flex flex-col bg-zinc-900 border border-zinc-800 rounded-t-lg sm:rounded-lg sm:bottom-16 sm:right-4 p-4 transition-all ease-in-out duration-300 shadow-2xl"
            onScroll={handleScroll}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 h-10 w-10 flex items-center justify-center rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-700 hover:bg-zinc-800 transition-colors"
              onClick={handleCloseModal}
              aria-label="Close chat modal"
            >
              <X className="h-6 w-6 text-gray-400 hover:text-red-400 transition-colors" />
            </button>

            {/* Header */}
            <div className="mb-4">
              <h2 className="text-lg font-bold text-white">Hello! I'm Gaurav 👋</h2>
              <p className="text-sm text-gray-400">How can I help you today?</p>
            </div>

            {/* Chat messages container */}
            <div className="flex-1 overflow-y-auto mb-4 pr-2">
              <div className="min-h-full flex flex-col justify-end">
                <div className="space-y-4">
                  {chatHistory.map((chat, index) => (
                    <div key={index} className="flex flex-col gap-3">
                      {chat.user && (
                        <div className="flex justify-end">
                          <div className="rounded-lg text-sm sm:text-base bg-zinc-800/30 border border-zinc-700/50 shadow px-3 py-2 max-w-[85%] sm:max-w-[90%]">
                            <strong className="text-blue-400">You:</strong> <span className="text-gray-200">{chat.user}</span>
                          </div>
                        </div>
                      )}
                      {chat.ai && (
                        <div className="flex justify-start">
                          <div className="rounded-lg text-sm sm:text-base bg-zinc-800/30 border border-zinc-700/50 shadow px-3 py-2 max-w-[85%] sm:max-w-[90%]">
                            <strong className="text-purple-400">Gaurav:</strong> <span className="text-gray-200">{chat.ai}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="rounded-lg text-sm sm:text-base bg-zinc-800/30 border border-zinc-700/50 shadow px-3 py-2 max-w-[85%] sm:max-w-[90%]">
                        <strong className="text-purple-400">Gaurav:</strong>
                        <div className="flex space-x-2 mt-1">
                          <div
                            className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="text-sm sm:text-base text-red-400 flex items-center gap-2">
                      {error}
                      <button
                        onClick={() => handleSubmit()}
                        className="text-sm sm:text-base underline hover:text-red-300"
                      >
                        Retry
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <form
              className="relative mt-auto flex gap-2"
              onSubmit={(e) => {
                handleSubmit(e);
                setShouldScroll(true);
              }}
            >
              <input
                placeholder="Ask about my skills or projects..."
                required
                className="w-full p-3 sm:p-2 border border-zinc-700 bg-zinc-800 text-white rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-200 text-sm sm:text-base placeholder-gray-500"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit(e);
                    setShouldScroll(true);
                  }
                }}
              />
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm sm:text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 h-12 sm:h-10 px-4 py-2 rounded-md cursor-pointer min-w-[80px] bg-green-700 hover:bg-green-600 text-white"
                type="submit"
                disabled={isLoading || !message.trim()}
              >
                Send
              </button>
            </form>

            {/* Scroll to bottom button */}
            {!isAtBottom && (
              <button
                className="absolute right-6 bottom-20 h-10 w-10 flex items-center justify-center rounded-full bg-zinc-800 shadow-lg cursor-pointer hover:bg-zinc-700 transition-colors"
                onClick={() => {
                  if (chatRef.current) {
                    chatRef.current.scrollTo({
                      top: chatRef.current.scrollHeight,
                      behavior: "smooth",
                    });
                    setIsAtBottom(true);
                  }
                }}
                aria-label="Scroll to bottom"
              >
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}