import { ArrowRight, Star, MessageSquare, Quote } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    quote: 'Globalmarketacess transformed my approach to trading with its seamless automation tools. I saw a 3.2x increase in my portfolio value in just one month.',
    author: 'Emma Larson',
    role: 'Entrepreneur & Investor',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
  },
  {
    quote: 'The platform’s advanced charting and real-time signals are game-changers. I’ve never experienced such precision in crypto and forex markets.',
    author: 'Lucas Ferreira',
    role: 'Full-Time Trader',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
  },
  {
    quote: 'Thanks to the Social Trading feature, I can mirror the moves of elite traders while building my own skills. It’s like having a mentor 24/7.',
    author: 'Amina Khalid',
    role: 'Wealth Consultant',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
  },
  {
    quote: 'Zero slippage and ultra-fast trade execution make this platform unmatched. The analytics dashboard gives me an edge in every market session.',
    author: 'Ryan Patel',
    role: 'Scalping Specialist',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
  },
  {
    quote: 'As a beginner, the guided tutorials and responsive support team made all the difference. I’m now confidently trading across multiple asset classes.',
    author: 'Sophie Nguyen',
    role: 'New Investor',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
  },
  {
    quote: 'This is the most intuitive trading platform I’ve ever used. From strategy automation to VIP support, it’s built for serious wealth creation.',
    author: 'Oliver Schmidt',
    role: 'Hedge Fund Analyst',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
  },
];

export default function Testimonials() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };

  return (
      <section className="relative py-32 px-6 bg-[#0a0e27] overflow-hidden">
        {/* Background effects remain unchanged */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-800/6 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto relative">

          {/* Badge & Heading unchanged */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-full">
              <MessageSquare className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Client Testimonials</span>
            </div>
          </div>

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Trusted by Traders
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Worldwide
            </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              See what our clients have to say about their trading experience with us
            </p>
          </div>

          {/* Testimonials Grid – NOW WITH AVATARS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-blue-700/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>

                  <div className="relative">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                      <Quote className="w-6 h-6 text-blue-400" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p className="text-slate-300 text-base leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </p>

                    {/* Author + Avatar */}
                    <div className="flex items-center gap-4 pt-6 border-t border-slate-800/50">
                      <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-600/20"
                      />
                      <div>
                        <div className="font-bold text-white text-lg">{testimonial.author}</div>
                        <div className="text-slate-400 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* CTA Section – unchanged */}
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
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/40"
              >
                Get Started Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}