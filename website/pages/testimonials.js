import CallToActions from "../components/common/CallToActions";
import DefaultFooter from "../components/footer/default";
import DefaultHeader from "../components/header/default-header";
import Seo from "../components/common/Seo";
import Testimonial from "../components/home/home-1/Testimonial";
import dynamic from "next/dynamic";
import TestimonialLeftCol from './../components/home/home-1/TestimonialLeftCol';

const Testimonials = () => {
  return (
    <>
      <Seo pageTitle="Testimonials" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

    
      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <TestimonialLeftCol />
            </div>
            {/* End col */}

            <div className="col-lg-6">
              <div
                className="overflow-hidden js-testimonials-slider-3"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Testimonial />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End testimonial Section */}



      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Testimonials), { ssr: false });
