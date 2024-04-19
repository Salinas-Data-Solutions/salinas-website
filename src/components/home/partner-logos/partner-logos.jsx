import React from 'react';

const PartnerLogos = ( block ) => {
  return (
    <section className="py-20 bg-black-custom">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-32">
        <h2 className="text-md font-sans uppercase">{block.heading}</h2>
        <ul className="flex flex-col justify-center sm:flex-row flex-wrap gap-24">
          {block.logos.map((logo, index) => (
            <li key={index}>
              <img className="min-w-fit h-6" src={logo.image} alt={logo.name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PartnerLogos;
