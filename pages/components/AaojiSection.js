// components/AaojiSection.js

export default function AaojiSection() {
    return (
      <section className="bg-[#e4cb8d] px-6 md:px-20 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="flex-1 max-w-xl">
        <h2 className="text-[#8e2a19] font-semibold text-xl mb-2 relative inline-block before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] before:bg-[#8e2a19] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#8e2a19]">Aaoji:</h2>

          <h1 className="text-[#cf2918] text-3xl md:text-4xl font-bold leading-snug mb-4">
            Bold Flavors, Fun Vibes, Authentic Taste
          </h1>
          <p className="text-[#3f3f3f] mb-6">
            Aaoji is your perfect pit stop on the highway, serving up bold, authentic
            flavors that are fast, fun, and full of taste. Whether you're craving a quick bite
            or a satisfying meal on the go, Aaoji brings the perfect blend of tradition and excitement
            to your journey. Stop by for a flavorful adventure – no detours needed!
          </p>
          <div className="flex gap-6 items-center">
            <button className="bg-white border border-[#cf2918] text-[#cf2918] px-5 py-2 rounded-full font-medium hover:bg-[#cf2918] hover:text-white transition">
              Call Us for Bookings
            </button>
            <a href="#" className="text-[#cf2918] underline font-medium">
              Explore Menu
            </a>
          </div>
        </div>
  
        {/* Image Section */}
        <div className="flex-1 relative max-w-md h-[650px]">
  <div className="rounded-t-full overflow-hidden border-[10px] border-[#741510] h-full w-full p-1">
    <img
      src="/images/food1.avif" // replace this with your actual image path
      alt="Food Display"
      className="w-full h-full object-cover rounded-none"
    />
  </div>
</div>

      </section>
    );
  }
  