const Banner = ({destination}) => {
  return (
    <div className="col-12">
      <div className="relative d-flex">
        <img
          src={destination?.img}
          alt="image"
          className="col-12 rounded-4"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
        <div className="absolute z-2 px-50 py-60 md:py-20 md:px-30">
          <h1 className="text-50 fw-600 text-white lg:text-40 md:text-30">
            Explore {destination?.country}
          </h1>
          <div className="text-white">
            Explore deals, travel guides and things to do in {destination?.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
