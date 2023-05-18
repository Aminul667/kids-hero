import { useEffect, useState } from "react";
import Banner from "./Banner";
import Toy from "./Toy";

const Home = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="flex justify-center mb-10">
        <div className="lg:grid lg:grid-cols-5 lg:gap-4">
          {toys.map((toy) => (
            <Toy key={toy.id} toy={toy}></Toy>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
