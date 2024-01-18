"use client";
import React, { useState, useEffect, useRef } from "react";

const systemMessage = {
  role: "system",
  content: "Explain things like stock market.",
};
const API_KEY = "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";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Algabay AI! Ask me anything!",
      sender: "",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when new messages are added
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const newMessage = {
      message: input,
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);

    setInput(""); // Clear input after sending
  };
  const processMessageToChatGPT = async (chatMessages) => {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    }).then((data) => data.json());

    const chatGPTResponse = response.choices[0].message.content;

    setMessages([
      ...chatMessages,
      {
        message: chatGPTResponse,
        sender: "ChatGPT",
      },
    ]);

    setIsTyping(false);
  };

  return (
    <div className="px-24 max-sm:px-2 w-full h-[100vh] bg-white">
      <h4 className="my-4 text-2xl font-thin text-lime-400">
        CHAT WITH ALGABAY AI ↘
      </h4>
      <div className="w-full h-[85vh] bg-gradient-to-r from-pink-100 to-violet-300 rounded-lg shadow-md relative py-5">
        <div
          ref={chatContainerRef}
          className="flex flex-col space-y-4 overflow-y-auto h-[71vh]"
        >
          {messages.map((message, i) => (
            <div
              key={i}
              className={`flex items-start ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-4 rounded-lg mx-4 max-w-[70%] flex ${
                  message.sender === "user"
                    ? "bg-white text-gray-700"
                    : "bg-white text-gray-700"
                }`}
              >
                {message.sender === "user" ? (
                  <img
                    src="/def.png"
                    className="h-8 rounded-full mr-2"
                    alt="User Logo"
                  />
                ) : (
                  <img
                    src="/newsLogo.png"
                    className="h-8 rounded-full mr-2"
                    alt="Algabay AI Logo"
                  />
                )}
                <p className="mt-1">{message.message}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-start justify-start">
              <div className="mx-4 rounded-lg">
                <div className="animate-bounce">
                  <img
                    src="/newsLogo.png"
                    className="h-10 rounded-lg"
                    alt="Typing Animation"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex py-2 px-4 gap-4 absolute bottom-0 w-full h-16 bg-gray-700 max-sm:flex-col max-sm:items-center">
          <input
            type="text"
            placeholder="Type message here"
            className="flex-1 px-4 rounded-full focus:outline-none bg-gray-700 text-white border border-gray-500 max-sm:mb-4 max-sm:w-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault(); // Prevent the default behavior of the enter key (form submission)
                handleSend();
              }
            }}
          />
          <button
            className="h-12 w-12 text-3xl bg-gray-900 hover:bg-gray-950 text-white rounded-full focus:outline-none max-sm:mt-4"
            onClick={handleSend}
          >
            ↗
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
