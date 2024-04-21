import React from 'react';
import Button from '~/components/ui/Button.jsx';


const Applications = (block) => {
  return (
    <section className="bg-page py-20 lg:py-32">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-grey uppercase tracking-widest">{block.subTitle}</p>
          <h2 className="mt-4 text-3xl sm:text-4xl xl:text-5xl !leading-relaxed">{block.title}</h2>
        </div>

        <ul className="grid grid-cols-1 mt-10 text-center md:mt-20 md:max-w-full sm:max-w-sm sm:mx-auto gap-y-10 md:grid-cols-3 md:gap-x-6 lg:gap-x-16 md:text-left">
          {block.items.map((item, index) => (
            <li key={index} className='grid grid-rows-[10%_15%_1fr_1fr] justify-between '>
              <h3 className="text-2xl font-bold font-sans">
                {item.title}
                <br className="hidden xl:block" />
              </h3>
              <p className="mt-4 leading-7">{item.description}</p>
              <img className="object-cover w-full h-[270px] mx-auto mt-10 rounded-xl md:mx-0" src={item.image} alt="" />
              <p className="leading-7 mt-7 text-grey">{item.extended_description}</p>
            </li>
          ))}
        </ul>

        <div className='mt-12 flex items-center gap-20 bg-black-custom py-10 px-20 rounded-2xl'>
          <div>

          <h3 className='font-bold mb-2' >{block.bottomBlockTitle}</h3>
          <p>
            {block.bottomBlockDescription}
          </p>
          </div>

          <Button href={block.buttonHref} className="min-w-fit uppercase bg-primary !text-black px-12 border-none">
            {block.buttonText}
        </Button>
        </div>
      </div>
    </section>
  );
};

export default Applications;
