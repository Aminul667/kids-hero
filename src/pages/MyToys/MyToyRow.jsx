

const MyToyRow = ({ toy, count }) => {
    const { _id, toyName, category, price, quantity } = toy;
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
            onClick={() => setShowModal(true)}
            className="tracking-wide text-neutral-50 transition-colors duration-200 transform bg-[#4E7D64] rounded-md hover:bg-[#1e422f] focus:outline-none focus:bg-[#1e422f] px-3 py-1"
          >
            Update
          </button>
        </td>
        <td>
          <button
            onClick={() => setShowModal(true)}
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