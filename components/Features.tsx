import { FEATURES } from "@/constants";
import React from "react";

const Features = () => {
  return (
    <section key="why-choose-us" id="why-choose-us" className="flex flex-col overflow-hidden bg-transparent mb-32">
      <div className="max-container padding-container relative">
        <h1 className="text-[#5AB2FF] font-semibold text-72 bold-40 lg:bold-64 text-center">
          
          <span className="text-[#5AB2FF]"> Features</span>
        </h1>
        <p className="regular-20 mt-6 text-[#A0DEFF] max-w-[800px] text-center">
          
        </p>
      </div>
      <ul className="max-container padding-container mt-16 flex flex-wrap justify-center">
        {FEATURES.map((feature) => (
          <FeatureItem
            key={feature.title}
            title={feature.title}
           // icon={feature.icon}
            description={feature.description}
          />
        ))}
      </ul> 
    </section>
  );
};

type FeatureItem = {
  title: string;
 // icon: string;
  description: string;
};

const FeatureItem = ({ title, description }: FeatureItem) => {
  return (
    <li className="flex flex-col items-center w-64 mb-10 mx-8">
      {/* <div className="rounded-full p-4 lg:p-7 bg-green-50 mb-5">
        <img src={icon} alt="icon" width={28} height={28} />
      </div> */}
      <h2 className="bold-20 lg:bold-32 capitalize  text-center">{title}</h2>
      <p className="regular-16 text-gray-30 lg:mt-[16px] text-center">
        {description}
      </p>
    </li>
  );
};

export default Features;
