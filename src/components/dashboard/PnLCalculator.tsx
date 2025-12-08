import { useState } from 'react';
import { Calculator, TrendingUp, TrendingDown } from 'lucide-react';

export default function PnLCalculator() {
  const [formData, setFormData] = useState({
    entryPrice: '',
    exitPrice: '',
    positionSize: '',
    leverage: '1',
    tradeType: 'long'
  });

  const [result, setResult] = useState<{
    profitLoss: number;
    profitLossPercentage: number;
    totalReturn: number;
  } | null>(null);

  const calculatePnL = () => {
    const entry = parseFloat(formData.entryPrice);
    const exit = parseFloat(formData.exitPrice);
    const size = parseFloat(formData.positionSize);
    const lev = parseFloat(formData.leverage);

    if (isNaN(entry) || isNaN(exit) || isNaN(size) || isNaN(lev)) {
      return;
    }

    let priceDiff = 0;
    if (formData.tradeType === 'long') {
      priceDiff = exit - entry;
    } else {
      priceDiff = entry - exit;
    }

    const profitLoss = (priceDiff / entry) * size * lev;
    const profitLossPercentage = (priceDiff / entry) * 100 * lev;
    const totalReturn = size + profitLoss;

    setResult({
      profitLoss,
      profitLossPercentage,
      totalReturn
    });
  };

  const handleReset = () => {
    setFormData({
      entryPrice: '',
      exitPrice: '',
      positionSize: '',
      leverage: '1',
      tradeType: 'long'
    });
    setResult(null);
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-white font-bold text-2xl">Profit & Loss Calculator</h2>
          <p className="text-gray-400 text-sm">Calculate your potential profit or loss before trading</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <div className="space-y-6">
          <div className="bg-slate-950/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-white font-bold text-lg mb-4">Trade Parameters</h3>

            <div className="space-y-4">
              {/* Trade Type */}
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Trade Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, tradeType: 'long' })}
                    className={`px-4 py-3 rounded-xl font-bold transition-all ${
                      formData.tradeType === 'long'
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Long (Buy)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, tradeType: 'short' })}
                    className={`px-4 py-3 rounded-xl font-bold transition-all ${
                      formData.tradeType === 'short'
                        ? 'bg-red-600 text-white'
                        : 'bg-slate-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Short (Sell)
                  </button>
                </div>
              </div>

              {/* Entry Price */}
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Entry Price ($)</label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="Enter entry price"
                  value={formData.entryPrice}
                  onChange={(e) => setFormData({ ...formData, entryPrice: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>

              {/* Exit Price */}
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Exit Price ($)</label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="Enter exit price"
                  value={formData.exitPrice}
                  onChange={(e) => setFormData({ ...formData, exitPrice: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>

              {/* Position Size */}
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Position Size ($)</label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="Enter position size"
                  value={formData.positionSize}
                  onChange={(e) => setFormData({ ...formData, positionSize: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>

              {/* Leverage */}
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Leverage: {formData.leverage}x
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  value={formData.leverage}
                  onChange={(e) => setFormData({ ...formData, leverage: e.target.value })}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1x</span>
                  <span>50x</span>
                  <span>100x</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={calculatePnL}
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all"
                >
                  Calculate
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <h4 className="text-blue-400 font-bold text-sm mb-2">Quick Tips</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Long: Profit when price goes up</li>
              <li>• Short: Profit when price goes down</li>
              <li>• Higher leverage = Higher risk & reward</li>
              <li>• Always use stop loss to manage risk</li>
            </ul>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="bg-slate-950/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-white font-bold text-lg mb-4">Calculation Results</h3>

            {result ? (
              <div className="space-y-4">
                {/* Profit/Loss Amount */}
                <div className={`p-6 rounded-xl border-2 ${
                  result.profitLoss >= 0
                    ? 'bg-green-500/10 border-green-500/50'
                    : 'bg-red-500/10 border-red-500/50'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm font-medium">Profit / Loss</span>
                    {result.profitLoss >= 0 ? (
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                  <div className={`text-4xl font-black ${
                    result.profitLoss >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {result.profitLoss >= 0 ? '+' : ''}${result.profitLoss.toFixed(2)}
                  </div>
                </div>

                {/* Percentage Return */}
                <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                  <div className="text-gray-400 text-sm font-medium mb-2">Percentage Return</div>
                  <div className={`text-3xl font-bold ${
                    result.profitLossPercentage >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {result.profitLossPercentage >= 0 ? '+' : ''}{result.profitLossPercentage.toFixed(2)}%
                  </div>
                </div>

                {/* Total Return */}
                <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                  <div className="text-gray-400 text-sm font-medium mb-2">Total Return</div>
                  <div className="text-3xl font-bold text-white">
                    ${result.totalReturn.toFixed(2)}
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700">
                  <h4 className="text-white font-bold text-sm mb-3">Trade Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Position Type:</span>
                      <span className={`font-bold ${
                        formData.tradeType === 'long' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {formData.tradeType.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Entry Price:</span>
                      <span className="text-white font-bold">${formData.entryPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Exit Price:</span>
                      <span className="text-white font-bold">${formData.exitPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Position Size:</span>
                      <span className="text-white font-bold">${formData.positionSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Leverage:</span>
                      <span className="text-white font-bold">{formData.leverage}x</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-20 text-center">
                <Calculator className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg mb-2">No Calculation Yet</p>
                <p className="text-gray-500 text-sm">
                  Enter your trade parameters and click Calculate
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
