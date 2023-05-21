const Gallery = () => {
  return (
    <div className="bg-colorPrimary mb-10 rounded-lg">
      <h2
        className="title text-white text-center font-jost pt-3"
        data-aos="fade-down"
      >
        See Our Gallery
      </h2>
      <div className="container mx-auto px-3 py-2 lg:px-32">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div
            className="flex w-1/2 flex-wrap"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://m.media-amazon.com/images/I/91aTd-k35qL._AC_UL400_.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://m.media-amazon.com/images/I/81cAJjq8eLL._AC_UL400_.jpg"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://bbts1.azureedge.net/images/p/thumb/2023/04/d143a8b2-76c1-4a09-aadd-3d964b5a19a5.png"
              />
            </div>
          </div>
          <div
            className="flex w-1/2 flex-wrap"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://m.media-amazon.com/images/I/71frtrw8t0L._AC_UL400_.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvMEle20DiwuL0FcrOckDo8pB-0YQ_N5eUJCG0RogPQ&s"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://bbts1.azureedge.net/images/p/thumb/2023/05/3aa91f4d-e5bd-4619-b9e7-77f9ca3ea8d7.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
