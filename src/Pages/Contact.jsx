import React, { useState } from 'react';
import { backendUrl } from '../App';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        alert(result.error || 'Failed to send message.');
      }
    } catch (err) {
      alert('Network error. Please try again later.');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-red-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-green-700">Contact</span>{' '}
            <span className="text-red-700">Us</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions about our cultural performances or need more information? 
            We'd love to hear from you and discuss how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-green-700 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Our Location</h4>
                    <p className="text-gray-600">Iwaro Oka Akoko, Ondo State, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Call Us</h4>
                    <p className="text-gray-600">+234 706 529 5014</p>
                    <p className="text-sm text-gray-500">Available during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Email Us</h4>
                    <p className="text-gray-600">omidenorigbo@gmail.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 48 hours</p>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Office Hours</h4>
                    <p className="text-gray-600">Monday - Saturday</p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM (WAT)</p>
                    <p className="text-sm text-gray-500">Closed on Sundays</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Why Contact Us Section */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-red-600">
              <h3 className="text-2xl font-bold text-red-700 mb-6">Why Contact Us?</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Learn more about our cultural dance performances</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ask questions about our cultural heritage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Discuss partnership opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Get information about joining our group</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Media inquiries and interviews</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-r from-green-600 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Follow Our Journey</h3>
              <p className="mb-6 opacity-90">
                Stay connected with our latest performances and cultural celebrations
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-red-600">
            <h3 className="text-2xl font-bold text-red-700 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject...</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="about-performances">About Our Performances</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="media-inquiry">Media Inquiry</option>
                    <option value="joining-group">Joining Our Group</option>
                    <option value="cultural-information">Cultural Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-red-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;