import Social from "../../common/social/Social";
import Link from "next/link";

const Copyright = () => {
  return (
    <div className="row justify-between items-center y-gap-10">
      <div className="col-auto">
        <div className="row x-gap-30 y-gap-10">
          <div className="col-auto">
            <div className="d-flex items-center">
              © {new Date().getFullYear()} 
              <span className="mx-2"> 
                by Eurasia All rights reserved.
              </span>
            </div>
          </div>

          <div className="col-auto">
            <div className="d-flex x-gap-15">
              <Link href="#">Privacy</Link>
              <Link href="#">Terms</Link>
              <Link href="/sitemap.xml">Site Map</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-auto">
        <div className="row y-gap-10 items-center">
          <div className="col-auto">
            <div className="d-flex items-center">
              <button className="d-flex items-center text-14 fw-500 text-dark-1 mr-10">
                <i className="icon-globe text-16 mr-10" />
                <span className="underline">English (US)</span>
              </button>
              <button className="d-flex items-center text-14 fw-500 text-dark-1">
                <span className="text-16 mr-10" > ₹ </span>
                <span className="underline">INR</span>
              </button>
            </div>
          </div>

          <div className="col-auto">
            <div className="d-flex x-gap-20 items-center">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
