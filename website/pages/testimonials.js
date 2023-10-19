import CallToActions from "../components/common/CallToActions";
import DefaultFooter from "../components/footer/default";
import DefaultHeader from "../components/header/default-header";
import Seo from "../components/common/Seo";
import Testimonial from "../components/home/Testimonial";
import TestimonialLeftCol from './../components/home/TestimonialLeftCol';

const Testimonials = () => {
  return (
    <>
      <Seo 
        pageTitle="Testimonials"
        metaTitle="Read What Our Clients Say - Testimonials"
        metaDescription="Explore testimonials and reviews from our happy clients. Discover how Eurasia has made their journeys memorable and extraordinary."
        ogImage="/img/seo/testimonials-page.PNG"
        ogImageAlt="testimonials-page-image"
        twitterHandle="@eurassia"
        canonicalUrl={`${process.env.BASE_URL}/testimonials`}
        robotsContent="index, follow"
        keywords="Testimonials, Client Reviews, Travel Experiences, Client Testimonials, Happy Clients, Eurasia Global DMC Testimonials"
      />

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

export default Testimonials;
