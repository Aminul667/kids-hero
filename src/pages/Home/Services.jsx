import car from "../../assets/images/car.png";
import gift from "../../assets/images/gift.png";
import support from "../../assets/images/support.png";
import money from "../../assets/images/money.png";

const Services = () => {
  return (
    <>
    <h2 className="title text-center">Our Services</h2>
      <div className="md:flex md:justify-between md:gap-2">
        <div className="flex justify-evenly w-80 p-4 bg-[#FBFAF3] rounded-lg mb-4">
          <img className="w-10" src={car} alt="" />
          <div>
            <h3 className="font-jost font-medium text-xl">
              Free World Delivery
            </h3>
            <p className="font-jost">Orders Over $100</p>
          </div>
        </div>
        <div className="flex justify-evenly w-80 p-4 bg-[#FBFAF3] rounded-lg mb-4">
          <img className="w-10" src={gift} alt="" />
          <div>
            <h3 className="font-jost font-medium text-xl">Gift Card</h3>
            <p className="font-jost">Perfect Gift For All</p>
          </div>
        </div>
        <div className="flex justify-evenly w-80 p-4 bg-[#FBFAF3] rounded-lg mb-4">
          <img className="w-10" src={support} alt="" />
          <div>
            <h3 className="font-jost font-medium text-xl">
              Best Online Support
            </h3>
            <p className="font-jost">Hours: 8am - 8 pm</p>
          </div>
        </div>
        <div className="flex justify-evenly w-80 p-4 bg-[#FBFAF3] rounded-lg mb-4">
          <img className="w-10" src={money} alt="" />
          <div>
            <h3 className="font-jost font-medium text-xl">Money Back</h3>
            <p className="font-jost">100% Money Backy Guaranteed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
