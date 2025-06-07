import React, { useEffect, useState, useRef } from 'react';

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    setChatHistory((prev) => [...prev, { sender: 'user', message: userMessage }]);

    try {
      const response = await fetch('http://127.0.0.1:3000/api/v1/chatbot/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) throw new Error('Failed to communicate with the chatbot API.');

      const data = await response.json();
      setChatHistory((prev) => [...prev, { sender: 'bot', message: data.reply }]);
    } catch (error) {
      console.error("Error:", error);
      setChatHistory((prev) => [...prev, { sender: 'bot', message: 'Error: unable to fetch reply.' }]);
    }

    setUserMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  return (
    <div className="container py-5" >
      <div className="card mx-auto" style={{ maxWidth: '600px', height: '80vh' }}>
        <div className="card-header bg-primary text-white text-center">
          <h5 className="mb-0">AI Chatbot</h5>
        </div>

        <div className="card-body overflow-auto" style={{ height: 'calc(100% - 120px)' }}>
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`d-flex mb-3 ${chat.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
            >
              <div
                className={`p-2 rounded ${
                  chat.sender === 'user' ? 'bg-primary text-white' : 'bg-light text-dark'
                }`}
                style={{ maxWidth: '75%' }}
              >
                {chat.message}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="card-footer d-flex gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Type your message here..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="btn btn-primary" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
