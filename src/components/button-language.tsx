import { useTranslation } from "react-i18next";

import flag_th from "../assets/flag_th.png";
import flag_en from "../assets/flag_en.png";

const sizeFlag = "w-8 h-8";

const ButtonLanguage = (props: React.ComponentPropsWithoutRef<"div">) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    i18n.changeLanguage(checked ? "th" : "en");
  };

  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip={t("button.language")}
      {...props}
    >
      <label className="swap swap-flip text-xl">
        <input
          name="switch-language"
          type="checkbox"
          onChange={toggleLanguage}
        />

        <div className="swap-on">
          <img
            className={`${sizeFlag}`}
            src={flag_th}
            alt="thailand flag icons"
          />
        </div>
        <div className="swap-off">
          <img
            className={`${sizeFlag}`}
            src={flag_en}
            alt="english flag icons"
          />
        </div>
      </label>
    </div>
  );
};

export default ButtonLanguage;
