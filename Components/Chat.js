"use client";
import React, { useState, useEffect, useRef } from "react";

const systemMessage = {
  role: "system",
  content: "Explain things like stock market.",
};
const API_KEY = "sk-proj-1I8zavqGFi9HNWi8ViEDT3BlbkFJpGhCqYtnedzbJEEz0bbV";

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
    console.log(response);
    //const chatGPTResponse = response.choices[0].message.content;

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
    <div className="bg-white pt-5 h-full">
      <div
        ref={chatContainerRef}
        className="flex flex-col space-y-4 overflow-y-auto h-[76vh] max-sm:h-[70vh] px-4 pb-16"
      >
        {messages.map((message, i) => (
          <div
            key={i}
            className={`flex items-start ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`py-3 px-6 max-sm:p-3 mx-0 md:mx-10 rounded-lg max-w-[70%] md:flex ${
                message.sender === "user"
                  ? "bg-white shadow-sm text-black max-sm:text-sm"
                  : "bg-white shadow-sm text-black max-sm:text-sm"
              }`}
            >
              {message.sender === "user" ? (
                <img
                  src="/def.png"
                  className="h-8 rounded-full mr-2 max-sm:h-5 max-sm:mt-1"
                  alt="User Logo"
                />
              ) : (
                <img
                  src="/newsLogo.png"
                  className="h-8 rounded-full mr-2 max-sm:h-5 max-sm:mt-1"
                  alt="Algabay AI Logo"
                />
              )}
              <p className="mt-1">{message.message}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-start justify-start">
            <div className="mx-2 md:mx-10 rounded-lg">
              <div className="animate-bounce">
                <img
                  src="/newsLogo.png"
                  className="h-8 rounded-full"
                  alt="Typing Animation"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center py-6 px-4 md:px-10 gap-4 absolute bottom-0 w-full h-20 bg-neutral-900 ">
        <input
          type="text"
          placeholder="Type message here"
          className="flex-1 px-4 w-[70%] h-12 rounded-full focus:outline-none bg-neutral-800 text-white border border-neutral-700 md:w-3/4"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <button
          className="h-12 w-12 max-sm:h-10 max-sm:w-10 max-sm:text-xl text-3xl bg-neutral-950 hover:bg-neutral-950 text-white rounded-full focus:outline-none"
          onClick={handleSend}
        >
          ↗
        </button>
      </div>
    </div>
  );
};

export default Chat;
