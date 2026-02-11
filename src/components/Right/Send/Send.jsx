import React, { useRef, useState } from "react";
import { GrAttachment } from "react-icons/gr";

const Send = ({ onSend, onAttach }) => {
    const [message, setMessage] = useState("");
    const textareaRef = useRef(null);
    const lastSentRef = useRef(0);

    const autoResize = () => {
        const el = textareaRef.current;
        if (!el) return;
        el.style.height = "auto";
        el.style.height = el.scrollHeight + "px";
    };

    const handleSend = () => {
        if (!message.trim()) return;
        const now = Date.now();
        if (now - lastSentRef.current < 300) return;
        lastSentRef.current = now;

        onSend?.(message.trim());
        setMessage("");

        requestAnimationFrame(() => {
            if (textareaRef.current) textareaRef.current.style.height = "auto";
        });
        
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleAttach = () => {
        onAttach?.();
    };

    return (
        <div className="px-4 py-3 mb-8 flex items-center gap-3">
            <div className="relative flex-1">
                <textarea
                    ref={textareaRef}
                    rows={1}
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                        autoResize();
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message..."
                    className="w-full resize-none overflow-hidden rounded-xl bg-[#1f1f23] text-white px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <button
                    onClick={handleAttach}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                >
                    <GrAttachment size={18} />
                </button>
            </div>

            <button
                onClick={handleSend}
                disabled={!message.trim()}
                className={`w-10 h-10 rounded-md flex items-center justify-center text-white transition
          ${message.trim()
                        ? "bg-indigo-600 hover:bg-indigo-700"
                        : "bg-gray-600 cursor-not-allowed"}
        `}
            >
                ➤
            </button>
        </div>
    );
};

export default Send;
