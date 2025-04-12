import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#fdf6dd] py-16 px-6 lg:px-20" id="about">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          <div className="rounded-tl-[60px] overflow-hidden">
            <Image
              src="/images/pizza.avif"
              alt="Pizza"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="rounded-br-[60px] overflow-hidden">
            <Image
              src="/images/noodles.avif"
              alt="Noodles"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="rounded-full overflow-hidden">
            <Image
              src="/images/kebab.avif"
              alt="Kebab"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-bl-[60px] overflow-hidden">
            <Image
              src="/images/drink.avif"
              alt="Drink"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-[#741510] space-y-4">
          <h2 className="text-[#8e2a19] font-semibold text-xl mb-2 relative inline-block before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] before:bg-[#8e2a19] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#8e2a19]">
            The Story
          </h2>

          <h2 className="text-3xl lg:text-4xl font-bold">What Aaoji is all about!</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Founded in 2020, Aaoji was born out of a passion for bringing authentic, bold flavors to the streets,
            offering a fun twist on traditional cuisine. We&apos;ve quickly become a favorite destination for locals and
            travelers alike, serving up not just meals, but unforgettable experiences.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Whether you&apos;re stopping by for a quick bite or settling in for a leisurely meal, we take pride in offering
            delicious dishes made from the finest, locally sourced ingredients.
          </p>
          <div className="flex space-x-4 pt-4">
            <button className="bg-[#e53b1e] text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition">
              Call Us for Bookings
            </button>
            <button className="text-[#741510] font-medium hover:underline">
              Explore Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
