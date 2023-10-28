const GeneralInfo = ({timeZone,timeBehind, currency, exchange,bestTimeToVisit}) => {
  
  return (
    <>
      <div className="col-6">
        <div className="text-15">Time Zone</div>
        <div className="fw-500">{timeZone}</div>
        <div className="text-15 text-light-1">{timeBehind}</div>
      </div>
      
      <div className="col-6">
        <div className="text-15">Best&nbsp;time&nbsp;to&nbsp;visit</div>
          <div className="col-auto">
            <div className="fw-500">{bestTimeToVisit}</div>
          </div>
      </div>
      
      <div className="col-12">
        <div className="text-15">Currency</div>
        <div className="fw-500">{currency}</div>
        <div className="text-15 text-light-1">{exchange}</div>
      </div>

    </>
  );
};

export default GeneralInfo;
