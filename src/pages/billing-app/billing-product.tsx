import { mockItems } from "./__mockup";
import { BsEmojiDizzy } from "react-icons/bs";

import ProductItem from "./billing-product-item";

import { useTranslation } from "react-i18next";

const BillingProduct = () => {
  // const mockItems: TProduct[] = [];
  const { t } = useTranslation("billing", { keyPrefix: "main.product" });

  return (
    <div className="flex-center p-1 lg:p-2 lg:pr-1.5">
      <div className="card full bg-base-100 shadow-lg border border-gray-200">
        <div className="card-body lg:p-4">
          <div className="flex justify-between items-center">
            <h2 className="card-title ">{t("title")}</h2>
            <button className="btn btn-success w-fit">{t("create")}</button>
          </div>
          <div className="divider my-1" />
          {mockItems.length <= 0 ? (
            <NoProduct />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
              {mockItems.map((item, index) => (
                <ProductItem key={index} {...item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const NoProduct = () => {
  return (
    <div className="full flex-center flex-col gap-3">
      <BsEmojiDizzy className="text-8xl lg:text-[150px]" />
      <h2 className="text-2xl lg:text-3xl font-bold text-red-500">Opps!</h2>
      <p className="lg:text-xl text-base-content/60 text-center max-h-fit">
        No product found. Please create a product.
      </p>
    </div>
  );
};

export default BillingProduct;
