import React, { useState } from "react";
import { backendUrl } from "../App";
import {
  Calendar,
  Users,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Star,
  Music,
  Award,
  Camera,
  Mic,
} from "lucide-react";

const BookUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventTime: "",
    venue: "",
    guestCount: "",
    duration: "",
    message: "",
  });

  // Added submission state for loader
  const [isSubmitting, setIsSubmitting] = useState(false);

  const eventTypes = [
    { name: "Wedding Ceremony", icon: <Star size={18} /> },
    { name: "Cultural Festival", icon: <Music size={18} /> },
    { name: "Corporate Event", icon: <Award size={18} /> },
    { name: "Birthday Celebration", icon: <Camera size={18} /> },
    { name: "School Program", icon: <Mic size={18} /> },
    { name: "Community Gathering", icon: <Users size={18} /> },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`${backendUrl}/api/book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Booking submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          eventDate: "",
          eventTime: "",
          venue: "",
          guestCount: "",
          duration: "",
          message: "",
        });
      } else {
        alert(result.error || "Failed to submit booking.");
      }
    } catch (err) {
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50 pt-20">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-red-600 text-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Omiden Origbo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Book Our Performance
          </h1>
          <p className="text-lg sm:text-xl text-green-100 max-w-2xl mx-auto">
            Bring authentic cultural heritage to your special event with Omiden
            Origbo
          </p>
        </div>
      </div>

      {/* Booking Form + Side Info */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 relative">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <Calendar className="text-red-500" />
              <span>Event Details</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6" aria-busy={isSubmitting}>
              {/* Wrap inputs in a fieldset so they get disabled while submitting */}
              <fieldset disabled={isSubmitting} className={isSubmitting ? "opacity-60 pointer-events-none" : ""}>
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone + Event Type */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      placeholder="+234 xxx xxx xxxx"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      required
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type, index) => (
                        <option key={index} value={type.name}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date + Time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      name="eventTime"
                      value={formData.eventTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>
                </div>

                {/* Venue */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Event Venue *
                  </label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    placeholder="Full venue address"
                    required
                  />
                </div>

                {/* Guests + Duration */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Expected Guests
                    </label>
                    <input
                      type="number"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      placeholder="Approximate number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Duration Needed
                    </label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    >
                      <option value="">Select duration</option>
                      <option value="30 minutes">30 minutes</option>
                      <option value="1 hour">1 hour</option>
                      <option value="2 hours">2 hours</option>
                      <option value="Custom">Custom duration</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 resize-none"
                    placeholder="Tell us more about your event..."
                  ></textarea>
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 to-red-600 text-white py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Booking Request"
                )}
              </button>
            </form>

            {/* Optional small overlay to reinforce loading state (visible only while submitting) */}
            {isSubmitting && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/40 rounded-2xl pointer-events-none">
                <div className="flex items-center space-x-3 bg-white/90 px-4 py-2 rounded-md shadow">
                  <svg
                    className="animate-spin h-6 w-6 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  <span className="text-gray-700 font-medium">Sending booking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Side Info */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-green-600" size={20} />
                  <span>+234 9046 265 621</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-red-600" size={20} />
                  <span>ereudenoka@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-green-600" size={20} />
                  <span>Iwaro Oka Akoko, Ondo State, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-green-500 to-red-500 text-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                Why Choose Omiden Origbo?
              </h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex items-start space-x-2">
                  <CheckCircle size={18} />{" "}
                  <span>Authentic cultural performances</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle size={18} />{" "}
                  <span>Professional & experienced singers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle size={18} />{" "}
                  <span>Cultural storytelling & education</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle size={18} />{" "}
                  <span>Flexible packages for all events</span>
                </li>
              </ul>
            </div>

            {/* Event Types */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                Perfect For These Events
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {eventTypes.map((type, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors"
                  >
                    <div className="text-red-500">{type.icon}</div>
                    <span className="text-sm text-gray-700">{type.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookUs;
