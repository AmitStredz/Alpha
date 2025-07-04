import React, { useState } from "react";
import { ChevronDown, ChevronUp, TrendingUp, Shield, DollarSign, BarChart3, Play, Coins } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What pairs does the bot trade?",
    icon: <Coins className="w-5 h-5" />,
    answer: (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 font-medium">Exclusively:</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="font-medium">USDT/BTC</span>
            </div>
            <p className="text-sm text-slate-400 mt-1">Bitcoin</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="font-medium">USDT/BNB</span>
            </div>
            <p className="text-sm text-slate-400 mt-1">Binance Coin</p>
          </div>
        </div>
        <div className="bg-slate-800/30 rounded-lg p-3 border-l-4 border-slate-600">
          <p className="text-sm text-slate-300">No other pairs or exchanges supported.</p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    question: "How does DCA work in volatile markets?",
    icon: <TrendingUp className="w-5 h-5" />,
    answer: (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-4 border border-blue-800/30">
          <h4 className="font-semibold text-blue-300 mb-3 flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Dynamic Interval Adjustment
          </h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-slate-800/50 rounded">
              <span className="text-sm">Normal volatility</span>
              <span className="text-emerald-400 font-medium">Every 4 hours</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-slate-800/50 rounded">
              <span className="text-sm">High volatility (≥5% swing)</span>
              <span className="text-orange-400 font-medium">Hourly buys</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-slate-800/50 rounded">
              <span className="text-sm">Crash events (&lt;15% drop)</span>
              <span className="text-red-400 font-medium">3x budget</span>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg p-4 border border-green-800/30">
          <h4 className="font-semibold text-green-300 mb-2">Bear Market Logic</h4>
          <p className="text-sm text-slate-300">Accumulates more BTC/BNB at lower prices for better cost averaging</p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    question: "What's the minimum investment?",
    icon: <DollarSign className="w-5 h-5" />,
    answer: (
      <div className="space-y-4">
        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Minimum per pair</span>
            <span className="text-2xl font-bold text-emerald-400">$100</span>
          </div>
          <p className="text-sm text-slate-400 mt-1">USDT equivalent</p>
        </div>
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-lg p-4 border border-emerald-800/30">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="font-medium text-emerald-300">Recommended</span>
          </div>
          <p className="text-slate-300">$500+ per pair for optimal DCA effectiveness</p>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    question: "Subscription cost?",
    icon: <DollarSign className="w-5 h-5" />,
    answer: (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-4 border border-purple-800/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-medium">Annual Subscription</span>
            <span className="text-2xl font-bold text-purple-300">₹18,500</span>
          </div>
          <p className="text-xs text-slate-400 bg-slate-800/50 p-2 rounded">
            * Subscription charges will increase by 12% every year
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
            <div className="flex items-center gap-2 mb-1">
              <Coins className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium">Trading Strategies</span>
            </div>
            <p className="text-xs text-slate-400">Both BTC & BNB DCA</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
            <div className="flex items-center gap-2 mb-1">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium">Real-time Alerts</span>
            </div>
            <p className="text-xs text-slate-400">Telegram notifications</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
            <div className="flex items-center gap-2 mb-1">
              <BarChart3 className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">Portfolio Rebalancing</span>
            </div>
            <p className="text-xs text-slate-400">Weekly optimization</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Tax Reports</span>
            </div>
            <p className="text-xs text-slate-400">Optimized for taxes</p>
          </div>
        </div>
      </div>
    ),
  },    
  {     
    id: 5,
    question: "Security with Binance?",
    icon: <Shield className="w-5 h-5" />,
    answer: (
      <div className="space-y-3">
        <div className="grid gap-3">
          <div className="bg-green-900/20 rounded-lg p-4 border border-green-800/30">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="font-medium text-green-300">Restricted API Keys</span>
            </div>
            <p className="text-sm text-slate-300">Only "Spot Trading" permission enabled</p>
          </div>
          <div className="bg-red-900/20 rounded-lg p-4 border border-red-800/30">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-red-400" />
              <span className="font-medium text-red-300">No Withdrawal Rights</span>
            </div>
            <p className="text-sm text-slate-300">Your funds remain secure in your Binance account</p>
          </div>
          <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-800/30">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="font-medium text-blue-300">IP Locking</span>
            </div>
            <p className="text-sm text-slate-300">Servers are whitelisted on Binance for added security</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    question: "Historical performance?",
    icon: <BarChart3 className="w-5 h-5" />,
    answer: (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg p-4 border border-indigo-800/30">
          <h4 className="font-semibold text-indigo-300 mb-3">Jan-Aug 2024 Backtest (USDT/BTC)</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-green-900/20 rounded-lg border border-green-800/30">
              <div>
                <span className="font-medium text-green-300">Bull Market</span>
                <p className="text-xs text-slate-400">Jan-Mar 2024</p>
              </div>
              <span className="text-2xl font-bold text-green-400">+63%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-900/20 rounded-lg border border-orange-800/30">
              <div>
                <span className="font-medium text-orange-300">Bear Market</span>
                <p className="text-xs text-slate-400">Apr-Jun 2024</p>
              </div>
              <span className="text-2xl font-bold text-orange-400">+22%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-900/20 rounded-lg border border-blue-800/30">
              <div>
                <span className="font-medium text-blue-300">Recovery</span>
                <p className="text-xs text-slate-400">Jul-Aug 2024</p>
              </div>
              <span className="text-2xl font-bold text-blue-400">+41%</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    question: "How to start?",
    icon: <Play className="w-5 h-5" />,
    answer: (
      <div className="space-y-3">
        <div className="space-y-3">
          {[
            { step: 1, title: "Sign up for BINANCE account", desc: "Create your Binance trading account" },
            { step: 2, title: "Connect Binance API", desc: "Follow our setup guide for API integration" },
            { step: 3, title: "Set DCA budget", desc: "Allocate funds for BTC/BNB strategies" },
            { step: 4, title: "Activate & Monitor", desc: "Start the bot and track via dashboard" }
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {item.step}
              </div>
              <div>
                <h4 className="font-medium text-slate-200">{item.title}</h4>
                <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function FaqPage() {
  const [expandedItems, setExpandedItems] = useState(new Set([1]));

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="min-h-screen  text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-green-500">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need to know about our DCA trading bot
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-300"
              >
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                      {item.icon}
                    </div>
                    <span className="text-lg sm:text-xl font-semibold text-slate-200">
                      {item.question}
                    </span>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {expandedItems.has(item.id) ? (
                      <ChevronUp className="w-6 h-6 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-400" />
                    )}
                  </div>
                </button>
                
                {expandedItems.has(item.id) && (
                  <div className="px-6 pb-6">
                    <div className="pl-16 text-slate-300">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Risk Disclaimer */}
      <div className="backdrop-blur-sm mb-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-lg p-6 border border-red-800/30">
              <h3 className="text-lg font-semibold text-red-300 mb-3">⚠️ Risk Disclaimer</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                DCA reduces but doesn't eliminate risk. Crypto investments are volatile. Past performance does not determine the future. Not SEBI-regulated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}