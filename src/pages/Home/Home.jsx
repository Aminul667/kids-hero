import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import Category from "./Category";
import Choice from "./Choice";
import Gallery from "./Gallery";
import Services from "./Services";

const Home = () => {
  useTitle('Home')
  const toys = useLoaderData();

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
