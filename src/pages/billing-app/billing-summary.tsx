import { useTranslation } from "react-i18next";
import { useBillingStore } from "../../state-management/billing-store";
import { useConfigStore } from "../../state-management/config-store";

import { useRef } from "react";

import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import LayoutPrinting from "../../components/billing-app/layout-printing";

const BillingSummary = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { t } = useTranslation("billing", { keyPrefix: "main.summary" });

  const onSave = () => {
    if (ref.current) {
      htmlToImage
        .toPng(ref.current)
        .then((dataUrl) => download(dataUrl, "test.png"));
    }
  };

  return (
    <div className="flex flex-col full p-1 lg:p-2 lg:pl-1.5">
      <div className="card w-full bg-base-100 shadow-lg border border-gray-200">
        <div className="card-body lg:p-4">
          <h3 className="text-xl font-bold">{t("title")}</h3>
          <div className="divider my-2" />
          <BillingSummaryTable />
          <button
            className="btn btn-primary w-fit self-end mt-4"
            onClick={onSave}
          >
            {t("save")}
          </button>
        </div>
        <LayoutPrinting ref={ref} />
      </div>
    </div>
  );
};

export const BillingSummaryTable = () => {
  const { items } = useBillingStore();
  const { lng } = useConfigStore();

  const { t } = useTranslation("billing", { keyPrefix: "main.summary.table" });

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <table className="table w-full table-zebra border-spacing-0 border-separate">
      <thead>
        <tr className="text-center [&>th]:px-2 [&>th]:py-3 [&>th]:first:text-left [&>th]:last:text-right">
          <th>{t("name")}</th>
          <th>{t("price")}</th>
          <th>{t("quantity")}</th>
          <th>{t("total")}</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr
            key={`summary-table-row-${item.id}`}
            className="text-center [&>td]:p-2"
          >
            <td className="text-left">{item.name[lng]}</td>
            <td>{item.price}฿</td>
            <td>{item.quantity}</td>
            <td className="text-right">
              {`${(item.price * item.quantity).toLocaleString()}฿`}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="[&>th]:px-2 [&>th]:py-3">
          <th className="text-left">{t("total_amount")}</th>
          <th></th>
          <th></th>
          <th className="text-right">{`${total.toLocaleString()}฿`}</th>
        </tr>
      </tfoot>
    </table>
  );
};

export default BillingSummary;
