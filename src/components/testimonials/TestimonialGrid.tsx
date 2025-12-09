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
    name: "Liam Andersson",
    role: "Former Airline Pilot",
    location: "Sweden",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "July 2024",
    rating: 5,
    quote: "After 25 years flying planes I needed a new challenge. The copy-trading system let me mirror top performers while I learned. Now generating more monthly than my old captain salary.",
    profitPercent: "+376%",
    profitPeriod: "5 months",
    tradesCount: "580+",
    startedWith: "$12,000",
    category: 'beginner'
  },
  {
    name: "Valeria Morales",
    role: "Dentist",
    location: "Mexico",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "February 2024",
    rating: 5,
    quote: "I only trade 30 minutes after clinic hours. The AI signals and one-click execution make it possible to grow my account consistently without stress.",
    profitPercent: "+467%",
    profitPeriod: "10 months",
    tradesCount: "1,100+",
    startedWith: "$18,000",
    category: 'professional'
  },
  {
    name: "Noah Weber",
    role: "Mechanical Engineering Student",
    location: "Germany",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "September 2024",
    rating: 5,
    quote: "Started with birthday money during my bachelor thesis. The demo → live transition was seamless. Already paid off half my student loan.",
    profitPercent: "+219%",
    profitPeriod: "3 months",
    tradesCount: "340+",
    startedWith: "$3,500",
    category: 'beginner'
  },
  {
    name: "Fatima Al-Mansoori",
    role: "DeFi Analyst",
    location: "Dubai, UAE",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "March 2023",
    rating: 5,
    quote: "Finally a regulated broker that offers 50x leverage on BTC & ETH perpetuals with real depth. Deep order book + instant withdrawals = perfect for my strategies.",
    profitPercent: "+1,240%",
    profitPeriod: "21 months",
    tradesCount: "8,700+",
    startedWith: "$60,000",
    category: 'crypto'
  },
  {
    name: "Ethan Dubois",
    role: "Hedge Fund Quant (ex-Goldman)",
    location: "Switzerland",
    image: "https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "November 2022",
    rating: 5,
    quote: "The raw spread accounts + co-location execution beat most institutional desks I’ve used. Running my own EAs via their API has been flawless.",
    profitPercent: "+1,680%",
    profitPeriod: "2.1 years",
    tradesCount: "19,200+",
    startedWith: "$150,000",
    category: 'professional'
},
{
  name: "Sofia Rossi",
  role: "Fashion Buyer",
    location: "Italy",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "May 2024",
    rating: 5,
    quote: "Traveling Milan–Paris–NY every month made traditional brokers impossible. The mobile platform lets me scalp gold and EURUSD between fashion shows.",
    profitPercent: "+328%",
    profitPeriod: "7 months",
    tradesCount: "920+",
    startedWith: "$14,000",
    category: 'professional'
},
{
  name: "Rajesh Kumar",
      role: "IT Project Manager",
    location: "Bangalore, India",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "April 2024",
    rating: 5,
    quote: "Used the ₹20 lakh bonus + demo contests to practice. Now trading NASDAQ & crypto with my own capital. Quit my 9-5 last month.",
    profitPercent: "+542%",
    profitPeriod: "8 months",
    tradesCount: "1,650+",
    startedWith: "$9,000",
    category: 'beginner'
},
{
  name: "Olivia Chen",
      role: "Smart Contract Developer",
    location: "Taiwan",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "January 2024",
    rating: 5,
    quote: "I hedge my altcoin bags with short perpetuals here. The funding rate arbitrage alone paid for my new MacStudio.",
    profitPercent: "+789%",
    profitPeriod: "11 months",
    tradesCount: "4,100+",
    startedWith: "$22,000",
    category: 'crypto'
},
{
  name: "Marcus Olsen",
      role: "Offshore Oil Engineer",
    location: "Norway",
    image: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "June 2023",
    rating: 5,
    quote: "28 days on / 28 days off schedule. I trade oil futures and XAU during my offshore weeks using the tablet app. Best risk-adjusted returns of my life.",
    profitPercent: "+934%",
    profitPeriod: "18 months",
    tradesCount: "2,800+",
    startedWith: "$45,000",
    category: 'professional'
},
  {
    name: "Isabella Gómez",
    role: "Nurse",
    location: "Colombia",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "August 2024",
    rating: 5,
    quote: "Night shifts left me exhausted for day trading. Switched to swing trading indices using pending orders. Now working only 3 days a week at the hospital.",
    profitPercent: "+181%",
    profitPeriod: "4 months",
    tradesCount: "290+",
    startedWith: "$4,200",
    category: 'beginner'
  },
{
  name: "Dmitry Volkov",
      role: "Ex-Pro Poker Player",
    location: "Cyprus",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "October 2023",
    rating: 5,
    quote: "Trading is just better poker. The platform’s depth of book and zero requotes give me the same edge I had at the WSOP tables.",
    profitPercent: "+1,380%",
    profitPeriod: "14 months",
    tradesCount: "11,500+",
    startedWith: "$80,000",
    category: 'professional'
},
{
  name: "Amira Rahman",
      role: "Solana NFT Trader",
    location: "Malaysia",
    image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "May 2023",
    rating: 5,
    quote: "Using 20x leverage on SOL perpetuals to flip NFT profits into even bigger gains. Fastest withdrawals in the industry — under 10 minutes to my wallet.",
    profitPercent: "+2,150%",
    profitPeriod: "19 months",
    tradesCount: "6,300+",
    startedWith: "$28,000",
    category: 'crypto'
},
{
  name: "Carlos Mendoza",
      role: "Coffee Farm Owner",
    location: "Costa Rica",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "March 2024",
    rating: 5,
    quote: "Hedging coffee price risk with commodities futures here. The educational academy actually taught me more than my university degree.",
    profitPercent: "+296%",
    profitPeriod: "9 months",
    tradesCount: "710+",
    startedWith: "$16,000",
    category: 'beginner'
},
{
  name: "Freya Johansson",
      role: "Algorithmic Trader",
    location: "Denmark",
    image: "https://images.pexels.com/photos/1181685/pexels-photo-1181685.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "December 2022",
    rating: 5,
    quote: "Running 12 different strategies via VPS. Their Python API has 100% uptime and sub-millisecond latency. Finally found a broker that keeps up with me.",
    profitPercent: "+2,440%",
    profitPeriod: "2 years",
    tradesCount: "28,000+",
    startedWith: "$200,000",
    category: 'professional'
},
{
  name: "Mateo Silva",
      role: "Surf Instructor → Full-Time Trader",
    location: "Portugal",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "January 2024",
    rating: 5,
    quote: "Went from teaching surfing in Ericeira to trading the DAX from the beach. The app works perfectly offline — syncs when I get signal.",
    profitPercent: "+413%",
    profitPeriod: "11 months",
    tradesCount: "1,380+",
    startedWith: "$7,500",
    category: 'beginner'
},
{
  name: "Layla Al-Sayed",
      role: "Web3 Gaming Founder",
    location: "Saudi Arabia",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "November 2023",
    rating: 5,
    quote: "Raised $2M for my P2E game. Keeping treasury in stablecoins and actively trading yield with leverage here. Best risk-adjusted returns in DeFi.",
    profitPercent: "+1,670%",
    profitPeriod: "13 months",
    tradesCount: "5,900+",
    startedWith: "$120,000",
    category: 'crypto'
},
{
  name: "Victor Nguyen",
      role: "Restaurant Chain Owner",
    location: "Vietnam",
    image: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "April 2023",
    rating: 5,
    quote: "Diversified restaurant profits into forex & gold. Now the trading income pays all my chefs’ salaries. True passive wealth creation.",
    profitPercent: "+1,120%",
    profitPeriod: "20 months",
    tradesCount: "4,200+",
    startedWith: "$75,000",
    category: 'professional'
},
{
  name: "Zoe Parker",
      role: "Olympic Swimmer (retired)",
    location: "New Zealand",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "July 2024",
    rating: 5,
    quote: "Discipline from 5am training transferred perfectly to trading. Started small after retirement — account already 5x in five months.",
    profitPercent: "+505%",
    profitPeriod: "5 months",
    tradesCount: "670+",
    startedWith: "$10,000",
    category: 'beginner'
},
{
  name: "Diego Fernandez",
      role: "Latam Prop Desk Head",
    location: "Argentina",
    image: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "September 2022",
    rating: 5,
    quote: "Moved my entire book from three different brokers. Lower commissions, better liquidity, and actual negative balance protection. No brainer.",
    profitPercent: "+2,980%",
    profitPeriod: "27 months",
    tradesCount: "34,500+",
    startedWith: "$300,000",
    category: 'professional'
},
{
  name: "Hana Sato",
      role: "Altcoin Swing Trader",
    location: "Japan",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    verified: true,
    joinedDate: "February 2024",
    rating: 5,
    quote: "Trading 150+ altcoin pairs with 25x leverage. The Japanese support team and JPY deposits make everything seamless.",
    profitPercent: "+1,950%",
    profitPeriod: "10 months",
    tradesCount: "7,400+",
    startedWith: "$35,000",
    category: 'crypto'
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
