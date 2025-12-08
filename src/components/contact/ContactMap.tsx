import { MapPin, ExternalLink, Navigation, Building2, Globe2 } from 'lucide-react';

export default function ContactMap() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 w-[800px] h-[800px] bg-[#0066ff]/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/2 w-[800px] h-[800px] bg-[#00ccff]/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Find Us </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff]">
              On The Map
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Located in the heart of London, easily accessible by public transport and major highways.
          </p>
        </div>

        {/* Split Layout - Map and Info Side by Side */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map Container - Takes 3 columns */}
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden group" style={{ height: '600px' }}>
            {/* Glassmorphic Map Container */}
            <div className="absolute inset-0 flex items-center justify-center" style={{
              background: 'rgba(0, 102, 255, 0.05)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(0, 128, 255, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.15), inset 0 0 40px rgba(0, 204, 255, 0.08)'
            }}>
              <div className="text-center p-12 space-y-8">
                {/* Map Icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-3xl shadow-lg shadow-[#0066ff]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Navigation className="w-12 h-12 text-white" />
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-3xl font-black text-white mb-3">Our Location</h3>
                  <p className="text-xl text-[#00ccff] font-semibold mb-2">
                    75 Uxbridge Rd
                  </p>
                  <p className="text-lg text-slate-300">
                    London W5 5SL, England UK
                  </p>
                </div>

                {/* Open in Maps Button */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=75+Uxbridge+Rd+London+W5+5SL+UK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl text-white font-bold transition-all duration-300 hover:scale-105 group/btn"
                  style={{
                    background: 'linear-gradient(135deg, #0066ff 0%, #0080ff 50%, #00ccff 100%)',
                    boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.4)'
                  }}
                >
                  <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  <span>Open in Google Maps</span>
                </a>

                {/* Coordinates */}
                <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl" style={{
                  background: 'rgba(0, 128, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 204, 255, 0.2)'
                }}>
                  <Globe2 className="w-4 h-4 text-[#00ccff]" />
                  <span className="text-sm text-slate-300 font-mono">51.5074° N, 0.1278° W</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Sidebar - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Location Details Card */}
            <div className="relative rounded-3xl p-8 group transition-all duration-500 hover:-translate-y-2" style={{
              background: 'rgba(0, 102, 255, 0.05)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(0, 128, 255, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.15), inset 0 0 40px rgba(0, 204, 255, 0.08)'
            }}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 204, 255, 0.1), transparent 70%)'
              }}></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#0080ff] to-[#00ccff] rounded-2xl mb-6 shadow-lg shadow-[#0080ff]/30">
                  <MapPin className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-black text-white mb-4">Office Details</h3>

                <div className="space-y-3">
                  <div className="py-3" style={{ borderBottom: '1px solid rgba(0, 128, 255, 0.1)' }}>
                    <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Company Name</div>
                    <div className="text-[#00ccff] font-bold">Market Movers Trade</div>
                  </div>

                  <div className="py-3" style={{ borderBottom: '1px solid rgba(0, 128, 255, 0.1)' }}>
                    <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Street Address</div>
                    <div className="text-white font-semibold">75 Uxbridge Rd</div>
                  </div>

                  <div className="py-3" style={{ borderBottom: '1px solid rgba(0, 128, 255, 0.1)' }}>
                    <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">City & Postal</div>
                    <div className="text-white font-semibold">London W5 5SL</div>
                  </div>

                  <div className="py-3">
                    <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Country</div>
                    <div className="text-white font-semibold">England, United Kingdom</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transport Options */}
            <div className="relative rounded-3xl p-8 group transition-all duration-500 hover:-translate-y-2" style={{
              background: 'rgba(0, 128, 255, 0.05)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(0, 204, 255, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(0, 128, 255, 0.15), inset 0 0 40px rgba(0, 204, 255, 0.08)'
            }}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 204, 255, 0.1), transparent 70%)'
              }}></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#0066ff] to-[#0080ff] rounded-2xl mb-6 shadow-lg shadow-[#0066ff]/30">
                  <Building2 className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-black text-white mb-4">How to Reach Us</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#00ccff] rounded-full mt-2"></div>
                    <div>
                      <div className="text-white font-bold mb-1">By Underground</div>
                      <div className="text-slate-400 text-sm">Ealing Broadway Station - 5 min walk</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#0080ff] rounded-full mt-2"></div>
                    <div>
                      <div className="text-white font-bold mb-1">By Bus</div>
                      <div className="text-slate-400 text-sm">Multiple routes available nearby</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#0066ff] rounded-full mt-2"></div>
                    <div>
                      <div className="text-white font-bold mb-1">By Car</div>
                      <div className="text-slate-400 text-sm">Street parking available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Visit CTA */}
            <div className="relative rounded-3xl p-8 overflow-hidden" style={{
              background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 204, 255, 0.1) 100%)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(0, 204, 255, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.2)'
            }}>
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-black text-white mb-3">
                  Schedule a Visit
                </h3>
                <p className="text-sm text-slate-300 mb-6">
                  Book an appointment for personalized assistance
                </p>
                <button className="w-full px-6 py-3 rounded-xl text-white font-bold transition-all duration-300 hover:scale-105" style={{
                  background: 'linear-gradient(135deg, #0066ff 0%, #00ccff 100%)',
                  boxShadow: '0 4px 16px 0 rgba(0, 102, 255, 0.3)'
                }}>
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
