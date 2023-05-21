import { useNavigate } from "react-router-dom";

const Toy = ({ toy }) => {
  const { _id, toyName, photo, price, ratting } = toy;
  const navigate = useNavigate();

  const handleDetails = (_id) => {
    console.log(_id);
    navigate(`alltoys/details/${_id}`);
  };

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={photo} />
      <div className="p-5">
        <h2 className="font-jost font-semibold text-2xl mb-3">{toyName}</h2>
        <p className="font-jost text-2xl">${price}</p>
        <p className="font-jost text-2xl">{ratting}</p>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => handleDetails(_id)}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Toy;
