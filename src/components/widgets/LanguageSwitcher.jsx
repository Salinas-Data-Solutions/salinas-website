import React, { useState } from 'react';

const LanguageSwitcher = ({ currentLocale, redirect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(currentLocale === 'en' ? '/us-flag.webp' : '/de-flag.webp');

  const languages = [
    { code: 'en', flag: '/us-flag.webp', alt: 'English' },
    { code: 'de', flag: '/de-flag.webp', alt: 'Deutsch' }
  ];

  function switchLanguage(lang, flag) {
    setSelectedFlag(flag);
    setIsOpen(false);
    window.location.pathname = '/' + lang + '/';
    redirect('/' + lang + '/');
  }

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="w-12 h-12 bg-no-repeat bg-center bg-contain cursor-pointer" style={{ backgroundImage: `url(${selectedFlag})` }}>
      </button>
      {isOpen && (
        <div className="absolute w-12">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code, lang.flag)}
              className="w-12 h-6 bg-no-repeat bg-center bg-cover cursor-pointer"
              style={{ backgroundImage: `url(${lang.flag})` }}
              aria-label={lang.alt}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;



// import React from 'react';

// const LanguageSwitcher = (props) => {
//     // console.log(props)
//     const { currentLocale, redirect } = props;
//   function switchLanguage(lang) {
//     // console.log('test')
//     // // Assuming you want to navigate to the root of the selected language:
//     window.location.pathname = '/' + lang + '/';


//     // redirect('/' + lang + '/');
//   }

//   return (
//     <select
//       className="md:block bg-transparent border-none appearance-none w-12 h-12 bg-no-repeat bg-center bg-contain cursor-pointer"
//       onChange={(e) => switchLanguage(e.target.value)}
//       style={{ backgroundImage: `url(${currentLocale === 'en' ? '/us-flag.webp' : '/de-flag.webp'})` }}
//     >
//       <option value="en" selected={currentLocale === 'en'}>
//         <div style={{ height: '100%', width: '100%', backgroundImage: 'url(/us-flag.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
//       </option>
//       <option value="de" selected={currentLocale === 'de'}>
//         <div style={{ height: '100%', width: '100%', backgroundImage: 'url(/de-flag.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
//       </option>
//     </select>
//   );
// };

// export default LanguageSwitcher;
