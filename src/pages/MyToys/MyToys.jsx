import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyRow from "./MyToyRow";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [asc, setAsc] = useState(true);

  const email = user?.email;

  // const url = `https://b7a11-kids-toy-server.vercel.app/toys/${email}?sort=${asc ? 'asc' : 'dsc'}`;

  useEffect(() => {
    fetch(`https://b7a11-kids-toy-server.vercel.app/toys/${email}?sort=${asc ? 'asc' : 'dsc'}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      })
      .catch((error) => console.error(error));
  }, [email, asc]);

  return (
    <div>
      <div className="mt-10 mb-10">
        <h2 className="title text-center mb-5">This is My Toys Component</h2>
        <button onClick={() => setAsc(!asc)} className="btn btn-primary bg-colorPrimary hover:bg-[#1e422f] mb-3">
          {asc ? "Price Dec" : "Price Asc"}
        </button>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Toy Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <MyToyRow
                  key={toy._id}
                  toy={toy}
                  count={toys.indexOf(toy)}
                  toys={toys}
                  setToys={setToys}
                ></MyToyRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
