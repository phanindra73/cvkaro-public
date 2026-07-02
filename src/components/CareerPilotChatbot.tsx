import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "What is CVKaro?",
  "How does Gap Analysis work?",
  "Tell me about Personalized Learning Paths",
  "What are the pricing plans?",
];

export default function CareerPilotChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "model",
      text: "Hello! I am **CareerPilot**, your AI Career Assistant. 🚀\n\nI can help you build an ATS-friendly resume, identify technical skill gaps, and explore personalized learning paths on CVKaro. How can I guide your career journey today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  // Formatter for rich markdown-like messages (bold text, lists, and links)
  const renderFormattedText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, lineIndex) => {
      // Check if it's a bullet point
      const isBullet = line.trim().startsWith("- ") || line.trim().startsWith("* ");
      const cleanLine = isBullet ? line.trim().substring(2) : line;

      // Handle bold formatting (**text**)
      const parts = [];
      let currentIdx = 0;
      const boldRegex = /\*\*(.*?)\*\*/g;
      let match;

      while ((match = boldRegex.exec(cleanLine)) !== null) {
        if (match.index > currentIdx) {
          parts.push(cleanLine.substring(currentIdx, match.index));
        }
        parts.push(
          <strong key={match.index} className="text-brand-green font-semibold">
            {match[1]}
          </strong>
        );
        currentIdx = boldRegex.lastIndex;
      }

      if (currentIdx < cleanLine.length) {
        parts.push(cleanLine.substring(currentIdx));
      }

      if (isBullet) {
        return (
          <li key={lineIndex} className="ml-4 list-disc text-xs sm:text-sm text-text-primary leading-relaxed my-1">
            {parts.length > 0 ? parts : cleanLine}
          </li>
        );
      }

      return (
        <p key={lineIndex} className="text-xs sm:text-sm text-text-primary leading-relaxed my-1 text-left">
          {parts.length > 0 ? parts : cleanLine}
        </p>
      );
    });
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    setError(null);
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      text: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Format chat history for backend (excluding the welcome message ID to keep it clean)
      const chatHistory = messages
        .filter((m) => m.id !== "welcome")
        .map((m) => ({
          role: m.role,
          text: m.text,
        }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: textToSend,
          history: chatHistory,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || errorData.error || "Failed to communicate with CareerPilot.");
      }

      const data = await response.json();

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        role: "model",
        text: data.reply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error("Chatbot API Error:", err);
      setError(err.message || "Something went wrong. Please check your setup.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="careerpilot-chatbot-root">
      {/* Floating Chat Trigger Button */}
      <button
        id="careerpilot-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-brand-green hover:bg-brand-green/90 text-navy-dark rounded-full shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer group focus:outline-hidden"
        title="Chat with CareerPilot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat-icon"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare className="h-6 w-6" />
              {/* Pulsing online status indicator */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white border-2 border-brand-green"></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Chat Window Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="careerpilot-chatbox"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] h-[550px] max-h-[80vh] bg-[#0f1526] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-navy-dark/90 px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-brand-green/10 rounded-xl border border-brand-green/20">
                  <Bot className="h-5 w-5 text-brand-green" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-display font-bold text-sm text-text-primary tracking-tight">CareerPilot</h3>
                    <span className="flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand-green opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                    </span>
                  </div>
                  <p className="text-[10px] text-text-muted font-mono uppercase tracking-wider">Official CVKaro Guide</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/5 rounded-lg text-text-muted hover:text-text-primary transition-colors cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Chat History & Suggested Questions */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 max-w-[85%] ${
                    msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  }`}
                >
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 border text-[10px] font-bold ${
                      msg.role === "user"
                        ? "bg-brand-green/10 border-brand-green/20 text-brand-green"
                        : "bg-white/5 border-white/10 text-text-muted"
                    }`}
                  >
                    {msg.role === "user" ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                  </div>
                  <div
                    className={`rounded-2xl px-3.5 py-2.5 shadow-xs text-xs sm:text-sm ${
                      msg.role === "user"
                        ? "bg-brand-green text-navy-dark rounded-tr-none font-medium"
                        : "bg-white/5 border border-white/10 text-text-primary rounded-tl-none"
                    }`}
                  >
                    <div className="space-y-1">{renderFormattedText(msg.text)}</div>
                  </div>
                </div>
              ))}

              {/* Loader */}
              {isLoading && (
                <div className="flex gap-2.5 max-w-[85%] mr-auto items-center">
                  <div className="h-7 w-7 rounded-full flex items-center justify-center shrink-0 border bg-white/5 border-white/10 text-text-muted">
                    <Bot className="h-3.5 w-3.5 animate-pulse" />
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none px-3.5 py-2.5 text-xs text-text-muted flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                    <span>CareerPilot is searching site info...</span>
                  </div>
                </div>
              )}

              {/* Error Info Box */}
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-400 flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-0.5">Communication Error</p>
                    <p className="opacity-90">{error}</p>
                  </div>
                </div>
              )}

              {/* Prompt Suggestions */}
              {messages.length === 1 && !isLoading && (
                <div className="pt-4 border-t border-white/5">
                  <p className="text-[10px] text-text-muted uppercase font-mono tracking-wider mb-2 flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-brand-green" /> Common Questions:
                  </p>
                  <div className="flex flex-col gap-2">
                    {SUGGESTED_QUESTIONS.map((question, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(question)}
                        className="w-full text-left px-3 py-2 text-xs text-text-primary bg-white/5 hover:bg-brand-green/10 border border-white/5 hover:border-brand-green/30 rounded-xl transition-all cursor-pointer focus:outline-hidden"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="p-3 bg-navy-dark/90 border-t border-white/5 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask CareerPilot anything..."
                disabled={isLoading}
                className="flex-1 bg-white/5 border border-white/10 focus:border-brand-green/50 text-xs sm:text-sm text-text-primary placeholder:text-text-muted/50 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-1 focus:ring-brand-green/20 disabled:opacity-50 transition-all"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2.5 bg-brand-green text-navy-dark hover:scale-105 active:scale-95 disabled:scale-100 disabled:opacity-50 rounded-xl transition-all cursor-pointer flex items-center justify-center focus:outline-hidden shrink-0"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
