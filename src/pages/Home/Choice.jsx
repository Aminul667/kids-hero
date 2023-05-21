import sale from "../../assets/images/sale.png";
const Choice = () => {
  return (
    <div className="md:flex md:justify-around">
      <div className="flex justify-center items-center">
        <div className="text-center">
          <img src={sale} alt="" className="mb-4" />
          <h2 className="title">
            What’s your{" "}
            <span className="text-colorPrimary">Kids’s Choice?</span>
          </h2>
          <p className="text-3xl font-jost font-medium mb-2">
            Special Toy Collection
          </p>
          <p className="text-2xl font-jost font-medium">
            GET UP TO <span className="font-bold">60% OFF</span>
          </p>
        </div>
      </div>
      <div>
        <img
          src="https://i.ibb.co/2Z3KZVT/batman.jpg"
          alt=""
          className="md:w-[400px]"
        />
      </div>
    </div>
  );
};

export default Choice;
