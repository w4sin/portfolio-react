import { useBillingStore } from "../../state-management/billing-store";

const BillingSummary = () => {
  const { items } = useBillingStore();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col full p-3">
      <h3 className="text-xl font-bold">Summary</h3>
      <div className="divider my-2" />
      <table className="table w-full table-zebra border-spacing-0 border-separate">
        <thead>
          <tr>
            {headTable.map((head) => (
              <th
                key={`summary-table-header-${head}}`}
                className="text-center first:text-left last:text-right px-2 py-3"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={`summary-table-row-${item.id}`} className="text-center [&>td]:px-2 [&>td]:py-2">
              <td className="text-left">{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}฿</td>
              <td className="text-right">
                {`${(item.price * item.quantity).toLocaleString()}฿`}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="[&>td]:px-2 [&>td]:py-3">
            <th>Total</th>
            <th></th>
            <th></th>
            <th className="text-right">{`${total.toLocaleString()}฿`}</th>
          </tr>
        </tfoot>
      </table>
      <button className="btn btn-primary w-fit self-end mt-4">
        Share Billing
      </button>
    </div>
  );
};

const headTable = ["Name", "Quantity", "Price","Total"];

export default BillingSummary;
