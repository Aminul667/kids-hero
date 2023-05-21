// import { useEffect, useState } from "react";
// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import Category from "./Category";
import Choice from "./Choice";
// import Toy from "./Toy";
// import { useLoaderData } from "react-router-dom";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Gallery from "./Gallery";
import Services from "./Services";
// import "react-tabs/style/react-tabs.css";

const Home = () => {
  useTitle('Home')
  const toys = useLoaderData();

  // console.log('Home',toys);
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // const [filteredData, setFilteredData] = useState([]);

  // const toysData = useLoaderData();
  // console.log("Home", toysData);

  // const selectCategory = (category) => {
  //   setSelectedCategory(category);
  //   const filtered = toysData.filter((item) => item.category === category);
  //   setFilteredData(filtered);
  // };

  // console.log(filteredData)

  // const [toys, setToys] = useState([]);

  // useEffect(() => {
  //   fetch("data.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setToys(data);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Category toys={toys}></Category>
      <Services></Services>
      <Choice></Choice>
    </div>
  );
};

export default Home;

{
  /* <div className="flex justify-center mb-10">
        <div className="lg:grid lg:grid-cols-5 lg:gap-4">
          {toysData.map((toy) => (
            <Toy key={toy.id} toy={toy}></Toy>
          ))}
        </div>
      </div> */
}
