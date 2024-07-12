import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "../Container";
import solana from "../../assets/images/solana.svg";
const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-header shadow-md">
      <Container>
        <nav className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-primary">
            <Link to="/" className="flex items-center">
              <img src={solana} alt="" className="w-10 h-10" />
              Solana Staking
            </Link>
          </div>
          <div className="flex space-x-4 header-navigation_list">
            <Link to="/" className="text-white header-navigation_item">
              {t("navbar.home")}
            </Link>
            <Link to="/about" className="text-white header-navigation_item">
              {t("navbar.about")}
            </Link>
            <Link to="/services" className="text-white header-navigation_item">
              {t("navbar.services")}
            </Link>
            <Link to="/contact" className="text-white header-navigation_item">
              {t("navbar.contact")}
            </Link>
          </div>
          <div className="flex space-x-2">
            <button onClick={() => changeLanguage("en")} className="text-white">
              EN
            </button>
            <button onClick={() => changeLanguage("ru")} className="text-white">
              RU
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
