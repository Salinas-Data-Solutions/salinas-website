import React from 'react';
import Button from '~/components/ui/Button.jsx';

const AboutUs = (block ) => {
  return (
    <section className=" bg-black-custom py-20 lg:py-32">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-x-20 gap-y-12">
          <div className="grid overflow-hidden bg-blue-100 lg:col-span-3 rounded-3xl place-items-end">
            <img
              className="w-full -mb-8"
              src={block.image}
              alt=""
            />
          </div>
          <div className="lg:col-span-4 xl:pr-24">
            <div className="max-w-lg lg:max-w-none">
              <p className="text-base uppercase">{block.subTitle}</p>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:mt-8 lg:text-5xl lg:pr-8 !leading-relaxed">
                {block.title}
              </h2>
              <Button
                href={block.buttonHref}
                className="mt-10 uppercase bg-primary !text-black px-12 border-none"
              >
                {block.buttonText}
              </Button>
            </div>
            <div className="pt-8 mt-12 border-t-[1px] border-grey md:mt-16 xl:mt-24">
              <p className="leading-7 xl:pr-24">
                {block.description}
              </p>
              <p className="mt-3 font-bold">{block.author}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
