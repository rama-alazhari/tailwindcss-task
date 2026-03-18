import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتي', href: '#services' },
    { name: 'أعمالي', href: '#projects' },
    { name: 'تواصل معي', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 px-6 py-4 ${
        scrolled ? 'top-2' : 'top-0'
      }`}
      dir="rtl"
    >
      <div 
        className={`max-w-[95%] mx-auto transition-all duration-500 rounded-2 px-8 py-3 flex items-center justify-between ${
          scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-2xl border border-white/20' 
          : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
            R
          </div>
          <span className={`text-2xl font-black tracking-tighter transition-colors ${scrolled ? 'text-gray-900' : 'text-gray-800'}`}>
            RAMA ALAZHARI<span className="text-blue-600">.</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={`font-bold text-sm hover:text-blue-600 transition-colors relative group ${
                    scrolled ? 'text-gray-700' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-5 border-r border-gray-200 pr-8">
            <a href="#" className="text-xl text-gray-600 hover:text-blue-600 transition-all hover:scale-110"><FaGithub /></a>
            <a href="#" className="text-xl text-gray-600 hover:text-blue-600 transition-all hover:scale-110"><FaLinkedin /></a>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:bg-blue-700 hover:shadow-blue-200 transition-all transform active:scale-95">
              تحميل CV
            </button>
          </div>
        </div>

        {/* زر القائمة للموبايل */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`text-3xl p-1 rounded-lg ${scrolled ? 'text-gray-900' : 'text-gray-800'}`}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* القائمة الجانبية للموبايل - Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-10">
          <div className="flex justify-between items-center mb-16">
            <span className="text-2xl font-black text-gray-900">RAMA<span className="text-blue-600">.</span></span>
            <button onClick={() => setIsOpen(false)} className="text-4xl text-gray-900"><HiX /></button>
          </div>
          
          <ul className="space-y-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10 border-t border-gray-100">
            <p className="text-gray-500 mb-6 text-lg font-medium italic">تواصلِ معي عبر:</p>
            <div className="flex gap-8 text-3xl text-gray-400">
              <FaGithub className="hover:text-black cursor-pointer" />
              <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
              <FaInstagram className="hover:text-pink-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;