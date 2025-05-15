import { useTranslation } from "react-i18next";
import { useBillingStore } from "../../state-management/billing-store";
import { useConfigStore } from "../../state-management/config-store";

const BillingSummary = () => {
  const { t } = useTranslation("billing", { keyPrefix: "main.summary" });

  return (
    <div className="flex flex-col full p-3">
      <h3 className="text-xl font-bold">{t("title")}</h3>
      <div className="divider my-2" />
      <SummaryTable />
      <button className="btn btn-primary w-fit self-end mt-4">
        Share Billing
      </button>
    </div>
  );
};

const SummaryTable = () => {
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
          <th>{t("quantity")}</th>
          <th>{t("price")}</th>
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
            <td>{item.quantity}</td>
            <td>{item.price}฿</td>
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
