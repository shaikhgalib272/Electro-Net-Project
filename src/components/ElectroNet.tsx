import React, { useState, useRef, useEffect } from 'react';

interface ChatMessage {
  id: number;
  sender: 'user' | 'bot';
  text: string;
}

export const ElectroNet: React.FC = () => {
  // Search State
  const [searchQuery, setSearchQuery] = useState('');

  // AI Chatbot States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, sender: 'bot', text: 'Hello! ⚡ How can ELECTRO.NET help you today?' },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const chatboxRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages, isChatOpen]);

  // Handle Send Message
  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: ChatMessage = { id: Date.now(), sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');

    // Simulated Bot Reply
    setTimeout(() => {
      let botResponse = "Thanks for reaching out! Our team or an expert will respond shortly.";
      const lower = text.toLowerCase();
      if (lower.includes('price') || lower.includes('cost')) {
        botResponse = "Our electrician visit charges start at ₹199. Final quote depend on repairs!";
      } else if (lower.includes('book') || lower.includes('appointment')) {
        botResponse = "You can book directly by clicking 'Book Now' on any service card!";
      } else if (lower.includes('emergency')) {
        botResponse = "For emergency service, an expert will reach your doorstep within 15 mins!";
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: botResponse },
      ]);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col justify-between">
      {/* ================= NAVIGATION ================= */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto px-5 sm:px-10 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-[#185FA5]">
            ELECTRO<span className="text-[#EF9F27]">.NET</span>
          </div>

          <div className="flex items-center gap-7">
            <div className="hidden md:flex items-center gap-7">
              <a href="#home" className="text-sm font-medium text-slate-600 hover:text-[#185FA5] transition-colors">Home</a>
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-[#185FA5] transition-colors">Services</a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-[#185FA5] transition-colors">How it Works</a>
            </div>
            <button className="border border-[#185FA5] text-[#185FA5] hover:bg-[#E6F1FB] px-5 py-2 rounded-lg text-sm font-medium transition-colors">
              Login
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* ================= HERO SECTION ================= */}
        <section id="home" className="bg-gradient-to-br from-[#f0f7ff] to-[#fffbf0] px-5 sm:px-10 py-12 md:py-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="w-full md:max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[#E6F1FB] border border-[#B5D4F4] text-[#185FA5] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#EF9F27] rounded-full"></span>
                Trusted by 50,000+ homeowners
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
                Reliable Electricians,<br />
                At Your <em className="text-[#EF9F27] not-italic">Doorstep</em><br />
                in Minutes.
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
                Connecting you with verified electrical experts for all your home and office needs. Fast, Safe, and Affordable.
              </p>

              {/* SEARCH BOX */}
              <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-slate-300/80 shadow-md max-w-md mx-auto md:mx-0 mb-8">
                <input
                  type="text"
                  placeholder="Search service (e.g., Fan repair, Wiring)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm text-slate-800 outline-none bg-transparent"
                />
                <button 
                  onClick={() => handleSendMessage(`I am searching for ${searchQuery}`)}
                  className="bg-[#185FA5] hover:bg-[#0C447C] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Search
                </button>
              </div>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-9">
                <button className="bg-[#185FA5] hover:bg-[#0C447C] active:scale-95 text-white font-medium px-7 py-3.5 rounded-lg text-base transition-all flex items-center gap-2 shadow-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  Book an Electrician Now
                </button>
                <span className="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5">
                  <span className="text-[#EF9F27]">★★★★★</span> 4.9 / 5 rating
                </span>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <div className="bg-white border border-slate-200/80 rounded-xl px-5 py-3 shadow-xs min-w-[120px]">
                  <div className="text-2xl font-bold text-[#185FA5]">10k<span className="text-[#EF9F27]">+</span></div>
                  <div className="text-xs text-slate-500 mt-0.5">Verified experts</div>
                </div>
                <div className="bg-white border border-slate-200/80 rounded-xl px-5 py-3 shadow-xs min-w-[120px]">
                  <div className="text-2xl font-bold text-[#EF9F27]">15<span className="text-[#BA7517] text-lg font-semibold">min</span></div>
                  <div className="text-xs text-slate-500 mt-0.5">Avg. response time</div>
                </div>
                <div className="bg-white border border-slate-200/80 rounded-xl px-5 py-3 shadow-xs min-w-[120px]">
                  <div className="text-2xl font-bold text-[#185FA5]">98<span className="text-[#EF9F27]">%</span></div>
                  <div className="text-xs text-slate-500 mt-0.5">Satisfaction rate</div>
                </div>
              </div>
            </div>

            {/* Right SVG Graphic */}
            <div className="w-full md:w-[420px] max-w-[340px] md:max-w-none flex justify-center">
              <svg viewBox="0 0 380 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-sm">
                <rect x="30" y="30" width="320" height="300" rx="20" fill="#E6F1FB" opacity="0.6" />
                <rect x="55" y="55" width="270" height="250" rx="16" fill="#fff" stroke="#B5D4F4" strokeWidth="0.8" />
                <circle cx="190" cy="148" r="68" fill="#E6F1FB" stroke="#B5D4F4" strokeWidth="1" />
                <circle cx="190" cy="148" r="52" fill="#185FA5" opacity="0.08" />
                <polygon points="190,90 160,158 188,158 176,210 222,138 192,138" fill="#EF9F27" />
                <polygon points="190,90 160,158 188,158 176,210 222,138 192,138" fill="none" stroke="#BA7517" strokeWidth="1.2" />
                <rect x="78" y="235" width="100" height="44" rx="10" fill="#E6F1FB" stroke="#B5D4F4" strokeWidth="0.8" />
                <text x="128" y="253" textAnchor="middle" fontSize="11" fill="#0C447C" fontWeight="500">Certified</text>
                <text x="128" y="268" textAnchor="middle" fontSize="11" fill="#185FA5">Electrician</text>
                <rect x="202" y="235" width="100" height="44" rx="10" fill="#FAEEDA" stroke="#FAC775" strokeWidth="0.8" />
                <text x="252" y="253" textAnchor="middle" fontSize="11" fill="#633806" fontWeight="500">Same-day</text>
                <text x="252" y="268" textAnchor="middle" fontSize="11" fill="#854F0B">Booking</text>
                <circle cx="80" cy="100" r="16" fill="#E6F1FB" stroke="#B5D4F4" strokeWidth="0.8" />
                <text x="80" y="105" textAnchor="middle" fontSize="16" fill="#185FA5">✓</text>
                <circle cx="300" cy="82" r="16" fill="#FAEEDA" stroke="#FAC775" strokeWidth="0.8" />
                <text x="300" y="87" textAnchor="middle" fontSize="16" fill="#BA7517">⚡</text>
                <circle cx="308" cy="190" r="16" fill="#EAF3DE" stroke="#C0DD97" strokeWidth="0.8" />
                <text x="308" y="195" textAnchor="middle" fontSize="16" fill="#3B6D11">★</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ================= SERVICES SECTION ================= */}
        <section id="services" className="py-20 px-5 sm:px-10 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Popular Services</h2>
          <p className="text-slate-500 mb-12">Expert solutions for every electrical issue at your home</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💡', title: 'Lighting & Fans', desc: 'Installation & repair of ceiling fans, chandeliers, LED lights & switches.' },
              { icon: '⚡', title: 'Wiring & Short Circuit', desc: 'Complete house rewiring, fuse fixes, and emergency short-circuit repairs.' },
              { icon: '🔌', title: 'Appliance Fitting', desc: 'Setup and repair of AC points, Geysers, Inverters, and heavy appliances.' },
              { icon: '🛡️', title: 'Safety Inspection', desc: 'Full electrical audit for residential & commercial properties.' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 text-left hover:-translate-y-1 hover:shadow-xl hover:shadow-[#185FA5]/10 transition-all duration-200 flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-[#185FA5] mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                </div>
                <button 
                  onClick={() => handleSendMessage(`I want to book ${service.title}`)}
                  className="w-full bg-[#E6F1FB] hover:bg-[#185FA5] hover:text-white text-[#185FA5] font-medium py-2.5 rounded-lg text-sm transition-colors"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ================= HOW IT WORKS SECTION ================= */}
        <section id="how-it-works" className="bg-[#f0f7ff] py-20 px-5 sm:px-10 text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">How It Works</h2>
            <p className="text-slate-500 mb-12">Get an electrician at your door in 3 simple steps</p>

            <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
              {[
                { step: '1', title: 'Choose Service', desc: 'Select the electrical service or repair you need.' },
                { step: '2', title: 'Get Assigned', desc: 'A certified expert near you is assigned instantly.' },
                { step: '3', title: 'Problem Solved', desc: 'Electrician arrives in 15 mins & fixes the issue safely.' },
              ].map((item, idx) => (
                <div key={idx} className="flex-1 bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="w-12 h-12 bg-[#EF9F27] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-slate-200 py-8 px-5 text-center">
        <div className="text-lg font-bold text-[#185FA5] mb-2">
          ELECTRO<span className="text-[#EF9F27]">.NET</span>
        </div>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} ELECTRO.NET. All rights reserved. Fast & Verified Electricians On Demand.
        </p>
      </footer>

      {/* ================= AI CHATBOT WIDGET ================= */}
      <div>
        {/* Toggle Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-[#185FA5] hover:scale-105 transition-transform text-white rounded-full shadow-lg shadow-[#185FA5]/40 flex items-center justify-center z-50"
          aria-label="Toggle AI Chatbot"
        >
          {isChatOpen ? (
            <span className="text-2xl font-bold">✕</span>
          ) : (
            <span className="text-2xl">💬</span>
          )}
        </button>

        {/* Chatbot Window */}
        {isChatOpen && (
          <div className="fixed bottom-24 right-6 w-90 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 flex flex-col transition-all">
            {/* Header */}
            <div className="bg-[#185FA5] text-white p-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-sm">ELECTRO.NET Support</h3>
                <span className="text-xs text-green-300 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online AI Assistant
                </span>
              </div>
            </div>

            {/* Chat Messages */}
            <div ref={chatboxRef} className="h-72 p-4 overflow-y-auto flex flex-col gap-3 bg-slate-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#185FA5] text-white rounded-br-none'
                        : 'bg-white border border-slate-200 text-slate-800 shadow-xs rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Chips */}
            <div className="flex gap-2 p-2 bg-white overflow-x-auto border-t border-slate-100">
              {['Pricing?', 'Emergency Booking', 'Services List'].map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(chip)}
                  className="bg-[#E6F1FB] hover:bg-[#185FA5] hover:text-white text-[#185FA5] border border-[#B5D4F4] text-[11px] px-3 py-1 rounded-full whitespace-nowrap transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input Box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2 p-2.5 bg-white border-t border-slate-200"
            >
              <input
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 text-xs sm:text-sm px-3 py-2 outline-none border-none bg-slate-100 rounded-lg"
              />
              <button
                type="submit"
                className="text-[#185FA5] font-semibold text-sm px-3 py-1.5 hover:bg-[#E6F1FB] rounded-lg transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};