import Button from "../Button/Button";

function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col m-4 justify-around items-center mb-4 mt-2 md:flex-row lg:mt-10"
    >
      <div className="p-4 md:w-1/2 lg:w-2/5">
        <h1 className="text-4xl font-bold text-blue-700">Covid ID</h1>
        <h2 className="text-lg text-blue-600 italic mt-2">
          Monitoring Pekembangan Covid
        </h2>
        <p className="text-slate-700 m-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
          officia vel alias fugit vitae dolorum nihil suscipit sequi! Ducimus,
          aliquam voluptatem cupiditate dolor laborum molestiae animi quibusdam,
          tempora distinctio aliquid voluptatibus eum nemo velit repellendus
          voluptates ipsam mollitia alias consequuntur sint? Rem nulla unde
          laudantium suscipit nostrum incidunt facere quaerat?
        </p>
        <Button type="button">Lihat Data Vaksin</Button>
      </div>

      <div className="flex justify-center items-center p-4 md:w-1/2 lg:w-2/5">
        <img
          src="/medical-team.png"
          alt="gambar hero"
          className="w-[80%] max-w-md h-auto object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
