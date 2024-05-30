import React from 'react';
import Button from '~/components/ui/Button.jsx';


const ContactUs = ( block ) => {
  return (
    <section id="contact" className="relative bg-black-custom">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-grey uppercase mb-10 tracking-widest">{block.subTitle}</p> */}
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">{block.title}</h1>
        </div>
        <form method="post" className="max-w-4xl mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm px-2">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-black-custom bg-opacity-50 rounded border border-neutral-700 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm px-2">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-black-custom bg-opacity-50 rounded border border-neutral-700 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm px-2">Message</label>
                <textarea id="message" name="message" className="w-full bg-black-custom bg-opacity-50 rounded border border-neutral-700 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full flex justify-center">
              <Button type="submit" variant="primary" className="mt-10 uppercase bg-primary !text-black px-12 border-none">{block.buttonText}</Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
