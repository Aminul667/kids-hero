import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Toy from "./Toy";

const Category = ({ toys }) => {
  return (
    <>
      <h2 className="title text-center" data-aos="fade-down">
        Search By Category
      </h2>
      <div>
        <Tabs>
          <TabList>
            <Tab>Superman</Tab>
            <Tab>Batman</Tab>
            <Tab>Spiderman</Tab>
          </TabList>

          <TabPanel>
            <div className="md:grid md:grid-cols-3">
              {toys
                .filter((filterToy) => filterToy.category === "Superman")
                .map((toy) => (
                  <Toy key={toy._id} toy={toy}></Toy>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="md:grid md:grid-cols-3">
              {toys
                .filter((filterToy) => filterToy.category === "Batman")
                .map((toy) => (
                  <Toy key={toy._id} toy={toy}></Toy>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="md:grid md:grid-cols-3">
              {toys
                .filter((filterToy) => filterToy.category === "Spiderman")
                .map((toy) => (
                  <Toy key={toy._id} toy={toy}></Toy>
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Category;
