import { useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ToyDetails = () => {
  useTitle("Details");

  const navigate = useNavigate();
  const toy = useLoaderData();

  const {
    photo,
    toyName,
    sellerName,
    email,
    price,
    ratting,
    quantity,
    description,
  } = toy[0];

  const handleNavigation = () => {
    navigate(-1, { replace: true });
  };

  return (
    <div className="mb-10">
      <h2 className="title mb-5">Our Special {toyName}</h2>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} className="" />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="font-jost font-bold text-3xl">Name: {toyName}</h2>
            <p className="font-jost text-xl mt-2">Seller Name: {sellerName}</p>
            <p className="font-jost text-xl mt-2">Seller Email: {email}</p>
            <p className="font-jost text-xl mt-2">Price: {price}</p>
            <p className="font-jost text-xl mt-2">
              Ratting:{" "}
              <Rating style={{ maxWidth: 150 }} value={ratting} readOnly />
            </p>
            <p className="font-jost text-xl mt-2">Quantity: {quantity}</p>
            <p className="font-jost text-xl mt-2">Description: {description}</p>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={handleNavigation}
              className="btn bg-white text-black p-0 border-none hover:bg-white"
            >
              <FaArrowLeft></FaArrowLeft> Back to the Toys
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
