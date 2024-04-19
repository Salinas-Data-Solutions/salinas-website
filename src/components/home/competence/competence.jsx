import React from "react";

export default function CompetenceSection( block ) {
  return (
    <section className="py-12 bg-black-custom sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-8 lg:gap-x-16 xl:gap-x-24 gap-y-12">
          <div className="flex flex-col justify-between lg:col-span-5 xl:pr-24">
            <div className="max-w-lg lg:max-w-none">
              <p className="text-base font-semibold text-grey uppercase">{block.subTitle}</p>
              <h2 className="mt-6 text-3xl text-white lg:mt-8 sm:text-4xl lg:text-5xl">{block.title}</h2>
            </div>
          </div>

          <div className="lg:col-span-3">
            <img
              className="w-full"
              src="https://landingfoliocom.imgix.net/store/collection/saasui/images/features/8/feature-8.png"
              alt=""
            />
          </div>
        </div>

        <ul className="flex gap-10 flex-wrap lg:flex-nowrap mt-24">
          {block.items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg
                className="w-6 h-6 text-primary shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-3 text-white">
                <span className="font-bold">{item.title}:</span> {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
