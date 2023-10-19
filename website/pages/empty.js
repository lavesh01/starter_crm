import Seo from "../components/common/Seo"
import DefaultFooter from "../components/footer/default";
import Header1 from "../components/header/default-header";
import Hero1 from "../components/hero/hero-1";
import AddBanner from "../components/add-banner/AddBanner";
import SelectFilter from "../components/hotels/filter-tabs/SelectFilter";
import Hotels from "../components/hotels/Hotels";
import BlockGuide from "../components/block/BlockGuide";
import TestimonialRating from "../components/home/TestimonialRating";
import Destinations from "../components/home/Destinations";
import Blog from "../components/blog/Blog3";
import Testimonial from "../components/home/Testimonial";
import CallToActions from "../components/common/CallToActions";

const Empty = () => {
  return (
    <>
    <Seo
        pageTitle="Home" 
        metaTitle="Eurasia Global DMC - Your Gateway to Extraordinary Journeys" 
        metaDescription="Explore the world with Eurasia Global DMC - your trusted travel partner offering unique and unforgettable travel experiences. Discover amazing destinations and create lifelong memories." 
        ogImage={`${process.env.BASE_URL}/img/seo/home-page.png`}
        ogImageAlt="home-page-image" 
        twitterHandle="@eurassia" 
        canonicalUrl={`${process.env.BASE_URL}/home`} 
        robotsContent="index, follow"
        keywords="Travel Experiences, Adventure Travel, Vacation Destinations, Custom Travel Packages, Explore Journeys, Holiday Planning, Wanderlust Adventures, Travel Inspiration, Discover New Places, Memorable Trips"
      />
      
      <Header1 />
        
      <Hero1 />

      <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Destinations</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
            {/* <PopularDestinations /> */}
          <div className="relative pt-40 sm:pt-20">
          </div>
          </div>
        </section>

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20">
            <AddBanner />
          </div>
        </div>
      </section>


      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-10 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Recommended</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Discover Our Handpicked Collection of Exceptional Hotels - Your Ideal Stay Awaits!
                </p>
              </div>
            </div>
            <div className="col-sm-auto">
              <SelectFilter />
            </div>
          </div>

          <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider item_gap-x30">
            <Hotels />
          </div>
        </div>
      </section>

      
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between">
            <BlockGuide />
          </div>
        </div>
      </section>

      
      <section className="layout-pt-lg layout-pb-lg bg-dark-3">
        <div className="container">
          <div className="row y-gap-60">
            <div className="col-xl-5 col-lg-6">
              <TestimonialRating />
            </div>

            <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1 col-md-10">
              <Testimonial />
            </div>
          </div>

        </div>
      </section>

      
      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Get inspiration for your next trip
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Explore Travel Blogs for Ultimate Adventure Inspiration
                </p>
              </div>
            </div>
          </div>
          <div className="row y-gap-30 pt-40">
            <Blog />
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Destinations we love</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Embark on a Journey to Our Beloved Destinations
                </p>
              </div>
            </div>
          </div>

          <div className="tabs -pills pt-40 js-tabs">
            <Destinations />
          </div>
        </div>
      </section>

      <CallToActions />
        
      <DefaultFooter />
    </>
  );
};

export default Empty;
