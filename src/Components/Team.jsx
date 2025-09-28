import React, { useState } from "react";
import { Users, Star, Award } from "lucide-react";

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Chief Adaeze Okoro",
      image: "/api/placeholder/400/500",
    },
    {
      id: 2,
      name: "Emeka Nwachukwu",
      image: "/api/placeholder/400/500",
    },
    {
      id: 3,
      name: "Ngozi Okafor",
      image: "/api/placeholder/400/500",
    },
    {
      id: 4,
      name: "Kelechi Eze",
      image: "/api/placeholder/400/500",
    },
    {
      id: 5,
      name: "Chioma Uche",
      image: "/api/placeholder/400/500",
    },
    {
      id: 6,
      name: "Ikechukwu Odo",
      image: "/api/placeholder/400/500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50 py-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-green-400 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-red-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <Users className="text-white" size={28} />
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-green-700">Our</span>{" "}
            <span className="text-red-700">Team</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Meet the talented singers who bring our cultural heritage to life through passionate performances and authentic storytelling.
          </p>

          {/* Team Stats */}
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{teamMembers.length}</div>
              <div className="text-sm text-gray-500">Talented Singers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">5+</div>
              <div className="text-sm text-gray-500">Years Together</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">10+</div>
              <div className="text-sm text-gray-500">Performances</div>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Cultural Pattern Overlay */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  hoveredMember === member.id ? 'opacity-20' : 'opacity-0'
                }`}>
                  <div className="absolute top-4 right-4 w-12 h-12 border-2 border-green-400 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-red-400 rotate-45"></div>
                </div>

                {/* Member Number Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-green-600 to-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Star Icon for Featured Members */}
                {index < 2 && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white p-2 rounded-full shadow-lg">
                    <Star size={16} fill="currentColor" />
                  </div>
                )}
              </div>

              {/* Name Section */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300 mb-2">
                  {member.name}
                </h3>
                
                {/* Decorative Line */}
                <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-red-500 mx-auto rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-4 border-gradient-to-r from-green-500 to-red-500 rounded-3xl transition-opacity duration-300 ${
                hoveredMember === member.id ? 'opacity-50' : 'opacity-0'
              }`} style={{
                background: `linear-gradient(45deg, transparent 48%, rgba(34, 197, 94, 0.5) 49%, rgba(34, 197, 94, 0.5) 51%, transparent 52%), 
                           linear-gradient(-45deg, transparent 48%, rgba(239, 68, 68, 0.5) 49%, rgba(239, 68, 68, 0.5) 51%, transparent 52%)`,
                backgroundSize: '20px 20px'
              }}></div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-red-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex justify-center mb-4">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">United We Stand • To Promote Our Culture</h3>
            <p className="text-green-100 max-w-2xl mx-auto">
              Each member of our team brings unique talents and passion to preserve and celebrate our rich cultural heritage through the art of song.
            </p>
          </div>
        </div>

        {/* Decorative Bottom Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-3 text-gray-500">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-300"></div>
            <span className="text-sm font-medium">Omiden Origbo Cultural Song Group</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-red-300"></div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Team;