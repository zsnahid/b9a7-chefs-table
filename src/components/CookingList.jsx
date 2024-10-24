export default function CookingList() {
  return (
    <div className="overflow-x-auto mb-5">
      <h3 className="font-semibold text-center mb-2">Currently cooking: 01</h3>
      <div className="border-b max-w-sm mx-auto mb-5"></div>
      <table className="table-auto w-full text-left font-fira text-gray">
        <thead>
          <tr>
            <th></th>
            <th className="p-3">Name</th>
            <th className="p-3">Time</th>
            <th className="p-3">Calories</th>
          </tr>
        </thead>
        <tbody className="font-light">
          <tr className="odd:bg-gray-light border-b-2">
            <td className="p-3">1</td>
            <td className="p-3">Chicken Caesar Salad</td>
            <td className="p-3">20 minutes</td>
            <td className="p-3">400 calories</td>
          </tr>
        </tbody>
        <tfoot>
          <td colSpan={2}></td>
          <td className="p-3">Total Time = 45 minutes</td>
          <td className="p-3">Total Calories = 1060 calories</td>
        </tfoot>
      </table>
    </div>
  );
}
