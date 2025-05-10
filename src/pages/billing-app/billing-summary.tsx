const BillingSummary = () => {
  return (
    <div className="flex flex-col full p-3">
      <h3 className="text-xl font-bold">Summary</h3>
      <div className="divider my-2" />
      <table className="table w-full table-zebra">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Item 1</td>
            <td>$10.00</td>
            <td>Paid</td>
          </tr>
          <tr>
            <td>Item 2</td>
            <td>$20.00</td>
            <td>Pending</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th>$30.00</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
      <button className="btn btn-primary w-fit self-end mt-4">Share Billing</button>
    </div>
  );
};

export default BillingSummary;
