import DateSearch from "../DateSearch";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";
import Router from "next/router";

const MainFilterSearchBox = () => {
  return (
    <>
      <div className="mainSearch -col-5 -w-1070 mx-auto bg-white pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 shadow-1">
        <div className="button-grid items-center">
          {/* End Pickup Location */}

          <LocationSearch />
          {/* End Drop off location  */}
          <div className="searchMenu-date px-20 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">Dates</h4>
              <DateSearch />
            </div>
          </div>
          {/* End Pick Up Date */}
          <GuestSearch />
          {/* End guest */}
          <div className="searchMenu-date px-20 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">Email</h4>
              <input type="email" name="email" id="email" required placeholder="email"/>
            </div>
          </div>
          <div className="searchMenu-date px-20 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">Phone</h4>
              <input type="text" name="phone" id="phone" required placeholder="phone"/>
            </div>
          </div>
          <div className="button-item">
            <button
              className="mainSearch__submit button  py-15 px-35 h-60 col-12 rounded-4 bg-dark-1 -blue-1 text-white"
              onClick={() => Router.push("/car/car-list-v2")}
            >
              <i className="icon-search text-20 mr-10" />
              Get&nbsp;Query
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;
