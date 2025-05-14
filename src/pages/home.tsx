import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import ButtonLanguage from "../components/button-language";

function Home() {
  const { t } = useTranslation("home");
  return (
    <>
      <div className="screen flex-center flex-col">
        <h1 className="text-3xl font-bold">
          {`${import.meta.env.VITE_HELLO || "Hi"} world!`}
        </h1>
        <ButtonLanguage />
        <NavLink to="/billing-app" className="btn btn-primary mt-4">
          {t("to_billing")}
        </NavLink>
      </div>
    </>
  );
}

export default Home;
