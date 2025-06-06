import React from "react";

export type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  return (
    <div
      tabIndex={0}
      className={`
        flex flex-col items-center justify-between
        w-full h-full
        border
        rounded-none
        outline-none
        transition duration-200
        focus-visible:ring-4 focus-visible:ring-blue-400
        hover:scale-105
        ${
          isFeatured
            ? "bg-[#42536A] text-white border-[#42536A]"
            : "bg-white text-[#42536A] border-gray-200"
        }
        cursor-pointer
        min-h-[520px]
      `}
      aria-label={`${plan} plan`}
    >
      <div className="flex flex-col items-center w-full px-8 py-16">
        <span
          className={`text-lg font-bold mb-2 mt-2 ${
            isFeatured ? "text-white" : "text-[#42536A]"
          }`}
        >
          {plan}
        </span>
        <span className="text-5xl font-extrabold mb-6">{price}</span>
        <ul className="w-full mb-8 flex-1 flex flex-col justify-center">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className={`py-3 border-b last:border-b-0 text-center font-semibold ${
                isFeatured ? "border-white" : "border-gray-200"
              }`}
              style={{ minHeight: 56 }}
            >
              {feature}
            </li>
          ))}
        </ul>
        <button
          className={`
            w-full py-3 mt-8 rounded-none font-bold tracking-wide
            transition duration-150
            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
            ${
              isFeatured ? "bg-[#42536A] text-white" : "bg-white text-[#42536A]"
            }
            shadow-none
            text-lg
            border-none
          `}
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
