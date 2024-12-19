import React, { useState } from 'react';

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    // Append user message to chat history
    setChatHistory([...chatHistory, { sender: 'user', message: userMessage }]);

    // Call the Rails API
    try {
      const response = await fetch('/api/v1/chatbot/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({message: userMessage}),
       });

       if(!response.ok){
        throw new Error('Failed to communicate with the chatbot API.');
       }

       const data =await response.json();
       const botReply = data.reply;

      // Append bot reply to chat history
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { sender: 'user', message: userMessage },
        { sender: 'bot', message: botReply },
      ]);
    } catch (error) {
      console.error("Error communicating with chatbot:", error);
    }

    setUserMessage('');
  };

  return (
    <div>
      <div className="chat-window">
        {chatHistory.map((chat, index) => (
          <div key={index} className={chat.sender}>
            <strong>{chat.sender === 'user' ? 'You: ' : 'Bot: '}</strong>
            {chat.message}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
