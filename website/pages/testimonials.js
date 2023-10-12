import Brand2 from "../components/brand/Brand2";
import CallToActions from "../components/common/CallToActions";
import DefaultFooter from "../components/footer/default";
import DefaultHeader from "../components/header/default-header";
import Seo from "../components/common/Seo";
import Testimonial from "../components/home/home-1/Testimonial";
import TestimonialRating from "../components/home/home-1/TestimonialRating";
import dynamic from "next/dynamic";

const Testimonials = () => {
  return (
    <>
      <Seo pageTitle="Testimonials" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <section className="layout-pt-lg layout-pb-lg bg-dark-3">
        <div className="container">
          <div className="row y-gap-60">
            <div className="col-xl-5 col-lg-6">
              <TestimonialRating />
            </div>
            {/* End .col */}

            <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1 col-md-10">
              <Testimonial />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row justify-center text-center pt-60">
            <div className="col-auto">
              <div className="text-15 lh-1 text-white">
                Trusted by the world’s best
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="px-40 md:px-0">
            <div className="row y-gap-30 justify-between items-center pt-60 lg:pt-40">
              <Brand2 />
            </div>
          </div>
        </div>
      </section>
      {/* End testimonial and brand sections Section */}



      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Testimonials), { ssr: false });
