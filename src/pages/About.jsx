const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-justify px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">About Covid ID</h1>
      <p className="text-slate-700 mb-3 max-w-2xl">
        <strong>Covid ID</strong> adalah aplikasi web yang bertujuan untuk
        menyediakan informasi terkini terkait perkembangan pandemi Covid-19 baik
        secara global maupun di Indonesia. Data yang disajikan diambil dari
        sumber terpercaya dan diperbarui secara berkala.
      </p>
      <p className="text-slate-700 mb-3 max-w-2xl">
        Melalui aplikasi ini, pengguna dapat memantau jumlah kasus
        terkonfirmasi, pasien yang sembuh, kasus aktif, serta angka kematian
        yang terjadi di berbagai wilayah. Aplikasi ini juga menyediakan
        informasi spesifik berdasarkan provinsi untuk memudahkan pemantauan di
        tingkat lokal.
      </p>
      <p className="text-slate-700 mb-2 max-w-2xl">
        Tetap patuhi protokol kesehatan, kenakan masker, jaga jarak, dan
        pastikan Anda sudah melakukan vaksinasi demi melindungi diri sendiri dan
        orang-orang di sekitar Anda.
      </p>
      <p className="text-slate-700 mt-4 max-w-2xl">
        Terima kasih telah menggunakan <strong>Covid ID</strong>.
      </p>
    </section>
  );
};

export default About;
