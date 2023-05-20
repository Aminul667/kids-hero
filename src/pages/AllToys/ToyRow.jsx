import { useNavigate } from "react-router-dom";

const ToyRow = ({ toy, count }) => {
  const navigate = useNavigate();
  const { _id, sellerName, toyName, category, price, quantity } = toy;

  const handleViewDetails = (id) => {
    navigate(`/alltoys/${id}`);
  };

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
          <button onClick={() => handleViewDetails(_id)} className="tracking-wide text-neutral-50 transition-colors duration-200 transform bg-[#4E7D64] rounded-md hover:bg-[#1e422f] focus:outline-none focus:bg-[#1e422f] px-3 py-1">
            Details
          </button>
        </td>
      </tr>
    </>
  );
};

export default ToyRow;
