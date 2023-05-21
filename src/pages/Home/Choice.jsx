import sale from "../../assets/images/sale.png";
const Choice = () => {
  return (
    <>
      <h2 className="title text-center mt-10">Get A Discount</h2>
      <div className="md:flex md:justify-around mb-5">
        <div
          className="flex justify-center items-center"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
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
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <img
            src="https://i.ibb.co/2Z3KZVT/batman.jpg"
            className="md:w-[400px]"
          />
        </div>
      </div>
    </>
  );
};

export default Choice;
