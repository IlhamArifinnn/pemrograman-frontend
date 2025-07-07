import Button from "../Button/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col m-4 justify-around items-center mb-20 mt-2 md:flex-row lg:mt-10"
    >
      <div className="p-4 md:w-1/2 lg:w-2/5">
        <h1 className="text-4xl font-bold text-blue-700">Covid ID</h1>
        <h2 className="text-lg text-blue-600 italic mt-2">
          Monitoring Pekembangan Covid
        </h2>
        <p className="text-slate-700 my-4">
          Covid ID adalah platform yang menyediakan informasi terkini tentang
          perkembangan kasus Covid-19 di berbagai wilayah. Pantau data harian,
          jumlah kasus terkonfirmasi, pasien sembuh, dan korban jiwa dengan
          mudah. Tetap waspada, terapkan protokol kesehatan, dan pastikan kamu
          sudah mendapatkan vaksinasi untuk melindungi diri dan orang-orang di
          sekitarmu.
        </p>
        <Button type="button">Lihat Data Vaksin</Button>
      </div>

      <div className="flex justify-center items-center p-4 md:w-1/2 lg:w-2/5">
        <img
          src="/medical-team.png"
          alt="gambar hero"
          className="w-[75%] max-w-md h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
