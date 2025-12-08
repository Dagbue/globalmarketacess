import { Star, Quote, Sparkles, Users, TrendingUp, Award } from 'lucide-react';

export default function TestimonialHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-slate-950 via-purple-950/40 to-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse animate-glow"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[120px] animate-pulse animate-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-magenta-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative mt-14">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 glass-purple border border-purple-500/30 rounded-full mb-6 shadow-lg shadow-purple-500/20 animate-glow">
            <div className="flex items-center space-x-1 mr-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-purple-300 font-semibold text-sm tracking-wide">Rated 4.9/5 by 10,000+ traders</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6">
            <span className="text-white">Trusted by traders</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500">
              worldwide
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Join thousands of successful traders who have transformed their financial journey with our platform. Here's what they have to say.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="group glass-purple rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] transition-all duration-500 animate-glow">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-black text-white mb-2">50K+</div>
              <div className="text-sm text-purple-300 font-medium">Active Users</div>
            </div>

            <div className="group glass-magenta rounded-3xl p-8 border border-fuchsia-500/20 hover:border-fuchsia-500/50 hover:shadow-[0_0_60px_rgba(232,121,249,0.3)] transition-all duration-500 animate-glow">
              <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-fuchsia-500/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-black text-white mb-2">$2.5B+</div>
              <div className="text-sm text-fuchsia-300 font-medium">Trading Volume</div>
            </div>

            <div className="group glass-purple rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] transition-all duration-500 animate-glow">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-black text-white mb-2">150+</div>
              <div className="text-sm text-purple-300 font-medium">Countries</div>
            </div>
          </div>

          <div className="inline-flex items-center justify-center space-x-3 glass border border-purple-500/30 px-8 py-4 rounded-2xl shadow-lg hover:glass-purple hover:border-purple-500/50 transition-all duration-300">
            <Quote className="w-5 h-5 text-fuchsia-400" />
            <span className="text-white font-semibold">Read real stories from real people</span>
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
