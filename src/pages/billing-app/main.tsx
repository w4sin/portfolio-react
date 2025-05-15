import ButtonLanguage from "../../components/button-language";
import BillingProduct from "./billing-product";
import BillingSummary from "./billing-summary";

const Billing = () => {
  return (
    <div className="flex-center screen overflow-y-auto bg-base-200">
      <div className="bg-base-200 h-full w-full max-auto max-w-[100rem]">
        <ButtonLanguage />
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[68%_32%] xl:grid-cols-[70%_30%]">
          <BillingProduct />
          <BillingSummary />
        </div>
      </div>
    </div>
  );
};

export default Billing;
