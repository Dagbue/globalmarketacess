import { TrendingUp, TrendingDown } from 'lucide-react';

const cryptoData = [
  { symbol: 'DEXE', price: '$1.00102', change: '+0.1%', positive: true },
  { symbol: 'SURE', price: '$2.88685', change: '-4.8%', positive: false },
  { symbol: 'OPUL', price: '$1287.73', change: '+5.6%', positive: true },
  { symbol: 'TRAC', price: '$4504.39', change: '-3.6%', positive: false },
  { symbol: 'SNSY', price: '$121793', change: '-2.6%', positive: false },
  { symbol: 'KWENTA', price: '$0.83211', change: '-5.0%', positive: false },
  { symbol: 'ZEC', price: '$0.25040', change: '-6.4%', positive: false },
  { symbol: 'BGSC', price: '$1.00013', change: '-0.1%', positive: false },
];

export default function MarketTicker() {
  const tripleData = [...cryptoData, ...cryptoData, ...cryptoData];

  return (
    <div className="relative bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 py-5 overflow-hidden border-y border-slate-800">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative flex animate-scroll">
        {tripleData.map((crypto, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 px-8 flex-shrink-0 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-sm">
                {crypto.symbol.substring(0, 1)}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-white font-bold text-sm tracking-wide">{crypto.symbol}</span>
              <span className="text-slate-300 text-sm font-medium">{crypto.price}</span>
              <div className="flex items-center space-x-1">
                {crypto.positive ? (
                  <TrendingUp className="w-4 h-4 text-green-400" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-400" />
                )}
                <span className={`text-sm font-bold ${crypto.positive ? 'text-green-400' : 'text-red-400'}`}>
                  {crypto.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
