import React from 'react';

function WebringBadge() {
  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Webring Badge
        </h1>
        <img 
          src="/eric-badge.png" 
          alt="Eric's Webring Badge" 
          className="mx-auto rounded-lg shadow-lg"
        />
        <p className="mt-4 text-white/80">
          <a href="/" className="text-yellow-400 hover:text-yellow-300 transition-colors">
            ← Back to Home
          </a>
        </p>
      </div>
    </div>
  );
}

export default WebringBadge; 