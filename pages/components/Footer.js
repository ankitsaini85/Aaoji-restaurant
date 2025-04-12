import { FaInstagram, FaFacebookF, FaTimes } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#f3d885] text-[#741510] pt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

      
        <div>
          <img src="/images/logo.jpg" alt="Aaoji Logo" className="h-12 mb-4 border-2 border-[black]" />
          <p className="text-sm">Bold Flavors, Fun Vibes, Authentic Taste</p>
          <div className="flex gap-3 mt-4">
            <a href="#"><FaInstagram className="text-xl hover:text-[#e53b1e]" /></a>
            <a href="#"><FaTimes className="text-xl hover:text-[#e53b1e]" /></a>
            <a href="#"><FaFacebookF className="text-xl hover:text-[#e53b1e]" /></a>
          </div>
        </div>

       
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#e53b1e]">About Us</a></li>
            <li><a href="#" className="hover:text-[#e53b1e]">Menu</a></li>
            <li><a href="#" className="hover:text-[#e53b1e]">Testimonials</a></li>
            <li><a href="#" className="hover:text-[#e53b1e]">Gallery</a></li>
          </ul>
        </div>

      
        <div>
          <h4 className="font-semibold text-lg mb-3">Get in Touch</h4>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p className="text-sm mt-2">+91 12461234567899</p>
        </div>

       
        <div>
          <h4 className="font-semibold text-lg mb-3">Opening Hours</h4>
          <p className="text-sm">Mon to Sun: 12PM to 12AM</p>
        </div>
      </div>

     
      <div className="bg-[#741510] text-white text-center py-4 mt-10 text-sm">
        © 2025 Aaoji. All Rights Reserved. Designed & Developed by Eazotel
      </div>
    </footer>
  );
}
