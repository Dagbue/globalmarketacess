import {useNavigate} from "react-router-dom";

export default function FocusOnTrading() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[120px] animate-pulse animate-glow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      <div className="max-w-5xl mx-auto relative text-center">
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
          Focus on{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 animate-glow">
            Trading
          </span>,
          <br />We Handle the Rest
        </h2>
        <p className="text-xl text-slate-300 mb-12 leading-relaxed">
          Our powerful platform manages all the complex infrastructure, security, and technical details, allowing you to concentrate entirely on what matters most - executing winning trades and growing your portfolio.
        </p>
        <button
            onClick={handleBack}
            className="px-10 py-4 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-600 text-white rounded-xl font-bold text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all duration-300 animate-glow">
          Start Trading Now
        </button>
      </div>
    </section>
  );
}
