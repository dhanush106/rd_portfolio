import { motion } from "framer-motion";
import { Button } from "../components/Button";

const plans = [
  {
    title: "🔹 Starter Plan",
    price: "$999/month",
    adSpend: "$199/month",
    leads: "25–30",
    cta: "Get Started with Starter Plan",
    note: "Not sure if this is the right fit?",
    guarantee: "If we don’t deliver at least 25 qualified leads, you’ll get a full refund.",
    features: [
      "📊 Social Media Audit & Strategy Review",
      "📱 Social Media Management (Posts, Captions, Scheduling)",
      "🎯 Facebook / Instagram / Google Ad Campaign Setup",
      "💸 Ad Spend: $199/month managed by our experts",
      "🌍 Widespread Reach & Local Targeting",
      "📈 Boosted Brand Visibility & Engagement",
      "🔁 Real-Time Feedback from Audience",
      "🗣️ Vernacular/Localized Content for Better Market Penetration",
      "🔥 Content with Viral Potential"
    ]
  },
  {
    title: "🔷 Pro Plan",
    price: "$1,699/month",
    adSpend: "$399/month",
    leads: "55–60",
    cta: "Upgrade to Pro Plan",
    note: "Let’s scale your business.",
    guarantee: "If we don’t deliver at least 55 qualified leads, you’ll get a full refund.",
    features: [
      "📊 Social Media Audit & Strategy Review",
      "📱 Social Media Management (Posts, Captions, Scheduling)",
      "🎯 Facebook / Instagram / Google Ad Campaign Setup",
      "💸 Ad Spend: $399/month managed by our experts",
      "🌍 Widespread Reach & Local Targeting",
      "📈 Boosted Brand Visibility & Engagement",
      "🔁 Real-Time Feedback from Audience",
      "🗣️ Vernacular/Localized Content for Better Market Penetration",
      "🔥 Content with Viral Potential"
    ]
  },
  {
    title: "🟣 Premium Plan",
    price: "$2,499/month",
    adSpend: "$699/month",
    leads: "95–100",
    cta: "Go Premium and Maximize Your Growth",
    note: "Need help choosing a plan?",
    guarantee: "If we don’t deliver at least 95 qualified leads, you’ll receive a full refund.",
    features: [
      "📊 Social Media Audit & Strategy Review",
      "📱 Social Media Management (Posts, Captions, Scheduling)",
      "🎯 Facebook / Instagram / Google Ad Campaign Setup",
      "💸 Ad Spend: $699/month managed by our experts",
      "🌍 Widespread Reach & Local/Regional/National Targeting",
      "📈 Advanced Brand Visibility & Engagement",
      "🔁 Real-Time Feedback from Audience",
      "🗣️ Vernacular/Localized Content for Better Market Penetration",
      "🔥 High-Impact, Viral Content Strategy"
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
            <p className="text-sm text-gray-500 mb-2">Ad Spend Included: {plan.adSpend}</p>
            <p className="mb-4 font-medium">✅ Guaranteed {plan.leads} Qualified Leads/Month</p>
            <p className="italic text-sm text-gray-600">🎯 Or your money back—guaranteed.</p>
            <ul className="my-4 list-disc list-inside space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-sm text-gray-700">{feature}</li>
              ))}
            </ul>
            <div className="bg-gray-100 text-sm rounded p-3 my-4 text-center">
              {plan.guarantee}
            </div>
            <Button className="w-full text-white bg-blue-600 hover:bg-blue-700">
              {plan.cta}
            </Button>
            <p className="mt-2 text-center text-sm text-blue-500 underline cursor-pointer">
              📞 {plan.note} Book a Free Strategy Call
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}