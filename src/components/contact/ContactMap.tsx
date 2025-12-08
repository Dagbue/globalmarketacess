import { MapPin, ExternalLink } from 'lucide-react';

export default function ContactMap() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500">
            Find us on the map
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Located in the heart of London, our office is easily accessible by public transport.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 glass-purple border border-purple-500/30 rounded-3xl overflow-hidden relative animate-glow" style={{ height: '500px' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Interactive Map</h3>
                <p className="text-slate-300 mb-6">
                  75 Uxbridge Rd, London W5 5SL, England UK
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=75+Uxbridge+Rd+London+W5+5SL+UK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/40 transition-all font-semibold"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-magenta border border-fuchsia-500/30 rounded-3xl p-8 animate-glow">
              <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-600 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-fuchsia-500/30">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Office Location</h3>
              <div className="space-y-3 text-slate-300">
                <p className="font-semibold text-fuchsia-300">Market Movers Trade</p>
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
