import { useState, useContext } from "react";
import Button from "../Button/Button";
import CovidContext from "../../context/CovidContext";

function CovidForm() {
  const { covid, setCovid } = useContext(CovidContext);
  const [provinsi, setProvinsi] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    const updatedProvinces = covid.provinces.map((item) => {
      if (item.provinsi === provinsi) {
        return {
          ...item,
          [status]: item[status] + parseInt(jumlah, 10),
        };
      }
      return item;
    });

    setCovid({
      ...covid,
      provinces: updatedProvinces,
    });

    setProvinsi("");
    setStatus("");
    setJumlah("");
  }

  return (
    <section
      id="covid-form"
      className="bg-blue-50 p-5 shadow-md flex flex-col gap-6 md:flex-row"
    >
      <div className="flex items-center justify-center md:w-1/2">
        <img
          src="/consultation.png"
          alt="Form illustration"
          className="w-[70%] max-w-md h-auto object-contain md:w-[60%]"
        />
      </div>

      <div className="md:w-1/2 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          Form Covid
        </h1>

        <form className="p-5 flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="provinsi" className="text-blue-600 mb-1">
              Provinsi
            </label>
            <select
              name="provinsi"
              id="provinsi"
              value={provinsi}
              onChange={(e) => setProvinsi(e.target.value)}
              className="p-2 border rounded-lg"
              required
            >
              <option value="">Pilih Provinsi</option>
              {covid.provinces.map((item) => (
                <option key={item.provinsi} value={item.provinsi}>
                  {item.provinsi}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="status" className="text-blue-600 mb-1">
              Status
            </label>
            <select
              name="status"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="p-2 border rounded-lg"
              required
            >
              <option value="">Pilih Status</option>
              <option value="positif">Positif</option>
              <option value="sembuh">Sembuh</option>
              <option value="dirawat">Dirawat</option>
              <option value="meninggal">Meninggal</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="jumlah" className="text-blue-600 mb-1">
              Jumlah
            </label>
            <input
              type="number"
              name="jumlah"
              id="jumlah"
              min="0"
              value={jumlah}
              onChange={(e) => setJumlah(e.target.value)}
              placeholder="Masukan Jumlah"
              className="p-2 border rounded-lg"
              required
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </section>
  );
}

export default CovidForm;
