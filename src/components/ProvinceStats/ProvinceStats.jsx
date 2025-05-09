// import data from "../../utils/constants/provinces";

function ProvinceStats({ data }) {
  return (
    <section id="provinsi" className="py-8 mb-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 md:mt-10">
        Provinsi
      </h1>
      <h2 className="mb-4 text-center text-blue-600">
        Data Covid Berdasarkan Provinsi
      </h2>

      <div className="flex items-center justify-center overflow-x-auto">
        <table className="table-auto border border-gray-300 text-sm">
          <thead className="bg-blue-200">
            <tr>
              <th className="border px-4 py-2">No</th>
              <th className="border px-4 py-2">Provinsi</th>
              <th className="border px-4 py-2">Positif</th>
              <th className="border px-4 py-2">Sembuh</th>
              <th className="border px-4 py-2">Dirawat</th>
              <th className="border px-4 py-2">Meninggal</th>
            </tr>
          </thead>

          <tbody>
            {data.provinces.map((item, index) => (
              <tr key={item.provinsi} className="text-center">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{item.provinsi}</td>
                <td className="border px-4 py-2 text-red-600">
                  {item.positif}
                </td>
                <td className="border px-4 py-2 text-green-600">
                  {item.sembuh}
                </td>
                <td className="border px-4 py-2 text-blue-600">
                  {item.dirawat}
                </td>
                <td className="border px-4 py-2 text-gray-600">
                  {item.meninggal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ProvinceStats;
