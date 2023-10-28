import Image from "next/image";

const Block1 = () => {
  return (
    <>
      <div className="col-lg-5">
        <h2 className="text-30 fw-600">About Eurasia</h2>
        <p className="mt-5">Embark on Unforgettable Journeys with Us</p>
        <p className="text-dark-1 mt-20 lg:mt-40 md:mt-20">
          Greetings from Eurasia! We are your devoted travel enthusiasts, driven by a desire to create extraordinary adventures for each traveller.
          Our goal at Eurasia is to create amazing travel adventures that satisfy your individual needs.  
          <br />
          <br />
          We have what you&apos;re looking for, whether you want the rush of adventure, to experience another culture, or just to unwind in beautiful surroundings. 
          We want to make your experience with us enjoyable by putting an emphasis on tailored service and smooth travel. 
          Join us at Eurasia, where comfort meets adventure, and let&apos;s set out on exciting journeys. 
        </p>
      </div>

      <div className="col-lg-6">
        <Image
          width={400}
          height={400}
          src="/img/pages/about/2.png"
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
    </>
  );
};

export default Block1;
