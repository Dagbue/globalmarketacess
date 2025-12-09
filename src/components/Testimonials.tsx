import {ArrowRight, Star, MessageSquare, Quote} from 'lucide-react';
import {useNavigate} from "react-router-dom";

const testimonials = [
  {
    quote:
      'Globalmarketacess helped us turn every trading campaign into a high-converting success story. The performance speaks volumes: 2.8x lift in conversions in just 3 weeks.',
    author: 'Sam Robins',
    role: 'Founder of Woonspooing',
    rating: 5,
  },
  {
    quote:
      'Revolutionizing the crypto, forex, and stocks derivatives market through its innovative and user-friendly platform. The execution speed is phenomenal.',
    author: 'Casper Brown',
    role: 'Professional Trader',
    rating: 5,
  },
  {
    quote:
      'The CopyTrader feature has transformed my investment strategy. I can follow top performers and learn from their decisions in real-time with complete transparency.',
    author: 'Sarah Mitchell',
    role: 'Investment Manager',
    rating: 5,
  },
  {
    quote:
      'Lightning-fast execution and reliable data feeds. Globalmarketacess delivers on both fronts with zero latency and comprehensive market analysis tools.',
    author: 'Michael Chang',
    role: 'Day Trader',
    rating: 5,
  },
  {
    quote:
      'The educational resources and 24/7 support team have been invaluable. From my first trade to building a diversified portfolio, expert guidance every step.',
    author: 'Jessica Williams',
    role: 'Retail Investor',
    rating: 5,
  },
  {
    quote:
      'The platform has exceeded all my expectations. Professional tools, excellent support, and a user interface that makes trading a pleasure.',
    author: 'David Martinez',
    role: 'Portfolio Manager',
    rating: 5,
  }
];

export default function Testimonials() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  return (
    <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gentle Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full">
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Client Testimonials</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Trusted by Traders
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Worldwide
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            See what our clients have to say about their trading experience with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-blue-800/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>

              <div className="relative">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Quote className="w-6 h-6 text-blue-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-slate-800/50">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-slate-400 text-xs mt-1">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-blue-800/10 rounded-2xl blur-xl"></div>

          <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-800/50 p-12 text-center">
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join 50,000+ Satisfied Traders
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Start your trading journey today and experience the platform trusted by thousands
            </p>

            <button
              onClick={handleBack}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
