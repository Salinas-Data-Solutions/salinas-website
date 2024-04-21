import React from 'react';
import Button from '~/components/ui/Button.jsx';

const ApplicationDescription = ( block ) => {
  return (
    <section className="py-20 text-white bg-black-custom lg:py-32 flex flex-col items-center">
      <div className="max-w-lg lg:max-w-none flex items-center flex-col">
        <p className="text-grey uppercase tracking-widest">{block.subTitle}</p>
        <h2 className="text-center mt-6 text-3xl text-white lg:mt-8 sm:text-4xl lg:text-5xl">{block.title}</h2>
      </div>
      <ul className="container px-5 pt-24 mx-auto flex flex-wrap">
        {block.items.map((item, index) => (
          <li key={index} className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-[0.2px] bg-gray-200 pointer-events-none"></div>
            </div>
            <div
              className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10 title-font font-medium text-sm"
            ></div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-page text-white rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  {/* Icon here can dynamically change */}
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font mb-1 text-xl">{item.title}</h2>
                <p className="leading-relaxed">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Button href={block.buttonHref} className="mt-10 uppercase bg-primary !text-black px-12 border-none">
        {block.buttonText}
      </Button>
  </section>
  );
};

export default ApplicationDescription;
