import React from "react";
import PricingCard from "./PricingCard";

const plans = [
  {
    plan: "Standard",
    price: "$100",
    features: ["50,000 Requests", "4 contributors", "Up to 3 GB storage space"],
  },
  {
    plan: "Pro",
    price: "$200",
    features: [
      "100,000 Requests",
      "7 contributors",
      "Up to 6 GB storage space",
    ],
    isFeatured: true,
  },
  {
    plan: "Expert",
    price: "$500",
    features: [
      "200,000 Requests",
      "11 contributors",
      "Up to 10 GB storage space",
    ],
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-900 flex flex-col items-center justify-center px-0 py-8 overflow-x-hidden">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-10">
        Pricing
      </h1>
      <div className="flex flex-col sm:flex-row w-full justify-center items-stretch px-0">
        {plans.map((plan, idx) => (
          <div className="flex-1" key={plan.plan}>
            <PricingCard {...plan} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
