import React from 'react';
import Button from '~/components/ui/Button.jsx';

const OurFounders = (block) => {
  return (
    <section className="py-20 bg-black-custom lg:py-32">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-4xl">
        <div className="mx-auto text-center">
          <p className="text-grey uppercase tracking-widest">
            {block.subTitle}
          </p>
          <h2 className="mt-6 text-3xl text-white sm:text-4xl lg:text-5xl">{block.title}</h2>
        </div>

        <ul className="mx-auto mt-12 space-y-20 sm:mt-16 lg:mt-20">
          {block.founders.map((founder, index) => (
            <li key={index} className="items-center flex flex-col md:flex-row gap-10">
              <img className="object-cover rounded-full w-44 h-44 shrink-0" src={founder.image} alt="" />
              <div className="sm:ml-10 flex flex-col items-center md:items-start">
                <div className="items-center flex flex-col md:items-start">
                  <h3 className="text-xl font-bold text-white font-sans">{founder.name}</h3>
                </div>
                <p className="mt-5">{founder.description}</p>
                <Button href={block.buttonHref} className="mt-10 uppercase bg-primary !text-black px-12 border-none">
                  {block.buttonText}
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurFounders;
