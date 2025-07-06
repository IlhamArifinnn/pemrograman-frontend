import { useContext } from "react";
import CovidContext from "../../context/CovidContext";

function ProvinceStats({ covidProvinsi = null, title }) {
  const { covid } = useContext(CovidContext);
  const dataToShow = covidProvinsi || covid.provinces;

  const isAPIData = covidProvinsi !== null;

  return (
    <section id="provinsi" className="mb-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-2 mt-10">
        {title}
      </h1>
      <h2 className="mb-8 text-center text-blue-600">
        {isAPIData
          ? "Data Covid Berdasarkan Provinsi (API)"
          : "Data Covid Berdasarkan Provinsi (Local)"}
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
            {dataToShow.map((item, index) => {
              const provinsiName = item.name || item.provinsi;
              const positif = item.numbers
                ? item.numbers.confirmed
                : item.positif;
              const sembuh = item.numbers
                ? item.numbers.recovered
                : item.sembuh;
              const dirawat = item.numbers
                ? item.numbers.treatment
                : item.dirawat;
              const meninggal = item.numbers
                ? item.numbers.death
                : item.meninggal;

              return (
                <tr key={provinsiName} className="text-center">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{provinsiName}</td>
                  <td className="border px-4 py-2 text-red-600">
                    {positif.toLocaleString("id-ID")}
                  </td>
                  <td className="border px-4 py-2 text-green-600">
                    {sembuh.toLocaleString("id-ID")}
                  </td>
                  <td className="border px-4 py-2 text-blue-600">
                    {dirawat.toLocaleString("id-ID")}
                  </td>
                  <td className="border px-4 py-2 text-gray-600">
                    {meninggal.toLocaleString("id-ID")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ProvinceStats;
