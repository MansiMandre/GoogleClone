import React, { useState } from 'react';
import { FaMicrophone, FaSearch, FaFlask, FaTh, FaUserCircle } from 'react-icons/fa';
import { MdOutlineCenterFocusWeak } from 'react-icons/md';
import mahadev from './assets/mahadev.jpg'
const suggestions = [
  "React", "JavaScript", "Tailwind", "Gmail", "GPT", "ChatGPT"
];

function App() {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);

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
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '');
  }
};


  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-800 font-sans">
      
      {/* Top Navbar */}
      <nav className="flex justify-between space-evenly items-center px-6 py-3 text-sm">
        <div className="flex space-x-6">
          <a href="https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header" className="hover:underline">About</a>
          <a href="https://store.google.com/in/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN&pli=1" className="hover:underline">Store</a>
        </div>
        <div className="flex space-x-6 items-center">
          <a href="https://mail.google.com/mail/u/0/" className="hover:underline">Gmail</a>
          <a href="https://www.google.com/imghp?hl=en&ogbl" className="hover:underline">Images</a>
        <a
  href="https://labs.google.com/search?source=hp"
  target="_blank"
  rel="noopener noreferrer"
  className="text-lg cursor-pointer"
>
  <FaFlask />
</a>

          <FaTh className="text-lg cursor-pointer" />
        <img
  src={mahadev}
  alt="Profile"
  className="w-8 h-8 rounded-full cursor-pointer"
/>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center mt-24">
        {/* Google Logo */}
        <h1 className="text-[92px] font-semibold tracking-tight">
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

            <FaMicrophone className="text-gray-500 mr-3 cursor-pointer" />
            <MdOutlineCenterFocusWeak className="text-gray-500 cursor-pointer" />
          </div>

          {filtered.length > 0 && (
            <ul className="absolute left-0 right-0 bg-white border border-gray-300 mt-2 rounded shadow z-10">
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
        <div className="mt-6 space-x-3">
         <button
  onClick={() => {
    if (query.trim()) {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`
    }
  }}
  className="px-4 py-2 bg-gray-100 rounded hover:border hover:shadow text-sm"
>
  Google Search
</button>

          <button  onClick={() => window.open('https://doodles.google/', '')}className="px-4 py-2 bg-gray-100 rounded hover:border hover:shadow text-sm">
            I'm Feeling Lucky
          </button>
        </div>

        {/* Language Links */}
        <p className="mt-6 text-sm text-center text-gray-700">
          Google offered in: 
          <a href="#" className="text-blue-700 mx-1 hover:underline">हिन्दी</a>
          <a href="#" className="text-blue-700 mx-1 hover:underline">বাংলা</a>
          <a href="#" className="text-blue-700 mx-1 hover:underline">తెలుగు</a>
          <a href="#" className="text-blue-700 mx-1 hover:underline">मराठी</a>
          <a href="#" className="text-blue-700 mx-1 hover:underline">தமிழ்</a>
          <a href="#" className="text-blue-700 mx-1 hover:underline">ગુજરાતી</a>
          <a href="#" className="text-blue-700 mx-1 hover:underline">ಕನ್ನಡ</a>
          <a href="#" className="text-blue-700 mx-1 hover:underline">മലയാളം</a>
          <a href="#" className="text-blue-700 mx-1 hover:underline">ਪੰਜਾਬੀ</a>
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-sm text-gray-700 mt-16">
        <div className="border-b border-gray-300 px-6 py-3">
          <p>India</p>
        </div>
        <div className="flex justify-between px-6 py-3">
          <div className="flex space-x-4">
            <a href="https://business.google.com/in/google-ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1" className="hover:underline">Advertising</a>
            <a href="https://business.google.com/in/business-profile/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1" className="hover:underline">Business</a>
            <a href="https://www.google.com/search/howsearchworks/?fg=1" className="hover:underline">How Search works</a>
          </div>
          <div className="flex space-x-4">
            <a href="https://policies.google.com/privacy?hl=en-IN&fg=1" className="hover:underline">Privacy</a>
            <a href="https://policies.google.com/terms?hl=en-IN&fg=1" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
