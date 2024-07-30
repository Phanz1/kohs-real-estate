// src/components/AgentContact.js
import React, { useState } from 'react';

const agents = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
  // Add more agents as needed
];

const Blogs = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [query, setQuery] = useState('');
  const [chatMessage, setChatMessage] = useState('');

  const handleSearch = () => {
    const agent = agents.find((agent) =>
      agent.name.toLowerCase().includes(query.toLowerCase())
    );
    setSelectedAgent(agent);
  };

  const handleChat = (e) => {
    e.preventDefault();
    if (chatMessage && selectedAgent) {
      console.log(`Message to ${selectedAgent.name}: ${chatMessage}`);
      setChatMessage('');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Find and Contact an Agent</h2>
      <div className="form-group">
        <label htmlFor="agentSearch">Search for an Agent:</label>
        <input
          type="text"
          className="form-control"
          id="agentSearch"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleSearch}>
          Search
        </button>
      </div>

      {selectedAgent && (
        <div className="mt-4">
          <h3>Agent Details</h3>
          <p>Name: {selectedAgent.name}</p>
          <p>Email: {selectedAgent.email}</p>
          <p>Phone: {selectedAgent.phone}</p>

          <h4>Chat with {selectedAgent.name}</h4>
          <form onSubmit={handleChat}>
            <div className="form-group">
              <label htmlFor="chatMessage">Message:</label>
              <input
                type="text"
                className="form-control"
                id="chatMessage"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Blogs;
