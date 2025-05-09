import data from "../../utils/constants/indonesia";

function IndonesiaStats() {
  const statusColor = {
    Positif: "text-red-600",
    Sembuh: "text-green-600",
    Meninggal: "text-gray-600",
  };

  return (
    <section id="indonesia" className="py-8 mb-8 bg-blue-50 my-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 md:mt-10">
        Indonesia
      </h1>
      <h2 className="mb-4 text-center text-blue-600">
        Data Covid Berdasarkan Indonesia
      </h2>

      <div className="flex flex-col flex-wrap gap-4 md:flex-row md:justify-evenly ">
        {data.indonesia.map((item) => (
          <div
            key={item.status}
            className="bg-white mx-4 py-8 px-16 rounded-xl text-center shadow-xl"
          >
            <h2 className={`text-xl font-semibold ${statusColor[item.status]}`}>
              {item.status}
            </h2>
            <h1 className={`text-2xl font-bold ${statusColor[item.status]}`}>
              {item.total.toLocaleString("id-ID")}
            </h1>
            <a
              href={item.detail}
              className="text-blue-600 hover:underline text-sm"
              target="_blank"
            >
              Lihat detail
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IndonesiaStats;
