import GeneralInfo from "../../../components/destinations/components/GeneralInfo";

const IntroTown = ({destination}) => {
  return (
    <>
      <div className="col-xl-8">
        <div className="col-auto">
          <h2>What to know before visiting {destination?.country}</h2>
        </div>

        <p className="text-15 text-dark-1">
          {destination?.description}
        </p>
      </div>

      <div className="col-xl-4">
        <div className="relative d-flex ml-35 xl:ml-0">
          <div className="d-flex justify-center items-end col-12 h-full z-1 px-35">

          <div className="row y-gap-20">
            <div className="col-12">
              <h2 className="text-22 fw-500">General info</h2>
            </div>
              <GeneralInfo 
                timeZone={destination?.timeZone} 
                timeBehind={destination?.timeBehind} 
                currency={destination?.currency} 
                exchange={destination?.exchange} 
                bestTimeToVisit={destination?.bestTimeToVisit} 
              />
            
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroTown;
