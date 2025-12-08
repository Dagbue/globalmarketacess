import { Star, ChevronDown, Filter, Check, TrendingUp, Award } from 'lucide-react';
import { useState } from 'react';

type Category = 'all' | 'beginner' | 'professional' | 'crypto';

interface Testimonial {
  name: string;
  role: string;
  location: string;
  image: string;
  verified: boolean;
  joinedDate: string;
  rating: number;
  quote: string;
  profitPercent: string;
  profitPeriod: string;
  tradesCount: string;
  startedWith: string;
  category: Category;
}

const testimonials: Testimonial[] = [
  {
    name: "David Chen",
    role: "Software Engineer",
    location: "Singapore",
    image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "March 2024",
    rating: 5,
    quote: "The platform's intuitive interface made my transition into trading seamless. Within 10 months, I've achieved returns I never thought possible. The educational resources are exceptional, and the real-time analytics give me the confidence to make informed decisions every single day.",
    profitPercent: "+156%",
    profitPeriod: "10 months",
    tradesCount: "1,200+",
    startedWith: "$5,000",
    category: 'beginner'
  },
  {
    name: "Maria Santos",
    role: "Financial Analyst",
    location: "Brazil",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "January 2024",
    rating: 5,
    quote: "As a financial professional, I demand precision and reliability. This platform exceeds expectations with institutional-grade tools, lightning-fast execution, and zero slippage. The advanced charting capabilities and automated strategies have revolutionized how I approach the markets.",
    profitPercent: "+289%",
    profitPeriod: "8 months",
    tradesCount: "890+",
    startedWith: "$25,000",
    category: 'professional'
  },
  {
    name: "James Wilson",
    role: "Retired Teacher",
    location: "UK",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "May 2024",
    rating: 5,
    quote: "At 65, I discovered a new passion and income stream. The copy trading feature let me learn from experts while earning. The community support is incredible, and the platform's simplicity means I can focus on growing my retirement fund without technical overwhelm.",
    profitPercent: "+412%",
    profitPeriod: "6 months",
    tradesCount: "650+",
    startedWith: "$10,000",
    category: 'beginner'
  },
  {
    name: "Aisha Patel",
    role: "Crypto Enthusiast",
    location: "India",
    image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "December 2023",
    rating: 5,
    quote: "This is the ultimate platform for crypto trading. Real-time market data, incredibly tight spreads, and the ability to trade crypto alongside traditional assets. The security protocols are military-grade, giving me total peace of mind with every transaction.",
    profitPercent: "+523%",
    profitPeriod: "11 months",
    tradesCount: "2,100+",
    startedWith: "$15,000",
    category: 'crypto'
  },
  {
    name: "Robert Kim",
    role: "Investment Manager",
    location: "South Korea",
    image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "October 2022",
    rating: 5,
    quote: "After 15 years in institutional trading, I can confidently say this platform rivals any professional trading desk. The algorithmic trading API, comprehensive backtesting suite, and execution quality are unmatched. It's the perfect bridge between retail and institutional trading.",
    profitPercent: "+734%",
    profitPeriod: "2 years",
    tradesCount: "5,400+",
    startedWith: "$50,000",
    category: 'professional'
  },
  {
    name: "Lisa Anderson",
    role: "Marketing Director",
    location: "Canada",
    image: "https://images.pexels.com/photos/3756684/pexels-photo-3756684.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "August 2021",
    rating: 5,
    quote: "Trading while managing a demanding career seemed impossible until I found this platform. The automated strategies and intelligent signal services work flawlessly in the background. I'm generating substantial returns without sacrificing my professional commitments or personal life.",
    profitPercent: "+891%",
    profitPeriod: "3 years",
    tradesCount: "3,200+",
    startedWith: "$20,000",
    category: 'professional'
  },
  {
    name: "Michael Torres",
    role: "Freelance Designer",
    location: "Spain",
    image: "https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "February 2024",
    rating: 5,
    quote: "The mobile app is a masterpiece of design and functionality. I manage my portfolio from beaches, cafes, anywhere. The interface is beautiful yet powerful, and customer support responds instantly. It's like having a trading desk in my pocket with unlimited potential.",
    profitPercent: "+198%",
    profitPeriod: "9 months",
    tradesCount: "780+",
    startedWith: "$8,000",
    category: 'beginner'
  },
  {
    name: "Sarah Johnson",
    role: "Blockchain Developer",
    location: "USA",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "November 2023",
    rating: 5,
    quote: "As someone building the future of blockchain technology, I appreciate true innovation. This platform's commitment to cutting-edge technology, transparent pricing, and unmatched crypto derivatives access makes it the clear leader in digital asset trading.",
    profitPercent: "+445%",
    profitPeriod: "1 year",
    tradesCount: "1,800+",
    startedWith: "$30,000",
    category: 'crypto'
  },
  {
    name: "Ahmed Hassan",
    role: "Day Trader",
    location: "UAE",
    image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "April 2023",
    rating: 5,
    quote: "Speed is everything in day trading. This platform delivers microsecond execution, zero slippage on 99% of trades, and real-time analytics that give me an edge. The live market depth visualization and order flow tools are simply the best I've ever used.",
    profitPercent: "+612%",
    profitPeriod: "18 months",
    tradesCount: "4,500+",
    startedWith: "$40,000",
    category: 'professional'
  },
  {
    name: "Emily Wright",
    role: "College Student",
    location: "Australia",
    image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "June 2024",
    rating: 5,
    quote: "I started with savings from my part-time job and now I'm earning enough to pay for my entire university tuition. The educational webinars taught me everything from basics to advanced strategies. This platform literally changed my life trajectory.",
    profitPercent: "+134%",
    profitPeriod: "5 months",
    tradesCount: "420+",
    startedWith: "$2,000",
    category: 'beginner'
  },
  {
    name: "Daniel Park",
    role: "Bitcoin Investor",
    location: "South Korea",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "September 2023",
    rating: 5,
    quote: "Since 2017, I've traded on every major crypto platform. Nothing comes close to this. The leverage options, sophisticated hedging tools, and ability to trade crypto CFDs with precision timing has multiplied my returns beyond what spot trading ever could.",
    profitPercent: "+678%",
    profitPeriod: "14 months",
    tradesCount: "2,900+",
    startedWith: "$35,000",
    category: 'crypto'
  },
  {
    name: "Sophie Martin",
    role: "Wealth Manager",
    location: "France",
    image: "https://images.pexels.com/photos/3756684/pexels-photo-3756684.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "January 2023",
    rating: 5,
    quote: "Managing 50+ client portfolios requires enterprise-level tools. The multi-account management system, comprehensive reporting suite, and white-label capabilities have transformed my wealth management practice. My clients' portfolios have never performed better.",
    profitPercent: "+845%",
    profitPeriod: "22 months",
    tradesCount: "6,100+",
    startedWith: "$100,000",
    category: 'professional'
  }
];

export default function TestimonialGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [showRatingFilter, setShowRatingFilter] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const filteredTestimonials = testimonials.filter(t => {
    const categoryMatch = selectedCategory === 'all' || t.category === selectedCategory;
    const ratingMatch = !selectedRating || t.rating === selectedRating;
    return categoryMatch && ratingMatch;
  });

  const getCategoryCount = (category: Category) => {
    if (category === 'all') return testimonials.length;
    return testimonials.filter(t => t.category === category).length;
  };

  const categories = [
    { id: 'all' as Category, label: 'All Stories', count: getCategoryCount('all') },
    { id: 'beginner' as Category, label: 'Beginner Success', count: getCategoryCount('beginner') },
    { id: 'professional' as Category, label: 'Professional', count: getCategoryCount('professional') },
    { id: 'crypto' as Category, label: 'Crypto Traders', count: getCategoryCount('crypto') }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#0066ff]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#00ccff]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Success Stories From </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff]">
              Our Community
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Authentic experiences from traders worldwide who chose to invest in their future
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'text-white shadow-lg'
                    : 'text-slate-300 hover:text-white'
                }`}
                style={selectedCategory === cat.id ? {
                  background: 'linear-gradient(135deg, #0066ff 0%, #00ccff 100%)',
                  boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.4)'
                } : {
                  background: 'rgba(0, 102, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 128, 255, 0.2)'
                }}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowRatingFilter(!showRatingFilter)}
              className="flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all"
              style={{
                background: 'rgba(0, 102, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0, 128, 255, 0.2)'
              }}
            >
              <Filter className="w-4 h-4 text-[#00ccff]" />
              <span className="text-sm text-slate-300">
                {selectedRating ? `${selectedRating} Stars` : 'All Ratings'}
              </span>
              <ChevronDown className="w-4 h-4 text-[#00ccff]" />
            </button>

            {showRatingFilter && (
              <div className="absolute right-0 mt-2 w-48 rounded-2xl shadow-xl z-10" style={{
                background: 'rgba(0, 102, 255, 0.08)',
                backdropFilter: 'blur(30px)',
                border: '1px solid rgba(0, 128, 255, 0.3)'
              }}>
                <button
                  onClick={() => {
                    setSelectedRating(null);
                    setShowRatingFilter(false);
                  }}
                  className="w-full px-4 py-3 text-left text-sm hover:bg-[#0066ff]/10 flex items-center justify-between text-slate-300 rounded-t-2xl transition-colors"
                >
                  <span>All Ratings</span>
                  {!selectedRating && <Check className="w-4 h-4 text-[#00ccff]" />}
                </button>
                {[5, 4].map(rating => (
                  <button
                    key={rating}
                    onClick={() => {
                      setSelectedRating(rating);
                      setShowRatingFilter(false);
                    }}
                    className="w-full px-4 py-3 text-left text-sm hover:bg-[#0066ff]/10 flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center space-x-1">
                      {[...Array(rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    {selectedRating === rating && <Check className="w-4 h-4 text-[#00ccff]" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Masonry-Style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="break-inside-avoid group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:scale-105"
              style={{
                background: 'rgba(0, 102, 255, 0.04)',
                backdropFilter: 'blur(30px)',
                border: '1px solid rgba(0, 128, 255, 0.15)',
                boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.1), inset 0 0 40px rgba(0, 204, 255, 0.05)'
              }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 204, 255, 0.15), transparent 70%)'
              }}></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-2xl object-cover" style={{
                        border: '2px solid rgba(0, 204, 255, 0.3)'
                      }}
                    />
                    <div>
                      <h4 className="font-black text-white text-base">{testimonial.name}</h4>
                      <p className="text-xs text-[#00ccff] font-semibold">{testimonial.role}</p>
                      <p className="text-xs text-slate-400">{testimonial.location}</p>
                    </div>
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center space-x-1 px-3 py-1 rounded-full" style={{
                      background: 'rgba(0, 204, 255, 0.15)',
                      border: '1px solid rgba(0, 204, 255, 0.3)'
                    }}>
                      <Check className="w-3 h-3 text-[#00ccff]" />
                      <span className="text-xs font-bold text-[#00ccff]">Verified</span>
                    </div>
                  )}
                </div>

                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Joined {testimonial.joinedDate}</span>
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl p-4 text-center group/card transition-all" style={{
                    background: 'rgba(0, 128, 255, 0.08)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0, 204, 255, 0.2)'
                  }}>
                    <TrendingUp className="w-5 h-5 text-[#00ccff] mx-auto mb-2" />
                    <div className="text-2xl font-black text-[#00ccff]">{testimonial.profitPercent}</div>
                    <div className="text-xs text-slate-400 font-semibold">{testimonial.profitPeriod}</div>
                  </div>
                  <div className="rounded-xl p-4 text-center group/card transition-all" style={{
                    background: 'rgba(0, 102, 255, 0.08)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0, 128, 255, 0.2)'
                  }}>
                    <Award className="w-5 h-5 text-[#0080ff] mx-auto mb-2" />
                    <div className="text-2xl font-black text-[#0080ff]">{testimonial.tradesCount}</div>
                    <div className="text-xs text-slate-400 font-semibold">Trades</div>
                  </div>
                </div>

                {/* Started With */}
                <div className="mt-3 text-center py-2 px-4 rounded-xl" style={{
                  background: 'rgba(0, 204, 255, 0.05)',
                  border: '1px solid rgba(0, 204, 255, 0.1)'
                }}>
                  <span className="text-xs text-slate-500 font-medium">Started with </span>
                  <span className="text-sm text-white font-bold">{testimonial.startedWith}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
