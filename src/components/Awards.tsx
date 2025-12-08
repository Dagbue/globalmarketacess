import { Award, Star, Trophy } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const awards = [
  {
    icon: Award,
    title: 'Award-Winning Platform',
    description: 'Winner of Finder\'s 2023 Award for Share Trading – US Stocks',
    year: '2023',
  },
  {
    icon: Star,
    title: 'BrokerChooser Award 2024',
    description: 'Recognized as the Best Stock Trading App',
    year: '2024',
  },
  {
    icon: Trophy,
    title: 'Forbes Advisor Best of 2024',
    description: 'Best Trading Platform for Day Trading',
    year: '2024',
  },
];

export default function Awards() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black  text-gray-900 mb-6 block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Invest with the Best
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful traders who trust our award-winning platform. Recognized by leading financial institutions and industry experts for excellence in technology, user experience, and market execution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-10 border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/20">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                  {award.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-center mb-4">
                  {award.description}
                </p>

                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
                    {award.year}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
              onClick={handleBack}
              className="px-16 py-4 bg-gray-900 text-white rounded-xl hover:bg-blue-600 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-600/20">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
}
