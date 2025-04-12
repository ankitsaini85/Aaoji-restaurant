'use client'
import { useState } from 'react';

const testimonials = [
  {
    name: "Suresh Naithani",
    message: "Aaoji is my new favorite stop on the highway! The flavors here are very refreshing. Will definitely be stopping here on every trip! It's fast, fresh, and perfect for a nice pit stop!"
  },
  {
    name: "Rekha Dixit",
    message: "I've tried a lot of places while traveling to Delhi, but Aaoji really stands out! The flavors are amazing, and they've got a fun, hygienic setup that anyone can enjoy! Keep up the great work!"
  },
  {
    name: "Sarthak Singh",
    message: "Stopped by Aaoji, and felt wow! The food was served hot, tasty, and full of flavor. I never expected such good food - this is going to be my go to on every trip now!"
  }
];

export default function TestimonialsAndBooking() {
  const [index, setIndex] = useState(0);

  return (
    <section className="bg-[#fef7e6] py-16 px-6 lg:px-20" id='testimonials'>
      <div className="text-center max-w-4xl mx-auto">
        <h4 className="uppercase text-[#741510] border-b-2 inline-block border-[#741510] pb-1 mb-2 tracking-wide">
          Testimonials
        </h4>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#741510]">
          Raving Reviews: <span className="text-[#e53b1e]">Hear from Our Happy Foodies!</span>
        </h2>
      </div>

      {/* Slider */}
      <div className="mt-10 flex items-center justify-center gap-6 max-w-5xl mx-auto">
        <button onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}>&lt;</button>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {testimonials.slice(index, index + 3).map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-md border border-orange-200 shadow-sm">
              <p className="text-xl text-orange-400 font-bold mb-2">“</p>
              <p className="text-sm text-gray-700">{t.message}</p>
              <p className="font-bold mt-4 text-[#741510]">{t.name}</p>
            </div>
          ))}
        </div>
        <button onClick={() => setIndex((index + 1) % testimonials.length)}>&gt;</button>
      </div>

      {/* Booking Form + Map */}
      <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
        {/* Map Placeholder */}
        <div className="bg-white border border-orange-200 p-8 rounded-md text-center text-[#e53b1e] text-xl font-semibold">
          MAP HERE
        </div>

        {/* Form */}
        <form className="bg-white border border-orange-200 p-8 rounded-md shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-[#e53b1e] uppercase">
            Fill in details to book a private party!
          </h3>
          <input type="text" placeholder="Your full name*" className="w-full border p-3 mb-4 rounded-md" required />
          <div className="flex mb-4 gap-2">
            <select className="border p-3 rounded-md">
              <option>+91 IND</option>
              <option>+1 US</option>
            </select>
            <input type="tel" placeholder="Mobile number*" className="flex-1 border p-3 rounded-md" required />
          </div>
          <input type="email" placeholder="Email ID*" className="w-full border p-3 mb-4 rounded-md" required />
          <textarea placeholder="Tell us something about your enquiry!" className="w-full border p-3 mb-4 rounded-md" rows={4}></textarea>
          <button type="submit" className="w-full bg-[#e53b1e] text-white py-3 rounded-full font-bold hover:bg-[#c43d18] transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
