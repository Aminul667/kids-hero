import { useState } from "react";
import ToyDetails from "../ToyDetails/ToyDetails";

const ToyRow = ({ toy, count }) => {
  const [showModal, setShowModal] = useState(false);
  const { _id, sellerName, toyName, category, price, quantity } = toy;
  
  return (
    <>
      <tr>
        <th>{count + 1}</th>
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
          <button
            onClick={() => setShowModal(true)}
            className="tracking-wide text-neutral-50 transition-colors duration-200 transform bg-[#4E7D64] rounded-md hover:bg-[#1e422f] focus:outline-none focus:bg-[#1e422f] px-3 py-1"
          >
            Details
          </button>
          {showModal ? (
            <ToyDetails
              key={_id}
              setShowModal={setShowModal}
              toy={toy}
            ></ToyDetails>
          ) : null}
        </td>
      </tr>
    </>
  );
};

export default ToyRow;
