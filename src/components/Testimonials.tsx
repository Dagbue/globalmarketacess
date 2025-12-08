import {ArrowRight, Star} from 'lucide-react';
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
    featuredImage: ''
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

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 mb-4">
      {testimonial.featured && testimonial.featuredImage && (
        <div className="mb-4">
          <img
            src={testimonial.featuredImage}
            alt="Featured"
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>
      )}

      <p className="text-gray-700 text-sm leading-relaxed mb-4">
        {testimonial.quote}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-3">
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
            <div className="text-gray-600 text-xs">{testimonial.role}</div>
          </div>
        </div>

        <div className="flex items-center space-x-0.5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
    </div>
  );
}

// @ts-ignore
function ScrollingColumn({ testimonials }: { testimonials: typeof testimonials }) {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative h-[700px] overflow-hidden">
      <div
        className="flex flex-col"
        style={{
          animation: 'scroll-up 40s linear infinite',
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  const userImages = [
    'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    'https://images.pexels.com/photos/4064026/pexels-photo-4064026.jpeg?_gl=1*4lqkxj*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjI2MjQkajU5JGwwJGgw',
    'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    'https://images.pexels.com/photos/7964388/pexels-photo-7964388.jpeg?_gl=1*4lqkxj*_ga*NTI4NDg1NjA3LjE3NjIxNjE5Nzg.*_ga_8JE65Q40S6*czE3NjIxNjE5NzckbzEkZzEkdDE3NjIxNjI2MjQkajU5JGwwJGgw',
    'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop'
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <style>
        {`
          @keyframes scroll-up {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
        `}
      </style>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center -space-x-3 mb-6">
              {userImages.map((img, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-lg"
                >
                  <img
                    src={img}
                    alt={`User ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>



            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Testimonials from
              <br />
              Our Partners
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              See how we are helping people scale faster with <br/> Market Signal Trades.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                  onClick={handleBack}
                  className="group px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all font-semibold text-sm shadow-xl hover:scale-105 flex items-center space-x-2">
                <span>Start Trading</span>
              </button>
              {/*<button className="px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-all font-semibold text-sm border-2 border-gray-200 flex items-center space-x-2">*/}
              {/*  <span>Book a Call</span>*/}
              {/*</button>*/}
            </div>
          </div>

          <div className="lg:block">
            <ScrollingColumn testimonials={testimonials} />
          </div>
        </div>

        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 lg:p-16 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

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
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                    onClick={handleBack}
                    className="group px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-blue-50 transition-all font-bold text-lg shadow-xl hover:scale-105 flex items-center space-x-2">
                  <span>Create Free Account</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
