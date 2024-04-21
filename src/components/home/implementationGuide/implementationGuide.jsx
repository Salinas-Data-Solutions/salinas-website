import React from 'react';
import Button from '~/components/ui/Button.jsx';

const PromotionalSection = ( block ) => {
  return (
    <section className=" bg-black-custom pb-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-8 py-10 overflow-hidden lg:px-24 md:py-20 bg-page rounded-3xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl  sm:text-4xl xl:text-5xl !leading-relaxed">{block.title}</h2>
            <p className='text-grey mt-10 max-w-2xl mx-auto'>{block.description}</p>
          </div>

          <ul className="flex flex-col items-center justify-center mt-8 space-y-5 sm:mt-12 lg:mt-16 md:flex-row md:space-y-0 md:space-x-12">
            {block.features.map((feature, index) => (
              <li key={index} className="flex items-center ">
                <svg className="w-10 h-10 text-primary " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="ml-3 text-lg  ">{feature.title}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center sm:mt-12">
            <div className="relative inline-flex group">
              <Button
                href={block.buttonHref}
                className="btn-primary uppercase !text-black"
                role="button"
              >
                {block.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;
