import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyToyRow = ({ toy, count, toys, setToys }) => {
  const navigate = useNavigate();
  const { _id, toyName, category, price, quantity } = toy;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`http://localhost:5000/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
              const remaining = toys.filter(
                (filterToy) => filterToy._id !== _id
              );
              setToys(remaining);
            }
          });
      }
    });
  };

  const handleUpdate = (_id) => {
    navigate(`/updatetoy/${_id}`);
  };

  return (
    <>
      <tr>
        <th>{count + 1}</th>
        <td>{toyName}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
          <button
            onClick={() => handleUpdate(_id)}
            className="tracking-wide text-neutral-50 transition-colors duration-200 transform bg-[#4E7D64] rounded-md hover:bg-[#1e422f] focus:outline-none focus:bg-[#1e422f] px-3 py-1"
          >
            Update
          </button>
        </td>
        <td>
          <button
            onClick={() => handleDelete(_id)}
            className="tracking-wide text-neutral-50 transition-colors duration-200 transform bg-[#4E7D64] rounded-md hover:bg-[#1e422f] focus:outline-none focus:bg-[#1e422f] px-3 py-1"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyToyRow;
