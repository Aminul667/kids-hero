import { useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Toy = ({ toy }) => {
  const { _id, toyName, photo, price, ratting } = toy;
  const navigate = useNavigate();

  const handleDetails = (_id) => {
    navigate(`alltoys/details/${_id}`);
  };

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={photo} />
      <div className="p-5">
        <h2 className="font-jost font-semibold text-2xl mb-3">{toyName}</h2>
        <p className="font-jost text-2xl mb-3">${price}</p>
        <p className="font-jost text-2xl mb-3"><Rating style={{ maxWidth: 150 }} value={ratting} readOnly /></p>
        <button
          className="tracking-wide text-neutral-50 transition-colors duration-200 transform bg-[#4E7D64] rounded-md hover:bg-[#1e422f] focus:outline-none focus:bg-[#1e422f] px-3 py-2"
          onClick={() => handleDetails(_id)}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Toy;
