import React from 'react';

const LanguageSwitcher = (props) => {
    // console.log(props)
    const { currentLocale, redirect } = props;
  function switchLanguage(lang) {
    // console.log('test')
    // // Assuming you want to navigate to the root of the selected language:
    window.location.pathname = '/' + lang + '/';
    // console.log(lang, 'amg');

    // console.log(redirect, 'redirect');

    redirect('/' + lang + '/');
  }

  return (
    <select
      class="md:block bg-transparent text-default dark:text-white dark:bg-dark border-none appearance-none"
      onChange={(e) => switchLanguage(e.target.value)}
    >
      <option value="en" selected={currentLocale === 'en' ? 'selected' : undefined}>
        {' '}
        English{' '}
      </option>
      <option value="de" selected={currentLocale === 'de' ? 'selected' : undefined}>
        {' '}
        Deutsch{' '}
      </option>
    </select>
  );
};

export default LanguageSwitcher;
