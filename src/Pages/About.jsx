import React from "react";

const About = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-800 to-red-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto font-semibold">
            Cultural heritage through songs
          </p>
          <div className="mt-8 space-y-4">
            <div>
              <span className="font-bold text-white">Purpose:</span>
              <span className="ml-2 text-green-100">Preserving and celebrating our Cultural heritage through powerful songs and dance performances that tell the stories of our ancestors.</span>
            </div>
            <div>
              <span className="font-bold text-white">Unity:</span>
              <span className="ml-2 text-green-100">Unity songs and cultural dance performances</span>
            </div>
            <div>
              <span className="font-bold text-white">Mission:</span>
              <span className="ml-2 text-green-100">Reuniting our people to have a beautiful, fruitful and peaceful cohabitation through songs.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/about1.jpg"
            alt="Cultural Song & Dance"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Omiden Origbo is a cultural group dedicated to promoting and preserving our heritage through powerful songs and dance performances. Our art is more than entertainment—it is a reflection of tradition, unity, and the voices of our ancestors passed down through generations. We believe in the power of music and dance to unite, inspire, and educate our people.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Reuniting our people to have a beautiful, fruitful and peaceful
              cohabitation through songs. We strive to connect communities,
              educate younger generations, and showcase the beauty of our culture
              to the world. Every performance—whether song or dance—is carefully
              crafted to celebrate the values of unity, resilience, and pride in
              our identity.
            </p>
          </div>
          <img
            src="/about2.jpg"
            alt="Cultural Song & Dance Group"
            className="order-1 md:order-2 w-full h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            Celebrate With Us
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Whether at festivals, weddings, or special occasions, we bring the
            spirit of our ancestors to life through unity songs and cultural
            dance performances. Join us in celebrating the beauty of our
            heritage.
          </p>
          <a
            href="/book-us"
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl shadow-lg hover:from-green-700 hover:to-red-700 transition-all"
          >
            Book Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
