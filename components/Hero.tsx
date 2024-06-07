import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-4 px-8 pb-12  md:gap-28  lg:py-20 xl:flex-row items-center xl:mt-[-130px] ">
<div className="flex-1 xl:max-w-[800px] animate-fadeInSlideUp">
        <h1 className="text-[#18063C] font-semibold text-72 ">
Belly Balance        </h1>
        <p className="regular-20 mt-6 text-gray-30 max-w-[620px]">
        Belly Balance is a new mobile app that helps you keep track of what you eat and how you feel afterward. It uses smart technology to figure out which food is causing digestive issues and then gives tips and advice to feel better.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row mt-12">
          <Button  type="button" title="Download for Android" variant="btn_primary" />
          <Button type="button" title="Download for iOS"  variant="btn_white_text" />
        </div>
      </div>
      <div className="flex justify-center xl:justify-end flex-1 animate-fadeInSlideUp">
        <div className=" xl:relative right-[-30px]">
          <Image src="/heroImage.png" alt="hero" width={700} height={724} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
