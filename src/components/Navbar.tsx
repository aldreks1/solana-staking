import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">Solana Staking</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white">{t('navbar.home')}</Link>
          <Link to="/about" className="text-white">{t('navbar.about')}</Link>
          <Link to="/services" className="text-white">{t('navbar.services')}</Link>
          <Link to="/contact" className="text-white">{t('navbar.contact')}</Link>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => changeLanguage('en')} className="text-white">EN</button>
          <button onClick={() => changeLanguage('ru')} className="text-white">RU</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
