import { useState } from 'react';
import { Search, Filter, Gift, Plus } from 'lucide-react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import {useNavigate} from "react-router-dom";

type BonusHistory = {
  id: number;
  amount: number;
  duration?: string;
  date: string;
  status: 'completed' | 'pending' | 'active';
};

type RatioHistory = {
  id: number;
  amount: number;
  date: string;
  status: 'completed' | 'pending';
};

type RepaymentHistory = {
  id: number;
  amount: number;
  date: string;
  status: 'completed' | 'pending';
};

export default function Bonus() {
  const [bonusSearch, setBonusSearch] = useState('');
  // const [ratioSearch, setRatioSearch] = useState('');
  // const [repaymentSearch, setRepaymentSearch] = useState('');
  const navigate = useNavigate();

  const bonusBalance = 0;

  const bonusHistory: BonusHistory[] = [
    // {
    //   id: 1,
    //   amount: 100000,
    //   duration: '5 trades',
    //   date: 'AUG 12 15:50 PM',
    //   status: 'completed'
    // },
    // {
    //   id: 2,
    //   amount: 50000,
    //   duration: '3 trades',
    //   date: 'SEP 5 10:30 AM',
    //   status: 'active'
    // }
  ];

  // @ts-ignore
  const ratioHistory: RatioHistory[] = [
    // {
    //   id: 1,
    //   amount: 3000,
    //   date: 'AUG 12 17:18 PM',
    //   status: 'completed'
    // },
    // {
    //   id: 2,
    //   amount: 7000,
    //   date: 'AUG 12 17:33 PM',
    //   status: 'completed'
    // },
    // {
    //   id: 3,
    //   amount: 5000,
    //   date: 'SEP 8 14:22 PM',
    //   status: 'pending'
    // }
  ];

  // @ts-ignore
  const repaymentHistory: RepaymentHistory[] = [
    // {
    //   id: 1,
    //   amount: 100000,
    //   date: 'AUG 25 17:34 PM',
    //   status: 'completed'
    // },
    // {
    //   id: 2,
    //   amount: 50000,
    //   date: 'SEP 15 12:45 PM',
    //   status: 'pending'
    // }
  ];

  const filteredBonusHistory = bonusHistory.filter(item =>
    item.amount.toString().includes(bonusSearch) ||
    item.duration?.toLowerCase().includes(bonusSearch.toLowerCase())
  );

  // const filteredRatioHistory = ratioHistory.filter(item =>
  //   item.amount.toString().includes(ratioSearch)
  // );
  //
  // const filteredRepaymentHistory = repaymentHistory.filter(item =>
  //   item.amount.toString().includes(repaymentSearch)
  // );

  const handleBack = () => {
    navigate('/dashboard/fund-wallet');
  };


  return (
    <DashboardLayout>
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white font-black text-3xl mb-2">Bonus Management</h1>
            <p className="text-gray-400">Track your bonuses, ratios, and repayments</p>
          </div>
        </div>

        {/* Bonus Balance Card */}
        <div className="bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-yellow-500/10 border border-orange-500/30 rounded-2xl p-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-orange-400 text-sm font-medium">Bonus Balance</p>
                  <p className="text-white text-4xl font-black">$ {bonusBalance.toLocaleString()}</p>
                </div>
              </div>
              <p className="text-orange-400/70 text-sm mt-2">Available bonus funds for trading</p>
            </div>
            <button
                onClick={handleBack}
                className="px-6 py-3 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/50 text-orange-400 rounded-xl font-bold transition-all flex items-center gap-2">
              <Plus size={18} />
              Fund Wallet
            </button>
          </div>
        </div>

        {/* My Bonus History */}
        <div className="space-y-4">
          <h2 className="text-white font-black text-2xl">My Bonus history</h2>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
            {/* Search Bar */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search bonus..."
                  value={bonusSearch}
                  onChange={(e) => setBonusSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 bg-slate-900/50 border border-slate-800 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <button className="px-5 py-2.5 bg-slate-900/50 border border-slate-800 hover:bg-slate-800 text-white rounded-xl font-bold transition-all flex items-center gap-2">
                <Filter size={16} />
                Filter
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/30">
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {filteredBonusHistory.length > 0 ? (
                    filteredBonusHistory.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-900/30 transition-colors">
                        <td className="px-6 py-4 text-white font-bold text-sm">
                          $ {item.amount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-gray-400 text-sm">{item.duration}</td>
                        <td className="px-6 py-4 text-gray-400 text-sm">{item.date}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-4 py-1.5 rounded-lg font-bold text-xs uppercase inline-block ${
                              item.status === 'completed'
                                ? 'bg-green-500 text-white'
                                : item.status === 'active'
                                ? 'bg-blue-500 text-white'
                                : 'bg-orange-500 text-white'
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center">
                        <Search className="w-10 h-10 text-gray-600 mx-auto mb-2" />
                        <p className="text-gray-400">No bonus history found</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900/30">
              <button className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all">
                Previous
              </button>
              <span className="text-gray-400 font-medium">Page 1 of 1</span>
              <button className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Ratio History */}
        {/*<div className="space-y-4">*/}
        {/*  <div>*/}
        {/*    <h2 className="text-white font-black text-2xl mb-1">Ratio history</h2>*/}
        {/*    <p className="text-red-500 text-sm italic">*/}
        {/*      Note: The funds will automatically be returned to you once the bonus trades are completed*/}
        {/*    </p>*/}
        {/*  </div>*/}

        {/*  <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">*/}
        {/*    /!* Search Bar *!/*/}
        {/*    <div className="p-4 border-b border-slate-800 flex items-center justify-between gap-4">*/}
        {/*      <div className="relative flex-1 max-w-md">*/}
        {/*        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />*/}
        {/*        <input*/}
        {/*          type="text"*/}
        {/*          placeholder="Search bonus..."*/}
        {/*          value={ratioSearch}*/}
        {/*          onChange={(e) => setRatioSearch(e.target.value)}*/}
        {/*          className="w-full pl-11 pr-4 py-2.5 bg-slate-900/50 border border-slate-800 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-all"*/}
        {/*        />*/}
        {/*      </div>*/}
        {/*      <button className="px-5 py-2.5 bg-slate-900/50 border border-slate-800 hover:bg-slate-800 text-white rounded-xl font-bold transition-all flex items-center gap-2">*/}
        {/*        <Filter size={16} />*/}
        {/*        Filter*/}
        {/*      </button>*/}
        {/*    </div>*/}

        {/*    /!* Table *!/*/}
        {/*    <div className="overflow-x-auto">*/}
        {/*      <table className="w-full">*/}
        {/*        <thead>*/}
        {/*          <tr className="border-b border-slate-800 bg-slate-900/30">*/}
        {/*            <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">*/}
        {/*              Amount*/}
        {/*            </th>*/}
        {/*            <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">*/}
        {/*              Date*/}
        {/*            </th>*/}
        {/*            <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">*/}
        {/*              Status*/}
        {/*            </th>*/}
        {/*          </tr>*/}
        {/*        </thead>*/}
        {/*        <tbody className="divide-y divide-slate-800">*/}
        {/*          {filteredRatioHistory.length > 0 ? (*/}
        {/*            filteredRatioHistory.map((item) => (*/}
        {/*              <tr key={item.id} className="hover:bg-slate-900/30 transition-colors">*/}
        {/*                <td className="px-6 py-4 text-white font-bold text-sm">*/}
        {/*                  $ {item.amount.toLocaleString()}*/}
        {/*                </td>*/}
        {/*                <td className="px-6 py-4 text-gray-400 text-sm">{item.date}</td>*/}
        {/*                <td className="px-6 py-4">*/}
        {/*                  <span*/}
        {/*                    className={`px-4 py-1.5 rounded-lg font-bold text-xs uppercase inline-block ${*/}
        {/*                      item.status === 'completed'*/}
        {/*                        ? 'bg-green-500 text-white'*/}
        {/*                        : 'bg-orange-500 text-white'*/}
        {/*                    }`}*/}
        {/*                  >*/}
        {/*                    {item.status}*/}
        {/*                  </span>*/}
        {/*                </td>*/}
        {/*              </tr>*/}
        {/*            ))*/}
        {/*          ) : (*/}
        {/*            <tr>*/}
        {/*              <td colSpan={3} className="px-6 py-12 text-center">*/}
        {/*                <Search className="w-10 h-10 text-gray-600 mx-auto mb-2" />*/}
        {/*                <p className="text-gray-400">No ratio history found</p>*/}
        {/*              </td>*/}
        {/*            </tr>*/}
        {/*          )}*/}
        {/*        </tbody>*/}
        {/*      </table>*/}
        {/*    </div>*/}

        {/*    /!* Pagination *!/*/}
        {/*    <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900/30">*/}
        {/*      <button className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all">*/}
        {/*        Previous*/}
        {/*      </button>*/}
        {/*      <span className="text-gray-400 font-medium">Page 1 of 1</span>*/}
        {/*      <button className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all">*/}
        {/*        Next*/}
        {/*      </button>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/* Repayment History */}
        {/*<div className="space-y-4">*/}
        {/*  <h2 className="text-white font-black text-2xl">Repayment history</h2>*/}

        {/*  <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">*/}
        {/*    /!* Search Bar *!/*/}
        {/*    <div className="p-4 border-b border-slate-800 flex items-center justify-between gap-4">*/}
        {/*      <div className="relative flex-1 max-w-md">*/}
        {/*        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />*/}
        {/*        <input*/}
        {/*          type="text"*/}
        {/*          placeholder="Search bonus..."*/}
        {/*          value={repaymentSearch}*/}
        {/*          onChange={(e) => setRepaymentSearch(e.target.value)}*/}
        {/*          className="w-full pl-11 pr-4 py-2.5 bg-slate-900/50 border border-slate-800 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-all"*/}
        {/*        />*/}
        {/*      </div>*/}
        {/*      <button className="px-5 py-2.5 bg-slate-900/50 border border-slate-800 hover:bg-slate-800 text-white rounded-xl font-bold transition-all flex items-center gap-2">*/}
        {/*        <Filter size={16} />*/}
        {/*        Filter*/}
        {/*      </button>*/}
        {/*    </div>*/}

        {/*    /!* Table *!/*/}
        {/*    <div className="overflow-x-auto">*/}
        {/*      <table className="w-full">*/}
        {/*        <thead>*/}
        {/*          <tr className="border-b border-slate-800 bg-slate-900/30">*/}
        {/*            <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">*/}
        {/*              Amount*/}
        {/*            </th>*/}
        {/*            <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">*/}
        {/*              Date*/}
        {/*            </th>*/}
        {/*            <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">*/}
        {/*              Status*/}
        {/*            </th>*/}
        {/*          </tr>*/}
        {/*        </thead>*/}
        {/*        <tbody className="divide-y divide-slate-800">*/}
        {/*          {filteredRepaymentHistory.length > 0 ? (*/}
        {/*            filteredRepaymentHistory.map((item) => (*/}
        {/*              <tr key={item.id} className="hover:bg-slate-900/30 transition-colors">*/}
        {/*                <td className="px-6 py-4 text-white font-bold text-sm">*/}
        {/*                  $ {item.amount.toLocaleString()}*/}
        {/*                </td>*/}
        {/*                <td className="px-6 py-4 text-gray-400 text-sm">{item.date}</td>*/}
        {/*                <td className="px-6 py-4">*/}
        {/*                  <span*/}
        {/*                    className={`px-4 py-1.5 rounded-lg font-bold text-xs uppercase inline-block ${*/}
        {/*                      item.status === 'completed'*/}
        {/*                        ? 'bg-green-500 text-white'*/}
        {/*                        : 'bg-orange-500 text-white'*/}
        {/*                    }`}*/}
        {/*                  >*/}
        {/*                    {item.status}*/}
        {/*                  </span>*/}
        {/*                </td>*/}
        {/*              </tr>*/}
        {/*            ))*/}
        {/*          ) : (*/}
        {/*            <tr>*/}
        {/*              <td colSpan={3} className="px-6 py-12 text-center">*/}
        {/*                <Search className="w-10 h-10 text-gray-600 mx-auto mb-2" />*/}
        {/*                <p className="text-gray-400">No repayment history found</p>*/}
        {/*              </td>*/}
        {/*            </tr>*/}
        {/*          )}*/}
        {/*        </tbody>*/}
        {/*      </table>*/}
        {/*    </div>*/}

        {/*    /!* Pagination *!/*/}
        {/*    <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900/30">*/}
        {/*      <button className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all">*/}
        {/*        Previous*/}
        {/*      </button>*/}
        {/*      <span className="text-gray-400 font-medium">Page 1 of 1</span>*/}
        {/*      <button className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all">*/}
        {/*        Next*/}
        {/*      </button>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </DashboardLayout>
  );
}
