import Image from "next/image";
import Header from "../_components/Header";
import SearchTrips from "../_components/SearchTrips";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <SearchTrips />
      </div>
    </>
  );
}
