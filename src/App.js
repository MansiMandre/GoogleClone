import React, { useState } from 'react';
import { FaMicrophone, FaSearch, FaFlask, FaTh } from 'react-icons/fa';
import { MdOutlineCenterFocusWeak } from 'react-icons/md';
import mahadev from './assets/mahadev.jpg';

const suggestions = [
  "React", "JavaScript", "Tailwind", "Gmail", "GPT", "ChatGPT"
];

function App() {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [isListening, setIsListening] = useState(false);

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    setFiltered(val ? suggestions.filter(s => s.toLowerCase().includes(val.toLowerCase())) : []);
  };

  const handleSuggestionClick = (value) => {
    setQuery(value);
    setFiltered([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  };

  const startVoiceSearch = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Your browser does not support Speech Recognition');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setIsListening(true);
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      setIsListening(false);

      // Auto search
      if (transcript.trim()) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(transcript)}`;
      }
    };

    recognition.onend = () => setIsListening(false);
    recognition.onerror = (event) => {
      setIsListening(false);
      alert('Speech recognition error: ' + event.error);
    };
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-800 font-sans overflow-x-hidden">
      {/* Top Navbar */}
      <nav className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-3 text-sm gap-y-2 sm:gap-y-0">
        <div className="flex space-x-4 sm:space-x-6">
          <a href="https://about.google/" className="hover:underline">About</a>
          <a href="https://store.google.com/in/" className="hover:underline">Store</a>
        </div>
        <div className="flex items-center space-x-4 sm:space-x-6">
          <a href="https://mail.google.com/" className="hover:underline">Gmail</a>
          <a href="https://www.google.com/imghp" className="hover:underline">Images</a>
          <a href="https://labs.google.com/search?source=hp" target="_blank" rel="noopener noreferrer" className="text-lg cursor-pointer">
            <FaFlask />
          </a>
          <FaTh className="text-lg cursor-pointer" />
          <img src={mahadev} alt="Profile" className="w-8 h-8 rounded-full cursor-pointer" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center mt-16 sm:mt-24 px-4">
        {/* Google Logo */}
        <h1 className="text-[48px] sm:text-[92px] font-semibold tracking-tight text-center">
          <span className="text-blue-600">G</span>
          <span className="text-red-600">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-600">g</span>
          <span className="text-green-600">l</span>
          <span className="text-red-600">e</span>
        </h1>

        {/* Search Box */}
        <div className="relative w-full max-w-xl mt-6">
          <div className="flex items-center bg-white border border-gray-300 rounded-full shadow px-4 py-2">
            <FaSearch className="text-gray-500 mr-3" />
            <input
              type="text"
              value={query}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="flex-grow outline-none text-base"
              placeholder="Search Google or type a URL"
            />
            <FaMicrophone
              className={`text-gray-500 mr-3 cursor-pointer hover:text-red-500 ${isListening ? 'animate-pulse' : ''}`}
              onClick={startVoiceSearch}
            />
            <MdOutlineCenterFocusWeak className="text-gray-500 cursor-pointer" />
          </div>

          {isListening && <p className="mt-2 text-blue-600 text-sm text-center animate-pulse">🎤 Listening...</p>}

          {filtered.length > 0 && (
            <ul className="absolute left-0 right-0 bg-white border border-gray-300 mt-2 rounded shadow z-10 max-h-60 overflow-y-auto">
              {filtered.map((s, i) => (
                <li
                  key={i}
                  onClick={() => handleSuggestionClick(s)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:space-x-3">
          <button
            onClick={() => {
              if (query.trim()) {
                window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
              }
            }}
            className="px-4 py-2 bg-gray-100 rounded hover:border hover:shadow text-sm"
          >
            Google Search
          </button>
          <button
            onClick={() => window.open('https://doodles.google/', '')}
            className="px-4 py-2 bg-gray-100 rounded hover:border hover:shadow text-sm"
          >
            I'm Feeling Lucky
          </button>
        </div>

        {/* Language Links */}
        <p className="mt-6 text-sm text-center text-gray-700 flex flex-wrap justify-center">
          Google offered in:
          {["हिन्दी", "বাংলা", "తెలుగు", "मराठी", "தமிழ்", "ગુજરાતી", "ಕನ್ನಡ", "മലയാളം", "ਪੰਜਾਬੀ"].map((lang, i) => (
            <a key={i} href="#" className="text-blue-700 mx-1 hover:underline">{lang}</a>
          ))}
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-sm text-gray-700 mt-16">
        <div className="border-b border-gray-300 px-4 py-3">
          <p>India</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-6 py-3 gap-y-3 sm:gap-y-0">
          <div className="flex flex-wrap gap-4">
            <a href="https://business.google.com/ads" className="hover:underline">Advertising</a>
            <a href="https://business.google.com/in/business-profile" className="hover:underline">Business</a>
            <a href="https://www.google.com/search/howsearchworks/" className="hover:underline">How Search works</a>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://policies.google.com/privacy" className="hover:underline">Privacy</a>
            <a href="https://policies.google.com/terms" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
