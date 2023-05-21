import banner from "../../assets/images/bannerPic.jpg";
import vectorBg from "../../assets/images/vectorBg.png";

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${vectorBg})`,
  };

  return (
    <div
      style={bgImage}
      className="md:flex md:justify-between bg-no-repeat bg-left mb-10"
    >
      <div
        className="md:w-1/2 flex items-center justify-center"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div>
          <h2 className="title">
            <span className="text-colorPrimary">Discover</span> New Collection
          </h2>
          <h3 className="title">World Class Teddy Bear</h3>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
      <div
        className="md:w-1/2 bg-neutral-400 rounded-lg"
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <img src={banner} className="rounded-lg" />
      </div>
    </div>
  );
};

export default Banner;
