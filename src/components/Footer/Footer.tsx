import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../Container";
import styles from "./Footer.module.scss";
const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-footer text-white py-4">
      <Container>
        <div className="container mx-auto text-center text-white">
          <div className="mb-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer_link}
            >
              Facebook
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer_link}
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer_link}
            >
              LinkedIn
            </a>
          </div>
          <div>
            <p>{t("footer.companyName")}</p>
            <p>{t("footer.rights")}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
