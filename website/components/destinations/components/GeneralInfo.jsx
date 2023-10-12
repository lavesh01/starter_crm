const GeneralInfo = ({timeZone,timeBehind, currency, exchange,bestTimeToVisit}) => {
  
  return (
    <>
      <div className="col-xl-3 col-6">
        <div className="text-15">Time Zone</div>
        <div className="fw-500">{timeZone}</div>
        <div className="text-15 text-light-1">{timeBehind}</div>
      </div>
      {/* End .col */}

      <div className="col-xl-3 col-6">
        <div className="text-15">Currency</div>
        <div className="fw-500">{currency}</div>
        <div className="text-15 text-light-1">{exchange}</div>
      </div>
      {/* End .col */}

      <div className="col-xl-3 col-6">
        <div className="text-15">Best time to visit</div>
        <div className="row y-gap-20">
          <div className="col-auto">
            <div className="fw-500">{bestTimeToVisit}</div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .col */}
    </>
  );
};

export default GeneralInfo;
