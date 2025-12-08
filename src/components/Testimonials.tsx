import {ArrowRight, Star, Quote} from 'lucide-react';
import {useNavigate} from "react-router-dom";

const testimonials = [
  {
    quote:
      'Market Signal Trades helped us turn every trading campaign into a high-converting success story. Each creator storefront feels tailor-made, and the performance speaks volumes: 2.8x lift in conversions in just 3 weeks.',
    author: 'Sam Robins',
    role: 'Founder of Woonspooing',
    image: 'https://images.pexels.com/photos/6592370/pexels-photo-6592370.jpeg?_gl=1*u64czp*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjI5MTQkajU5JGwwJGgw',
    rating: 4,
    featured: true,
  },
  {
    quote:
      'Market Signal Trades Trade is revolutionizing the crypto, forex, and stocks derivatives market through its innovative and user-friendly platform. The execution speed is phenomenal.',
    author: 'CASPER BROWN',
    role: 'Professional Trader',
    image: 'https://images.pexels.com/photos/5313159/pexels-photo-5313159.jpeg?_gl=1*u64czp*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjI5MTQkajU5JGwwJGgw',
    rating: 5,
    featured: false
  },
  {
    quote:
      'The CopyTrader feature has transformed my investment strategy. I can follow top performers and learn from their decisions in real-time. Complete transparency and security.',
    author: 'SARAH MITCHELL',
    role: 'Investment Manager',
    image: 'https://images.pexels.com/photos/7610782/pexels-photo-7610782.jpeg?_gl=1*1ov1mnl*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjI2MjQkajU5JGwwJGgw',
    rating: 5,
    featured: false
  },
  {
    quote:
      'As a day trader, I need lightning-fast execution and reliable data feeds. Market Signal Trades delivers on both fronts with zero latency and comprehensive market analysis tools.',
    author: 'MICHAEL CHANG',
    role: 'Day Trader',
    image: 'https://images.pexels.com/photos/7845468/pexels-photo-7845468.jpeg?_gl=1*1ov1mnl*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjI2MjQkajU5JGwwJGgw',
    rating: 5,
    featured: false
  },
  {
    quote:
      'The educational resources and 24/7 support team have been invaluable. From my first trade to building a diversified portfolio, expert guidance every step of the way.',
    author: 'JESSICA WILLIAMS',
    role: 'Retail Investor',
    image: 'https://images.pexels.com/photos/8062278/pexels-photo-8062278.jpeg?_gl=1*1ov1mnl*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjI2MjQkajU5JGwwJGgw',
    rating: 5,
    featured: false
  }
];

const userImages = [
  'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
  'https://images.pexels.com/photos/4064026/pexels-photo-4064026.jpeg?_gl=1*4lqkxj*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjI2MjQkajU5JGwwJGgw',
  'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
  'https://images.pexels.com/photos/7964388/pexels-photo-7964388.jpeg?_gl=1*4lqkxj*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjI2MjQkajU5JGwwJGgw',
  'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop'
];

export default function Testimonials() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center -space-x-3 mb-6">
            {userImages.map((img, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full border-4 border-slate-950 overflow-hidden shadow-lg ring-2 ring-blue-500/30 animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={img}
                  alt={`User ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Testimonials from
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 animate-glow">
              Our Partners
            </span>
          </h2>

          <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            See how we are helping people scale faster with Market Signal Trades.
          </p>
        </div>

        {/* Masonry-style grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Large featured card */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 glass-strong rounded-3xl p-10 border border-blue-500/30 hover:border-cyan-500/40 hover:shadow-[0_20px_70px_-15px_rgba(0,102,255,0.5)] transition-all duration-500 animate-float backdrop-blur-xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonials[0].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-12 h-12 text-blue-500/20" />
              </div>

              <p className="text-slate-300 text-xl leading-relaxed mb-8">
                "{testimonials[0].quote}"
              </p>

              <div className="flex items-center space-x-4 pt-6 border-t border-blue-500/20">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl blur opacity-50 animate-glow"></div>
                  <img
                    src={testimonials[0].image}
                    alt={testimonials[0].author}
                    className="relative w-16 h-16 rounded-2xl object-cover ring-4 ring-blue-500/30"
                  />
                </div>
                <div>
                  <div className="font-bold text-white text-lg">{testimonials[0].author}</div>
                  <div className="text-cyan-400 text-sm font-semibold">{testimonials[0].role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Smaller cards in masonry layout */}
          {testimonials.slice(1).map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-500/30 hover:shadow-[0_15px_50px_-10px_rgba(0,204,255,0.4)] transition-all duration-500 animate-float group ${
                index === 1 ? 'lg:row-span-2' : ''
              }`}
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-500/20" />
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center space-x-3 pt-4 border-t border-blue-500/20">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-xl object-cover ring-2 ring-blue-500/30 group-hover:ring-cyan-500/40 transition-all"
                />
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.author}</div>
                  <div className="text-slate-400 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 rounded-3xl blur-3xl animate-glow"></div>
          <div className="relative glass-strong rounded-3xl p-12 lg:p-16 shadow-2xl overflow-hidden border border-blue-500/30 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff12_1px,transparent_1px),linear-gradient(to_bottom,#0066ff12_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

            <div className="flex items-center justify-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-300 fill-current"/>
              ))}
            </div>

            <div className="relative text-center">
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 tracking-tight">
                Join 50,000+ Happy Traders
              </h3>
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                Start your journey with the most trusted trading platform. No credit card required.
              </p>
              <button
                onClick={handleBack}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all font-bold text-lg hover:scale-105 flex items-center space-x-2 mx-auto animate-glow"
              >
                <span>Create Free Account</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
