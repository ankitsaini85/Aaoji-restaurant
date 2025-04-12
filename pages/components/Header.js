import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 md:px-20 py-6 bg-[#e4cb8d]">
      {/* Logo */}
      <div className="flex items-center space-x-2 border-2 border-[#741510] ">
        <img src="/images/logo.jpg" alt="Aaoji Logo" className="h-10 w-auto" />
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex space-x-10 text-[#741510] font-medium">
        <a href="#about" className="hover:underline">About Us</a>
        <a href="#menu" className="hover:underline">Menu</a>
        <a href="#testimonials" className="hover:underline">Testimonials</a>
        <a href="#gallery" className="hover:underline">Gallery</a>
      </nav>

      {/* Social Icons */}
      <div className="flex space-x-4">
  <a
    href="#"
    className="bg-[#741510] text-white p-2 rounded-full hover:scale-110 transition duration-200"
  >
    <FaInstagram size={20} />
  </a>
  <a
    href="#"
    className="bg-[#741510] text-white p-2 rounded-full hover:scale-110 transition duration-200"
  >
    <FaFacebookF size={20} />
  </a>
</div>

    </header>
  );
}
