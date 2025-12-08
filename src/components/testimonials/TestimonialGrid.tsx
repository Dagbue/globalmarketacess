import { Star, ChevronDown, Filter, Check } from 'lucide-react';
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
  const [selectedCategory, setSelectedCategory] = useState<Category>('beginner');
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
    <section className="py-20 px-6 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Real Stories from <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500">Real Traders</span>
          </h2>
          <p className="text-lg text-purple-300 max-w-3xl mx-auto">
            Join thousands of successful traders who have transformed their financial future with Market Signal Trades. Read authentic experiences from our global trading community.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-600/30 animate-glow'
                    : 'glass-purple border border-purple-500/20 text-purple-300 hover:border-purple-500/40'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowRatingFilter(!showRatingFilter)}
              className="flex items-center space-x-2 px-5 py-2.5 glass-purple border border-purple-500/20 rounded-lg hover:border-purple-500/40 transition-all"
            >
              <Filter className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">
                {selectedRating ? `${selectedRating} Stars` : 'All Ratings'}
              </span>
              <ChevronDown className="w-4 h-4 text-purple-400" />
            </button>

            {showRatingFilter && (
              <div className="absolute right-0 mt-2 w-48 glass-purple border border-purple-500/30 rounded-lg shadow-xl z-10">
                <button
                  onClick={() => {
                    setSelectedRating(null);
                    setShowRatingFilter(false);
                  }}
                  className="w-full px-4 py-2.5 text-left text-sm hover:bg-purple-500/10 flex items-center justify-between text-purple-300"
                >
                  <span>All Ratings</span>
                  {!selectedRating && <Check className="w-4 h-4 text-fuchsia-400" />}
                </button>
                {[5, 4].map(rating => (
                  <button
                    key={rating}
                    onClick={() => {
                      setSelectedRating(rating);
                      setShowRatingFilter(false);
                    }}
                    className="w-full px-4 py-2.5 text-left text-sm hover:bg-purple-500/10 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-1">
                      {[...Array(rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    {selectedRating === rating && <Check className="w-4 h-4 text-fuchsia-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-purple border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-300 animate-glow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                  />
                  <div>
                    <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-purple-300">{testimonial.role}</p>
                    <p className="text-xs text-purple-400">{testimonial.location}</p>
                  </div>
                </div>
                {testimonial.verified && (
                  <div className="flex items-center space-x-1 px-2 py-1 bg-fuchsia-500/20 border border-fuchsia-500/30 rounded-full">
                    <Check className="w-3 h-3 text-fuchsia-400" />
                    <span className="text-xs font-medium text-fuchsia-300">Verified</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-xs text-purple-400">Joined {testimonial.joinedDate}</span>
              </div>

              <p className="text-sm text-purple-200 leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-purple-500/20">
                <div className="glass-magenta border border-fuchsia-500/20 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-fuchsia-400">{testimonial.profitPercent}</div>
                  <div className="text-xs text-purple-300">Profit</div>
                </div>
                <div className="glass-purple border border-purple-500/20 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-purple-400">{testimonial.profitPeriod}</div>
                  <div className="text-xs text-purple-300">Period</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="glass border border-purple-500/10 rounded-lg p-3 text-center">
                  <div className="text-base font-bold text-white">{testimonial.tradesCount}</div>
                  <div className="text-xs text-purple-400">Trades</div>
                </div>
                <div className="glass border border-pink-500/10 rounded-lg p-3 text-center">
                  <div className="text-base font-bold text-pink-400">{testimonial.startedWith}</div>
                  <div className="text-xs text-purple-400">Started with</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
