import { Star, Quote, Sparkles, Users, TrendingUp, Award } from 'lucide-react';

export default function TestimonialHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative mt-14">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-full mb-6 shadow-lg shadow-blue-500/10">
            <div className="flex items-center space-x-1 mr-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-blue-300 font-semibold text-sm tracking-wide">Rated 4.9/5 by 10,000+ traders</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6">
            <span className="text-white">Trusted by traders</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              worldwide
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Join thousands of successful traders who have transformed their financial journey with our platform. Here's what they have to say.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="group bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_60px_rgba(59,130,246,0.2)] transition-all duration-500">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-black text-white mb-2">50K+</div>
              <div className="text-sm text-slate-400 font-medium">Active Users</div>
            </div>

            <div className="group bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_60px_rgba(6,182,212,0.2)] transition-all duration-500">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-black text-white mb-2">$2.5B+</div>
              <div className="text-sm text-slate-400 font-medium">Trading Volume</div>
            </div>

            <div className="group bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_60px_rgba(59,130,246,0.2)] transition-all duration-500">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-black text-white mb-2">150+</div>
              <div className="text-sm text-slate-400 font-medium">Countries</div>
            </div>
          </div>

          <div className="inline-flex items-center justify-center space-x-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 px-8 py-4 rounded-2xl shadow-lg hover:bg-slate-800/80 hover:border-blue-500/50 transition-all duration-300">
            <Quote className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-semibold">Read real stories from real people</span>
            <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
