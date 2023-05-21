import { useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
  useTitle('Details');
  
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

  console.log(toyName);

  const handleNavigation = () => {
    navigate(-1, { replace: true });
  };

  return (
    <div className="mb-10">
      <h2 className="title mb-5">Our Special {toyName}</h2>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            className="md:w-[400px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-jost font-bold text-3xl">Name: {toyName}</h2>
          <p className="font-jost text-xl">Seller Name: {sellerName}</p>
          <p className="font-jost text-xl">Seller Email: {email}</p>
          <p className="font-jost text-xl">Price: {price}</p>
          <p className="font-jost text-xl">Ratting: {ratting}</p>
          <p className="font-jost text-xl">Quantity: {quantity}</p>
          <p className="font-jost text-xl">Description: {description}</p>
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
