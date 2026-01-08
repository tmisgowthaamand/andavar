import React from 'react'

const ExportSection: React.FC = () => {
  const states = [
    { name: 'Tamil Nadu', icon: '🏛️' },
    { name: 'Karnataka', icon: '🏛️' },
    { name: 'Kerala', icon: '🏛️' },
    { name: 'Maharashtra', icon: '🏛️' },
    { name: 'Gujarat', icon: '🏛️' },
    { name: 'Delhi', icon: '🏛️' },
    { name: 'West Bengal', icon: '🏛️' },
    { name: 'Rajasthan', icon: '🏛️' },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-4 tracking-wide">
          SERVING CLIENTS ACROSS INDIA
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-[#FFD700] mx-auto mb-6 sm:mb-8"></div>

        <p className="font-text text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
          We proudly serve textile buyers across India who value premium quality
          and traditional craft. Our national network spans across states, bringing
          authentic Indian textiles to markets throughout the country.
        </p>

        {/* States Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {states.map((state, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-3 sm:p-4 rounded-xl hover:bg-[#F9F9F9] transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                {state.icon}
              </div>
              <div className="font-text text-xs sm:text-sm font-medium text-[#222222] group-hover:text-[#800000] transition-colors duration-300 text-center leading-tight">
                {state.name}
              </div>
            </div>
          ))}
        </div>

        {/* India Map Representation */}
        <div className="relative bg-gradient-to-r from-[#800000]/5 to-[#FFD700]/5 rounded-xl sm:rounded-2xl p-6 sm:p-8">
          <div className="absolute inset-0 opacity-30"></div>
          <div className="relative">
            <h3 className="font-title text-lg sm:text-xl font-bold text-[#800000] mb-3 sm:mb-4">
              National Reach, Local Excellence
            </h3>
            <p className="font-text text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From our manufacturing base in Tamil Nadu, we deliver premium quality
              textiles to buyers across India, from North to South and East to West.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExportSection