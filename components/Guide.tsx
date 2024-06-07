import React from "react";

export const HOWITWORKS = [
  {
    title: "Track Your Food Intake",
    description:
      "Start by logging everything you eat throughout the day using our user-friendly interface. Simply input your meals, snacks, and beverages to create a comprehensive food diary.",
  },
  {
    title: "Monitor Digestive Responses",
    description:
      "After consuming a meal, record how you feel using our intuitive rating system. Note any symptoms such as bloating, discomfort, or irregular bowel movements.",
  },
  {
    title: "Smart Analysis",
    description:
      "Our advanced technology analyzes your dietary intake and correlates it with your reported digestive responses. By leveraging smart algorithms, Belly Balance identifies potential triggers for your digestive issues.",
  },
  {
    title: "Real-Time Alerts",
    description:
      "Stay informed with real-time alerts for potential food-related symptoms. Our app notifies you when patterns emerge, empowering you to make informed choices and proactively manage your digestive health.",
  },
  {
    title: "Customized Meal Plans",
    description:
      "Access customized meal plans crafted by nutrition experts to support your digestive wellness journey. From balanced recipes to targeted dietary modifications, our meal plans are designed to optimize your gut health and enhance your overall well-being.",
  },
  {
    title: "Track Progress and Adjust",
    description:
      "Track your progress over time and make adjustments as needed. With Belly Balance, you're equipped with the tools and insights to continually refine your dietary choices and optimize your digestive wellness.",
  },
];

const Guide = () => {
  return (
    <section key="how-it-works" id="how-it-works" className="flexCenter flex-col bg-CAF4FF mb-32">
      <h1 className="text-[#18063C] font-semibold text-4xl lg:text-6xl mb-4 mt-8">
        How it works
      </h1>
      <div className="max-container flex flex-wrap items-center justify-center py-16">
        {/* Left side (text content) */}
        <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 lg:mr-8">
          <ul>
            {HOWITWORKS.map((item, index) => (
              <li key={index}>
                <h2 className="bold-24 lg:bold-32 capitalize text-start">
                  {item.title}
                </h2>
                <p className="regular-16 text-gray-30 mb-16 mt-8 text-start">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side (image)
        <div className="w-full lg:w-1/4 lg:ml-40">
          <img
            src="/mobileYoutube.png"
            alt="Mobile Screen"
            className="w-full"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Guide;
