import React from 'react';

const OurFounders = ( block ) => {
  return (
    <section className="py-12 bg-page sm:py-16 lg:py-24 xl:py-32">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-4xl">
        <div className="mx-auto text-center">
          <p className="text-sm tracking-widest uppercase">
            <span className="text-grey">{block.subTitle}</span>
          </p>
          <h2 className="mt-6 text-3xl text-white sm:text-4xl lg:text-5xl">{block.title}</h2>
        </div>

        <ul className="mx-auto mt-12 space-y-20 sm:mt-16 lg:mt-20">
          {block.founders.map((founder, index) => (
            <li key={index} className="items-center flex flex-col md:flex-row gap-10">
              <img className="object-cover rounded-full w-44 h-44 shrink-0" src={founder.image} alt="" />
              <div className="sm:ml-10">
                <div className="items-center flex flex-col md:items-start">
                  <h3 className="text-xl font-bold text-white font-sans">{founder.name}</h3>
                </div>
                <p className="mt-5">{founder.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurFounders;
