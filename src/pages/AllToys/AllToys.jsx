import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle("All Toys");
  const allToysData = useLoaderData();
  
  return (
    <div className="mt-10 mb-10">
      <h2 className="title text-center mb-5">This is All Toys Component</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {allToysData.map((toy) => (
              <ToyRow
                key={toy._id}
                toy={toy}
                count={allToysData.indexOf(toy)}
              ></ToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
