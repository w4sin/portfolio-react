import Navbar from "../../components/billing-app/navbar";
import BillingProduct from "./billing-product";
import BillingSummary from "./billing-summary";

import bgBackground from "../../assets/bg_background.jpg";

const Billing = () => {
  return (
    <div className="flex flex-col items-center screen overflow-y-auto overflow-x-hidden" style={{ backgroundImage: `url(${bgBackground})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <Navbar />
      <div className="flex flex-col full max-w-[100rem]">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[68%_32%] xl:grid-cols-[70%_30%]">
          <BillingProduct />
          <BillingSummary />
        </div>
      </div>
    </div>
  );
};

export default Billing;
