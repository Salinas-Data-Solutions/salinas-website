import React from 'react';
import Button from '~/components/ui/Button.jsx';

const BuildOn = (block) => {
  return (
    <section className="py-20 bg-page lg:py-24 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <img className="parallax-img w-full md:hidden scale-50" src={block.topLogos} data-speed="0.27" alt="" />
            <img
              className="parallax-img hidden w-full  md:block scale-75"
              src={block.leftLogos}
              data-speed="0.27"
              alt=""
            />
          </div>
          <div className="text-center">
          <p className="text-grey uppercase tracking-widest">{block.subTitle}</p>
            <h2 className="mt-20 text-3xl sm:text-4xl xl:text-5xl !leading-relaxed">{block.title}</h2>
            <p className="mt-6">{block.text}</p>
            <Button href={block.buttonHref} className="mt-10 uppercase bg-primary !text-black px-12 border-none">
              {block.buttonText}
            </Button>
          </div>
          <div>
            <img className="w-full md:hidden scale-50" src={block.bottomLogos} alt="" />
            <img
              className="parallax-img hidden w-full  md:block scale-75"
              data-speed="0.27"
              src={block.rightLogos}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildOn;
