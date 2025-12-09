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
    quote: "Started with zero trading experience. Globalmarketacess educational resources and demo account helped me learn the basics. Now I'm consistently profitable with forex trading.",
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
    quote: "The Live Trading integration is seamless. Advanced charting tools and Expert Advisors have enhanced my trading strategies significantly. Platform reliability is outstanding.",
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
    quote: "At 65, I thought it was too late to start trading. Globalmarketacess copy trading feature allowed me to follow successful traders while learning. Now I have a steady income stream.",
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
    quote: "Perfect platform for crypto trading. Real-time data feeds, low spreads, and the ability to trade crypto alongside traditional assets. The security features give me peace of mind.",
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
    quote: "Institutional-grade execution with retail accessibility. The algorithmic trading API and back-testing capabilities are exceptional. Best platform for serious traders.",
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
    quote: "Balancing a full-time job and trading seemed impossible. The automated strategies and signal services help me trade effectively without constant monitoring.",
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
    quote: "The Web app is incredible. I can monitor positions and execute trades from anywhere. The interface is intuitive and the customer support is always helpful.",
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
    quote: "As someone deeply involved in blockchain technology, I appreciate Globalmarketacess commitment to innovation. The crypto derivatives market access is unmatched.",
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
    quote: "Lightning-fast execution is critical for day trading. Globalmarketacess delivers with zero slippage on most trades. The analytics dashboard provides real-time insights I need.",
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
    quote: "Started with a small amount while studying. The educational webinars and practice account helped me build confidence. Now earning enough to cover my tuition.",
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
    quote: "Been in crypto since 2017. Globalmarketacess offers the best crypto CFD trading experience with leverage options and hedging strategies unavailable on regular exchanges.",
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
    quote: "Managing client portfolios requires reliability and precision. Globalmarketacess multi-account management and reporting tools streamline my workflow significantly.",
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
    <section className="relative py-20 px-6 bg-[#0a0e27]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Stories from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Real Traders</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Join thousands of successful traders who have transformed their financial future. Read authentic experiences from our global trading community.
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
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700/50'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowRatingFilter(!showRatingFilter)}
              className="flex items-center space-x-2 px-5 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:bg-slate-800 transition-all"
            >
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-sm font-medium text-slate-300">
                {selectedRating ? `${selectedRating} Stars` : 'All Ratings'}
              </span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {showRatingFilter && (
              <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-lg shadow-xl z-10">
                <button
                  onClick={() => {
                    setSelectedRating(null);
                    setShowRatingFilter(false);
                  }}
                  className="w-full px-4 py-2.5 text-left text-sm hover:bg-slate-800 flex items-center justify-between text-slate-300"
                >
                  <span>All Ratings</span>
                  {!selectedRating && <Check className="w-4 h-4 text-blue-400" />}
                </button>
                {[5, 4].map(rating => (
                  <button
                    key={rating}
                    onClick={() => {
                      setSelectedRating(rating);
                      setShowRatingFilter(false);
                    }}
                    className="w-full px-4 py-2.5 text-left text-sm hover:bg-slate-800 flex items-center justify-between text-slate-300"
                  >
                    <div className="flex items-center space-x-1">
                      {[...Array(rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    {selectedRating === rating && <Check className="w-4 h-4 text-blue-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
              <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 group-hover:border-blue-800/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-600/20"
                    />
                    <div>
                      <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-slate-400">{testimonial.role}</p>
                      <p className="text-xs text-slate-500">{testimonial.location}</p>
                    </div>
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center space-x-1 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                      <Check className="w-3 h-3 text-green-400" />
                      <span className="text-xs font-medium text-green-400">Verified</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">Joined {testimonial.joinedDate}</span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </p>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/50">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-green-400">{testimonial.profitPercent}</div>
                    <div className="text-xs text-slate-400">Profit</div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-blue-400">{testimonial.profitPeriod}</div>
                    <div className="text-xs text-slate-400">Period</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-3 text-center">
                    <div className="text-base font-bold text-white">{testimonial.tradesCount}</div>
                    <div className="text-xs text-slate-400">Trades</div>
                  </div>
                  <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-3 text-center">
                    <div className="text-base font-bold text-orange-400">{testimonial.startedWith}</div>
                    <div className="text-xs text-slate-400">Started with</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
