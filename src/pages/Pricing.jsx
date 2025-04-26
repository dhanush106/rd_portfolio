import { motion } from "framer-motion";
import { Button } from "../components/Button";

const plans = [
  {
    title: "🔹 Starter Plan",
    price: "$2,000/month",
    adSpend: "$800/month (excluded)",
    leads: "5",
    cta: "Get Started with Starter Plan",
    note: "Perfect for remodelers getting started.",
    guarantee: "If we don’t generate 5 qualified leads, 50% of your service fee ($1,000) will be refunded.",
    features: [
      "📘 Safe, measurable entry into Facebook advertising",
      "🎯 Facebook Ads Campaign Setup & Management",
      "🎯 Targeted Audience for Renovation Projects",
      "📍 Geo-Based Lead Targeting",
      "⚡ Smart Optimization & Real-Time Feedback",
      "📊 Campaign Tracking Dashboard",
      "💵 100% Refund on Unused Ad Spend",
      "🚀 One-Time $99 Upgrade Fee (if changing plans)"
    ]
  },
  {
    title: "🔷 Pro Plan",
    price: "$2,000/month",
    adSpend: "$1,500/month (excluded)",
    leads: "10",
    cta: "Upgrade to Pro Plan",
    note: "For growing businesses expanding across service areas.",
    guarantee: "If we don’t generate 10 qualified leads, 50% of your service fee ($1,000) will be refunded.",
    features: [
      "📘 Built for remodelers looking to scale steadily",
      "🎯 Everything in Starter Plan",
      "📈 Increased Ad Spend = More Reach",
      "🗺️ Multi-Location Ad Strategy",
      "⚡ Advanced Conversion Optimization",
      "📅 Weekly Campaign Insights",
      "💵 100% Refund on Unused Ad Spend",
      "🚀 $99 One-Time Plan Upgrade Option"
    ]
  },
  {
    title: "🟣 Premium Plan",
    price: "$2,000/month",
    adSpend: "$3,000/month (excluded)",
    leads: "20",
    cta: "Go Premium and Dominate Your Market",
    note: "Designed for brands ready to dominate.",
    guarantee: "If we don’t generate 20 qualified leads, 50% of your service fee ($1,000) will be refunded.",
    features: [
      "📘 For contractors ready to scale big and win big",
      "🎯 Everything in Pro Plan",
      "🚀 Maximum Ad Spend for Market Domination",
      "🎯 High-Intent Audience Targeting",
      "🗺️ Broader Area Coverage",
      "⚡ Aggressive Scaling Strategy",
      "💵 100% Refund on Unused Ad Spend",
      "🚀 Upgrade Option: $99 One-Time Fee"
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">💸 PRICING PAGE</h1>
        <p className="text-lg text-gray-700">
          🏷️ Choose the Plan That Fits Your Business Goals
        </p>
        <p className="text-md text-gray-600 max-w-2xl mx-auto mt-4">
          Our performance-based pricing plans are designed to grow your brand and deliver real ROI—backed by guarantees, not guesswork.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-2xl shadow-xl p-6 border-t-8 border-blue-300 hover:border-blue-500 hover:shadow-2xl transition-all"
          >
            <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
            <p className="text-3xl font-semibold text-blue-700">{plan.price}</p>
            <p className="text-sm text-gray-500 mb-2">Ad Budget: {plan.adSpend}</p>
            <p className="mb-4 font-medium">✅ Guaranteed {plan.leads} Qualified Leads/Month</p>
            <p className="italic text-sm text-gray-600">🎯 Or 50% money back—guaranteed.</p>
            <ul className="my-4 list-disc list-inside space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-sm text-gray-700">{feature}</li>
              ))}
            </ul>
            <div className="bg-gray-100 text-sm rounded p-3 my-4 text-center">
              {plan.guarantee}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
