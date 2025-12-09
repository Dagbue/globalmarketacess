import { MapPin, ExternalLink, Building2 } from 'lucide-react';

export default function ContactMap() {
  const locationDetails = [
    { label: 'Company', value: 'Globalmarketacess' },
    { label: 'Address', value: '75 Uxbridge Rd' },
    { label: 'City', value: 'London W5 5SL' },
    { label: 'Country', value: 'England, United Kingdom' },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#0a0e27]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Us on the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Map
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Located in the heart of London, our office is easily accessible by public transport.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative group">
            <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
            <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800/50 group-hover:border-blue-800/50 transition-all" style={{ height: '500px' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-10 h-10 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Interactive Map</h3>
                  <p className="text-slate-400 mb-8 max-w-md mx-auto">
                    75 Uxbridge Rd, London W5 5SL, England UK
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=75+Uxbridge+Rd+London+W5+5SL+UK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-600/30"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
              <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl p-8 border border-slate-800/50 group-hover:border-blue-800/50 transition-all">
                <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-6">Office Location</h3>
                <div className="space-y-3">
                  {locationDetails.map((detail, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-sm text-slate-500 mb-1">{detail.label}</span>
                      <span className="text-white font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
