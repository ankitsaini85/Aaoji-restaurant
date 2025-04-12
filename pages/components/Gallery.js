import Image from 'next/image';

const images = [
  '/images/gallery1.avif',
  '/images/gallery2.avif',
  '/images/gallery3.avif',
  '/images/gallery4.avif',
  '/images/gallery5.avif',
  '/images/gallery6.avif',
  '/images/gallery7.avif',
  '/images/gallery8.avif',
];

export default function Gallery() {
  return (
    <section className="bg-[#fef7e6] py-16 px-6 lg:px-20" id="gallery">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h4 className="uppercase text-[#741510] border-b-2 inline-block border-[#741510] pb-1 mb-2 tracking-wide">
          Explore Our Gallery
        </h4>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#741510]">
          Taste the Story: A <span className="text-[#e53b1e]">Visual Journey</span> Through Our Dishes!
        </h2>
      </div>

      {/* Image Grid */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <div key={i} className="relative w-full aspect-square overflow-hidden rounded-md shadow-sm">
            <Image
              src={src}
              alt={`Gallery Image ${i + 1}`}
              title={`Gallery Image ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Instagram Button */}
      <div className="text-center mt-10">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram"
          className="bg-[#e53b1e] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#c43d18] transition"
        >
          Visit Instagram
        </a>
        <div className="mt-2 text-[#741510] text-lg">—</div>
      </div>
    </section>
  );
}
