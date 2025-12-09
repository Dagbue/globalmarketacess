import { Star, Quote, MessageSquare, Users, TrendingUp, Award } from 'lucide-react';

export default function TestimonialHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative mt-14">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full mb-8">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-blue-300 text-sm font-medium">Rated 4.9/5 by 10,000+ traders</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Trusted by Traders
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Worldwide
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed">
            Join thousands of successful traders who have transformed their financial journey with our platform. Here's what they have to say.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
              <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl p-8 border border-slate-800/50 group-hover:border-blue-800/50 transition-all">
                <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">50K+</div>
                <div className="text-sm text-slate-400 font-medium">Active Users</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
              <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl p-8 border border-slate-800/50 group-hover:border-blue-800/50 transition-all">
                <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">$2.5B+</div>
                <div className="text-sm text-slate-400 font-medium">Trading Volume</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
              <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl p-8 border border-slate-800/50 group-hover:border-blue-800/50 transition-all">
                <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
                <div className="text-sm text-slate-400 font-medium">Countries</div>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 px-8 py-4 rounded-xl">
            <MessageSquare className="w-5 h-5 text-blue-400" />
            <span className="text-white font-medium">Read real stories from real people</span>
            <Quote className="w-5 h-5 text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
