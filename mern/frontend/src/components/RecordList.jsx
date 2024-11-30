import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) => (
  <tr className="border-b transition-colors hover:bg-gray-100">
    <td className="p-4">{props.record.name}</td>
    <td className="p-4">{props.record.position}</td>
    <td className="p-4">{props.record.level}</td>
    <td className="p-4">
      <div className="flex gap-2">
        <Link className="btn" to={`/edit/${props.record._id}`}>
          Edit
        </Link>
        <button className="btn bg-red-600 hover:bg-red-700" onClick={() => props.deleteRecord(props.record._id)}>
          Delete
        </button>
      </div>
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5050/record/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const records = await response.json();
      setRecords(records);
    }
    getRecords();
  }, [records.length]);

  function recordList() {
    return records.map((record) => {
      return <Record record={record} deleteRecord={() => deleteRecord(record._id)} key={record._id} />;
    });
  }

  async function deleteRecord(id) {
    await fetch(`http://localhost:5050/record/${id}`, {
      method: "DELETE",
    });
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  return (
    <>
      <h3 className="text-lg font-semibold p-4">Employee Records</h3>
      <div className="border rounded-lg overflow-hidden">
        <div className="relative w-full overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Position</th>
                <th className="p-4 text-left">Level</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>{recordList()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}