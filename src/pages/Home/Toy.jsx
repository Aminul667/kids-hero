const Toy = ({ toy }) => {
  const {name, photo, price, rating} = toy;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl shadow-colorPrimary w-60">
        <figure>
          <img
            src={photo}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div>
            <p>${price}</p>
            <p>{rating}</p>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
