import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Play, Award } from "lucide-react";
import { backendUrl } from "../App";

const GalleryPreview = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${backendUrl}/api/gallery`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to fetch gallery");
        setGalleryItems(data.gallery || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  // Sort by date descending and take the newest 6
  const newestGallery = [...galleryItems]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <Award className="text-white" size={28} />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-green-700">Our</span>{" "}
            <span className="text-red-700">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the beauty of our cultural performances through captured moments of tradition, unity, and artistic excellence.
          </p>
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="animate-pulse bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-64 w-full bg-gray-200" />
                <div className="p-4">
                  <div className="h-4 w-1/2 bg-gray-200 rounded mb-2" />
                  <div className="h-3 w-1/3 bg-gray-100 rounded mb-2" />
                  <div className="h-3 w-1/4 bg-gray-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">{error}</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newestGallery.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image_url || item.image || "/placeholder.jpg"}
                    alt={item.title || item.category}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                      hoveredItem === item.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">{item.title || item.category}</h3>
                      <p className="text-white/90 text-sm line-clamp-2">{item.description}</p>
                    </div>
                  </div>

                  {/* Media Badge */}
                  <div className="absolute top-4 left-4">
                    {item.type === "video" ? (
                      <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 shadow-lg">
                        <Play size={12} />
                        <span>{item.duration}</span>
                      </div>
                    ) : (
                      <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        Photo
                      </div>
                    )}
                  </div>

                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-green-600 to-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg border border-white/20">
                      ⭐ Featured
                    </div>
                  )}

                  {/* Play button overlay for videos */}
                  {item.type === "video" && (
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        hoveredItem === item.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="text-white ml-1" size={24} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{item.date ? new Date(item.date).toLocaleDateString() : ""}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                    {item.title || item.category}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link to="/gallery">
            <button className="bg-gradient-to-r from-green-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-red-700 transition-colors shadow-lg">
              View Full Gallery
            </button>
          </Link>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default GalleryPreview;
