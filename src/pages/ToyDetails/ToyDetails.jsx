
const ToyDetails = ({ setShowModal, toy }) => {
  const {
    photo,
    toyName,
    sellerName,
    email,
    price,
    ratting,
    quantity,
    description,
  } = toy;

  return (
    <div className="modal modal-bottom sm:modal-middle modal-open">
      <div className="modal-box">
        <div className="flex justify-center mb-3">
          <img src={photo} alt="" />
        </div>
        <h2 className="text-3xl font-medium mb-2">{toyName}</h2>
        <h2 className="text-2xl font-medium mb-2">Seller: {sellerName}</h2>
        <h2 className="text-2xl font-medium mb-2">Email: {email}</h2>
        <h2 className="text-2xl font-medium mb-2">Price: ${price}</h2>
        <h2 className="text-2xl font-medium mb-2">Ratting: {ratting}</h2>
        <h2 className="text-2xl font-medium mb-2">Quantity: {quantity}</h2>
        <p className="w-[400px]">{description}</p>
        <button onClick={() => setShowModal(false)} className="btn btn-primary">
          Close
        </button>
      </div>
    </div>
  );
};

export default ToyDetails;
