import React from 'react';

const Applications = (block) => {
  return (
    <section className="py-12 bg-page sm:py-16 lg:py-32">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase text-grey">{block.subTitle}</p>
          <h2 className="mt-4 text-3xl sm:text-4xl xl:text-5xl">{block.title}</h2>
        </div>

        <ul className="grid grid-cols-1 mt-10 text-center md:mt-20 md:max-w-full sm:max-w-sm sm:mx-auto gap-y-10 md:grid-cols-3 md:gap-x-6 lg:gap-x-16 md:text-left">
          {block.items.map((item, index) => (
            <li key={index}>
              <h3 className="text-2xl font-bold font-sans">
                {item.title}
                <br className="hidden xl:block" />
              </h3>
              <p className="mt-4 leading-7">{item.description}</p>
              <img className="object-cover w-full mx-auto mt-10 rounded-xl md:mx-0" src={item.image} alt="" />
              <p className="leading-7 mt-7 text-grey">{item.extended_description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Applications;
