import React from 'react';

const BuildOn = ( block ) => {
  return (
    <section className="py-12 bg-page sm:py-16 lg:py-32 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <img
              className="parallax-img w-full md:hidden"
              src={block.topLogos}
              data-speed="0.27"
              alt=""
            />
            <img
              className="parallax-img hidden w-full lg:translate-y-12 md:block"
              src={block.leftLogos}
              data-speed="0.27"
              alt=""
            />
          </div>
          <div className="text-center">
            <p className="text-gray-500 uppercase">{block.subTitle}</p>
            <h2 className="mt-20 text-3xl sm:text-4xl xl:text-5xl">{block.title}</h2>
            <p className="mt-6">{block.text}</p>
          </div>
          <div>
            <img
              className="w-full md:hidden"
              src={block.bottomLogos}
              alt=""
            />
            <img
              className="parallax-img hidden w-full lg:translate-y-12 md:block"
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