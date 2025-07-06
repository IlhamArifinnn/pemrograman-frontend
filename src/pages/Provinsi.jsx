import Hero from "../components/Hero/Hero";
import CovidForm from "../components/CovidForm/CovidForm";
import ProvinceStats from "../components/ProvinceStats/ProvinceStats";

function Provinsi() {
  return (
    <>
      <Hero />
      <ProvinceStats title="Provinsi" />
      <CovidForm />
    </>
  );
}

export default Provinsi;
