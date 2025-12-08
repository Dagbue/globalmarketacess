import { MapPin, ExternalLink } from 'lucide-react';

export default function ContactMap() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Find us on the map
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of London, our office is easily accessible by public transport.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-gray-100 rounded-3xl overflow-hidden border-2 border-gray-200 relative" style={{ height: '500px' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Interactive Map</h3>
                <p className="text-gray-600 mb-6">
                  75 Uxbridge Rd, London W5 5SL, England UK
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=75+Uxbridge+Rd+London+W5+5SL+UK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all font-semibold"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Office Location</h3>
              <div className="space-y-3 text-gray-600">
                <p className="font-semibold text-gray-900">Market Movers Trade</p>
                <p>75 Uxbridge Rd</p>
                <p>London W5 5SL</p>
                <p>England, United Kingdom</p>
              </div>
            </div>

          </div>
        </div>


      </div>
    </section>
  );
}
