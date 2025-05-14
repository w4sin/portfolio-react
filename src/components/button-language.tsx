import { useTranslation } from "react-i18next";
import { useConfigStore } from "../state-management/config-store";

const ButtonLanguage = () => {
  const { t, i18n } = useTranslation();
  const { setLng } = useConfigStore();

  const handleChangeLanguage = () => {
    const newLang = i18n.language === "en" ? "th" : "en";
    setLng(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <button className="btn btn-primary mt-4" onClick={handleChangeLanguage}>
      {t("button.language")}
    </button>
  );
};

export default ButtonLanguage;
