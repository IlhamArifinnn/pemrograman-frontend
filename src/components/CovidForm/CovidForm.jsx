import Button from "../Button/Button";

function CovidForm() {
  return (
    <section className="bg-blue-50 p-5 shadow-md flex flex-col gap-6 md:flex-row">
      <div className="flex items-center justify-center md:w-1/2">
        <img
          src="/consultation.png"
          alt="Form ilustration"
          className="w-[70%] max-w-md h-auto object-contain md:w-[80%]"
        />
      </div>

      <div className="md:w-1/2 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          Form Covid
        </h1>

        <form className="p-5 flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="provinsi" className="text-blue-600 mb-1">
              Provinsi
            </label>
            <input
              type="text"
              name="provinsi"
              id="provinsi"
              placeholder="Masukan Provinsi"
              className="p-2 border rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="status" className="text-blue-600 mb-1">
              Status
            </label>
            <select
              name="status"
              id="status"
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
