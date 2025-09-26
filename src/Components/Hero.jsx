import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Calendar, Users, Star, ArrowDown, Music, Heart } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const navigate = useNavigate();

  const heroSlides = [
    {
      title: "OMIIDEN ORIGBO",
      subtitle: "Cultural Heritage Through Dance",
      description: "Preserving and celebrating our rich cultural traditions through powerful dance performances that tell the stories of our ancestors",
      cta: "Watch Our Performances",
      bgImage: "/api/placeholder/1920/1080"
    },
    {
      title: "UNITED WE STAND",
      subtitle: "To Promote Our Culture",
      description: "Join us in our mission to showcase the beauty and depth of cultural expressions through traditional and contemporary dance forms",
      cta: "Join Our Movement",
      bgImage: "/api/placeholder/1920/1080"
    },
    {
      title: "AUTHENTIC PERFORMANCES",
      subtitle: "Rooted in Tradition",
      description: "Experience the authentic rhythms, movements, and storytelling that have been passed down through generations of our culture",
      cta: "Book Us Today",
      bgImage: "/api/placeholder/1920/1080"
    }
  ];

  const achievements = [
    { number: "5+", label: "Years of Excellence", icon: <Star /> },
    { number: "10+", label: "Cultural Performances", icon: <Music /> },
    { number: "10+", label: "Talented Dancers", icon: <Users /> }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleCTAClick = () => {
    if (heroSlides[currentSlide].cta === "Book Us Today") {
      navigate('/book-us');
    } else {
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroSlides[currentSlide].bgImage}
          alt="Omiiden Origbo Performance"
          className="w-full h-full object-cover transition-all duration-1000"
        />
        {/* Cultural Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-black/60 to-red-900/80"></div>
        
        {/* Animated Traditional Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-green-400 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-red-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-green-300 rotate-45 animate-bounce"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Logo Section */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-full p-2 shadow-2xl border-4 border-green-600 animate-pulse-slow">
            <img 
              src="/logo.png" 
              alt="Omiiden Origbo Logo" 
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-6">
          <h2 className="text-green-400 uppercase tracking-widest text-sm lg:text-base mb-3 font-bold animate-fade-in">
            {heroSlides[currentSlide].subtitle}
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white drop-shadow-2xl animate-slide-up">
            <span className="text-red-600">{heroSlides[currentSlide].title.split(' ')[0]}</span>
            {heroSlides[currentSlide].title.includes(' ') && (
              <span className="block text-green-500 mt-2">
                {heroSlides[currentSlide].title.split(' ').slice(1).join(' ')}
              </span>
            )}
          </h1>
        </div>

        {/* Tagline from Logo */}
        <div className="mb-8">
          <p className="text-xl lg:text-2xl text-green-300 font-semibold bg-black/30 py-2 px-6 rounded-full inline-block border border-green-400/30">
            "United We Stand • To Promote Our Culture"
          </p>
        </div>

        {/* Description */}
        <p className="text-lg lg:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
          {heroSlides[currentSlide].description}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up delay-400">
          <button 
            onClick={handleCTAClick}
            className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-bold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-green-500 hover:border-green-400 flex items-center justify-center space-x-3"
          >
            <Play className="group-hover:scale-110 transition-transform" size={20} />
            <span>{heroSlides[currentSlide].cta}</span>
          </button>
          <button className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-bold hover:bg-green-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
            Learn About Us
          </button>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-green-500/30 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-red-500 mb-2 flex justify-center">
                {achievement.icon}
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                {achievement.number}
              </div>
              <div className="text-sm text-green-400 font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-red-500 scale-125 shadow-lg' 
                : 'bg-green-400/50 hover:bg-green-400/80'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white/70 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium text-green-400">Discover More</span>
          <ArrowDown className="text-red-500" size={24} />
        </div>
      </div>

      {/* Side Navigation Info */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="space-y-6 text-white">
          <div className="writing-mode-vertical text-sm tracking-wider text-green-400 font-semibold">
            CULTURAL • HERITAGE • DANCE
          </div>
        </div>
      </div>

      {/* Cultural Elements Decoration */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="space-y-4">
          <div className="w-1 h-16 bg-gradient-to-b from-red-500 to-green-500 rounded-full"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-red-500 rounded-full"></div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .writing-mode-vertical {
          writing-mode: vertical-lr;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
};

export default Hero;