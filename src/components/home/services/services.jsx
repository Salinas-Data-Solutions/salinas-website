import React from 'react';
import Button from '~/components/ui/Button.jsx';

export default function Services(block) {
  return (
    <section className="py-20 bg-page lg:py-32 flex flex-col items-center">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-grey uppercase tracking-widest">{block.subTitle}</p>
          <h2 className="mt-6 text-3xl tracking-tight lg:mt-8 sm:text-4xl lg:text-5xl !leading-relaxed" >{block.title}</h2>
        </div>

        <ul className="grid max-w-5xl grid-cols-1 gap-5 mx-auto mt-12 sm:mt-16 md:grid-cols-2 sm:gap-6">
          {block.items.map((item, index) => (
            <li key={index} className="transition-all duration-200 border border-grey-dark rounded-2xl">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 stroke-primary shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <p className="ml-3 text-base">
                    {item.title !== "" && <span className="font-bold">{item.title}: </span>} {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
        <Button href={block.buttonHref} className="mt-10 uppercase bg-primary !text-black px-12 border-none">
          {block.buttonText}
        </Button>
    </section>
  );
}
