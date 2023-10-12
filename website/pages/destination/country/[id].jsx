import dynamic from "next/dynamic";
import CallToActions from "../../../components/common/CallToActions";
import Seo from "../../../components/common/Seo";
import DefaultHeader from "../../../components/header/default-header";
import DefaultFooter from "../../../components/footer/default";
import TestimonialLeftCol from "../../../components/home/home-1/TestimonialLeftCol";
import Testimonial from "../../../components/home/home-1/Testimonial";
import Link from "next/link";
import Blog from "../../../components/blog/Blog3";
import LocationTopBar from "../../../components/common/LocationTopBar";
import Banner from "../../../components/destinations/components/Banner";
import Categories from "../../../components/destinations/components/Categories";
import IntroTown from "../../../components/destinations/components/IntroTown";
import GeneralInfo from "../../../components/destinations/components/GeneralInfo";
import Tours from "../../../components/tours/Tours";
import Activity from "../../../components/activity/Activity";
import Hotels from "../../../components/hotels/Hotels2";
import { useRouter } from "next/router";
import { destinations } from "../../../data/desinations";
import { useState, useEffect } from "react";

const Destinations = () => {
  const router = useRouter();
  const [destination, setDestination] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setDestination(destinations.find((item) => item.id == id));
    return () => {};
  }, [id]);

  return (
    <>
      <Seo 
        pageTitle="Destination Details"
        metaTitle={`Discover ${destination?.country} - Explore Attractions, Culture, and More`}
        metaDescription={`Plan your trip to ${destination?.country} with Eurasia Global DMC. Learn about the attractions, culture, cuisine, and more to make the most of your travel experience.`}
      />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <LocationTopBar country={destination?.country} />
      {/* End location top bar section */}

      <section className="layout-pb-md">
        <div className="container">
          <div className="row">
            <Banner destination={destination} />
          </div>
          {/* End .row */}

          <div className="row x-gap-20 y-gap-20 items-center pt-20 item_gap-x10">
            <Categories />
          </div>
          {/* End .row */}

          <div className="row y-gap-20 pt-40">
            <div className="col-auto">
              <h2>What to know before visiting {destination?.country}</h2>
            </div>
            {/* End .col-auto */}

            <IntroTown description={destination?.description} />
          </div>
          {/* End .row */}

          <div className="pt-30 mt-30 border-top-light" />
          {/* border separation */}

          <div className="pt-30 mt-30 border-top-light" />
          <div className="row y-gap-20">
            <div className="col-12">
              <h2 className="text-22 fw-500">General info</h2>
            </div>
            {/* End .col */}
            <GeneralInfo timeZone={destination?.timeZone} timeBehind={destination?.timeBehind} currency={destination?.currency} exchange={destination?.exchange} bestTimeToVisit={destination?.bestTimeToVisit} />
          </div>
          {/* End .row */}
          <div className="mt-30 border-top-light" />
          {/* border separation */}
        </div>
        {/* End .container */}
      </section>
      {/* End Top Banner,categorie,intro,weather, generic info section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Recommended Hotels</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Discover Our Handpicked Collection of Exceptional Hotels - Your Ideal Stay Awaits!
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Hotels />
          </div>
          {/* End relative */}
        </div>
      </section>
      {/* End  Hotel sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Most Popular Tours</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Tours Sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Trending Activity</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Activity />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Trending Activity Sections */}


      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Get inspiration for your next trip
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
                </p>
              </div>
            </div>
          </div>
          {/* End .row  */}
          <div className="row y-gap-30 pt-40">
            <Blog />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Section */}

      <section className="layout-pt-lg layout-pb-lg bg-light-2">
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

export default dynamic(() => Promise.resolve(Destinations), { ssr: false });
