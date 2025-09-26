import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

import { backendUrl } from '../App';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${backendUrl}/api/events`);
        if (!response.ok) throw new Error('Failed to fetch events');
        const data = await response.json();
        console.log("Fetched events:", data.events); // Debug log
        setEvents(data.events || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case 'upcoming': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-blue-100 text-blue-800 border-blue-300';
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'festival': return '🎭';
      case 'workshop': return '📚';
      case 'competition': return '🏆';
      default: return '🎪';
    }
  };

  const filteredEvents = () => {
    let filtered = events.filter(event => event.status === 'upcoming');
    if (activeFilter !== 'all') {
      filtered = filtered.filter(event => event.type === activeFilter);
    }
    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  // Sort by date descending (latest first)
  filtered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  // Return the latest 3 (e.g., if 5 in DB, show 5,4,3)
  // Show newest at the left (first in array)
  return filtered.slice(0, 3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50">
      <div className="bg-gradient-to-r from-green-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl lg:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
            Experience the beauty of our culture through performances, workshops, and celebrations
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {loading ? (
          <div className="text-center py-12">
            <span className="text-gray-500 text-lg">Loading events...</span>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <span className="text-red-500 text-lg">{error}</span>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents().map((event, idx, arr) => arr[arr.length - 1 - idx]).map((event) => (
                <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="relative">
                    <img
                      src={event.image_url ? event.image_url : '/placeholder.jpg'}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span className="text-lg">{getTypeIcon(event.type)}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getStatusColor(event.status)}`}>
                        {event.status?.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center text-gray-700">
                        <Clock className="text-green-600 mr-2" size={16} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="text-red-600 mr-2" size={16} />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-green-600 to-red-600 text-white py-2 rounded-lg font-semibold hover:from-green-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredEvents().length === 0 && (
              <div className="text-center py-12">
                <Calendar className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Events;
