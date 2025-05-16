import { useTranslation } from "react-i18next";
import { BillingSummaryTable } from "../../pages/billing-app/billing-summary";

const LayoutPrinting = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  const { i18n } = useTranslation();
  const isEng = i18n.language === "en";

  const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    return `${date.getDate()}/${date.getMonth() + 1}/${
      isEng ? year : year - 543
    }`;
  };

  return (
    <div
      ref={ref}
      className="absolute w-96 rounded-lg flex-center flex-col pointer-events-none -z-50 bg-white p-5"
      aria-hidden="true"
    >
      <h3 className="text-lg font-bold text-base-content">
        {isEng ? "Shop Name" : "ชื่อร้านค้า"}
      </h3>
      <p className="text-base-content">{getDate()}</p>
      <BillingSummaryTable />
    </div>
  );
};

export default LayoutPrinting;
