import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 md:px-20 py-6 bg-[#e4cb8d] shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2 border-2 border-[#741510] p-2 rounded-md bg-white">
        <img src="/images/logo.jpg" alt="Aaoji Logo" className="h-10 w-auto" />
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex space-x-10 text-[#741510] font-medium">
        <a href="#about" className="hover:text-[#e53b1e] transition">About Us</a>
        <a href="#menu" className="hover:text-[#e53b1e] transition">Menu</a>
        <a href="#testimonials" className="hover:text-[#e53b1e] transition">Testimonials</a>
        <a href="#gallery" className="hover:text-[#e53b1e] transition">Gallery</a>
      </nav>

      {/* Social Icons */}
      <div className="flex space-x-3">
        <a
          href="https://instagram.com"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#741510] text-white p-2 rounded-full hover:scale-110 transition duration-200"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://facebook.com"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#741510] text-white p-2 rounded-full hover:scale-110 transition duration-200"
        >
          <FaFacebookF size={20} />
        </a>
      </div>
    </header>
  );
}
