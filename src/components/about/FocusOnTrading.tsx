import {useNavigate} from "react-router-dom";

export default function FocusOnTrading() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register');
  };
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="max-w-5xl mx-auto relative text-center">
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
          Focus on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Trading</span>,
          <br />We Handle the Rest
        </h2>
        <p className="text-xl text-slate-400 mb-12 leading-relaxed">
          Our platform takes care of the complex infrastructure so you can concentrate on what matters most - making profitable trades.
        </p>
        <button
            onClick={handleBack}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300">
          Start Trading Now
        </button>
      </div>
    </section>
  );
}
