import React, { useState, useEffect } from 'react';
import { X, Play, Calendar, MapPin, Users, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

import { backendUrl } from '../App';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Compute categories from gallery data
  const categories = React.useMemo(() => {
    const catMap = {};
    gallery.forEach(item => {
      if (!catMap[item.category]) catMap[item.category] = 0;
      catMap[item.category]++;
    });
    const cats = Object.entries(catMap).map(([id, count]) => ({
      id,
      name: id.charAt(0).toUpperCase() + id.slice(1),
      count
    }));
    cats.unshift({ id: 'all', name: 'All Media', count: gallery.length });
    return cats;
  }, [gallery]);

  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${backendUrl}/api/gallery`);
        if (!response.ok) throw new Error('Failed to fetch gallery');
        const data = await response.json();
        setGallery(data.gallery || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const filteredItems = selectedCategory === 'all'
    ? gallery
    : gallery.filter(item => item.category === selectedCategory);

  const openMedia = (item, index) => {
    setSelectedMedia(item);
    setCurrentIndex(index);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };

  const navigateMedia = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredItems.length
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredItems[newIndex]);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-green-700">Our</span>{' '}
            <span className="text-red-700">Gallery</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore the vibrant moments that define Omiiden Origbo. From powerful performances 
            to cultural celebrations, witness our journey of preserving and promoting our heritage through song.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-green-600 to-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200'
              }`}
            >
              <Filter size={16} />
              <span>{category.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                selectedCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
          <div className="text-center py-12">
            <span className="text-red-500 text-lg">{error}</span>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => openMedia(item, index)}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image_url || item.image || '/placeholder.jpg'}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-white/90 text-sm line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                    {/* Media Type Indicator */}
                    <div className="absolute top-4 left-4">
                      {item.type === 'video' ? (
                        <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                          <Play size={12} />
                          <span>{item.duration}</span>
                        </div>
                      ) : (
                        <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Photo
                        </div>
                      )}
                    </div>
                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-green-600 to-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{item.date ? new Date(item.date).toLocaleDateString() : ''}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span className="truncate">{item.location}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            {/* Load More Button */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-green-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-red-700 transition-colors shadow-lg">
                Load More Media
              </button>
            </div>
          </>
        )}
      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-full">
            {/* Close Button */}
            <button
              onClick={closeMedia}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors z-10"
            >
              <X size={32} />
            </button>
            {/* Navigation Buttons */}
            <button
              onClick={() => navigateMedia('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-green-400 transition-colors z-10"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={() => navigateMedia('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-green-400 transition-colors z-10"
            >
              <ChevronRight size={48} />
            </button>
            {/* Media Content */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="relative">
                <img
                  src={selectedMedia.image_url || selectedMedia.image || '/placeholder.jpg'}
                  alt={selectedMedia.title}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                {selectedMedia.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-red-600/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="text-white ml-1" size={32} />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-green-700">{selectedMedia.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{selectedMedia.date ? new Date(selectedMedia.date).toLocaleDateString() : ''}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{selectedMedia.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{selectedMedia.description}</p>
              </div>
            </div>
            {/* Media Counter */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {currentIndex + 1} of {filteredItems.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;