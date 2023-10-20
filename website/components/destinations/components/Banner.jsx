
const Banner = ({destination}) => {
  return (
    <> 
    <div className="col-12">

      <div className="relative d-flex">
        <img
          src={destination?.img}
          alt="image"
          className="col-12 rounded-4"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
        
      </div>
    </div>
    </>
  );
};

export default Banner;
