import { useTranslation } from "react-i18next";
const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-4xl font-bold text-primary">{t("home.title")}</h1>
      <p className="mt-4 text-lg text-secondary">{t("home.description")}</p>
    </div>
  );
};
export default Home;
