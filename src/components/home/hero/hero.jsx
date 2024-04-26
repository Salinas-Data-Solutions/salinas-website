
import React from 'react';
import Button from "~/components/ui/Button.jsx";

const HeroSection = ( block ) => {
  return (
    <section className="relative sm:py-16 flex justify-center items-center">
      <div className="absolute inset-0 overflow-hidden -z-10 opacity-50 flex justify-center items-center">
        <img
          className="object-cover bg-center h-full w-full lg:h-auto lg:w-auto max-w-none origin-bottom-right"
          src={block.background_image}
          alt=""
        />
      </div>
      <div
        className="z-90 container mx-auto grid grid-cols-1 lg:items-center lg:grid-cols-2 xl:grid-cols-[60%_1fr] gap-24 py-20 lg:py-32 px-10 md:px-0"
      >
        <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0">
          <p className="text-grey uppercase tracking-widest">{block.subTitle}</p>

          <h1 className="mt-10 text-4xl leading-relaxed sm:text-5xl  lg:text-5xl "  data-i18n="hero_title">
            {block.title}
          </h1>
          <p className="mt-2 text-lg sm:mt-6 font-inter">
            {block.description}
          </p>
          <Button href={block.buttonHref} className="mt-10 uppercase bg-primary !text-black px-12 border-none">
            {block.buttonText}
          </Button>
          <Button href={block.secondButtonHref} className="mt-10 md:ml-6 uppercase btn px-12">
          {block.secondButtonText}
        </Button>
        </div>
        <div className="xl:col-span-1 justify-self-center lg:justify-self-end">
          <img
            className="w-full h-auto origin-bottom-right transform lg:w-auto lg:object-cover"
            src={block.image}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
