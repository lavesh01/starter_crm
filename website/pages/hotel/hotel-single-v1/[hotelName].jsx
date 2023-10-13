import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import { useEffect, useState } from "react";

import CallToActions from "../../../components/common/CallToActions";
import DefaultFooter from "../../../components/footer/default";
import Facilities from "../../../components/hotel-single/Facilities";
import Header1 from "../../../components/header/default-header/index";
import Hotels2 from "../../../components/hotels/Hotels2";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import Overview from "../../../components/hotel-single/Overview";
import PopularFacilities from "../../../components/hotel-single/PopularFacilities";
import PropertyHighlights from "../../../components/hotel-single/PropertyHighlights";
import RatingTag from "../../../components/hotel-single/RatingTag";
import Seo from "../../../components/common/Seo";
import SidebarRight from "../../../components/hotel-single/SidebarRight";
import StickyHeader from "../../../components/hotel-single/StickyHeader";
import TopBreadCrumb from "../../../components/hotel-single/TopBreadCrumb";
import dynamic from "next/dynamic";
import { hotelsData } from "../../../data/hotels";
import { useRouter } from "next/router";

const HotelSingleV1Dynamic = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const [hotel, setHotel] = useState({});
  const hotelName = router.query.hotelName;
  console.log(hotelName)

  useEffect(() => {
    const foundHotel = hotelsData.find((item) => item.param == hotelName);
    if (!hotelName) <h1>Loading...</h1>;
    else if (!foundHotel) {
      router.push('/404')
      return;
    }
    else setHotel(foundHotel);
  }, [hotelName]);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="oqNZOOWF8qM"
        onClose={() => setOpen(false)}
      />

      <Seo pageTitle="Hotel Single v1" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header1 />
      {/* End Header 1 */}

      <TopBreadCrumb hotel={hotel?.title} />
      {/* End top breadcrumb */}

      <StickyHeader href={hotel?.btnHref} />
      {/* sticky single header for hotel single */}

      <section className="pt-40">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="row x-gap-20  items-center">
                <div className="col-auto">
                  <h1 className="text-30 sm:text-25 fw-600">{hotel?.title}</h1>
                </div>
                {/* End .col */}
                <div className="col-auto">
                  <i className="icon-star text-10 text-yellow-1" />
                  <i className="icon-star text-10 text-yellow-1" />
                  <i className="icon-star text-10 text-yellow-1" />
                  <i className="icon-star text-10 text-yellow-1" />
                  <i className="icon-star text-10 text-yellow-1" />
                </div>
              </div>
              {/* End .row */}

              <div className="row x-gap-20 y-gap-20 items-center">
                <div className="col-auto">
                  <div className="d-flex items-center text-15 text-light-1">
                    <i className="icon-location-2 text-16 mr-5" />
                    {hotel?.location}
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="row x-gap-15 y-gap-15 items-center">
                <div className="col-auto">
                  <Link
                    href={`${hotel?.btnHref}`}
                    target="_blank"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  >
                    Book Hotel <div className="icon-arrow-top-right ml-15" />
                  </Link>
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <Gallery>
            <div className="galleryGrid -type-1 pt-30">
              <div className="galleryGrid__item relative d-flex">
                <Item
                  original={hotel?.img}
                  thumbnail={hotel?.img}
                  width={660}
                  height={660}
                >
                  {({ ref, open }) => (
                    <img
                      src={hotel?.img}
                      ref={ref}
                      onClick={open}
                      alt="image"
                      role="button"
                      className="rounded-4"
                    />
                  )}
                </Item>
                <div className="absolute px-20 py-20 col-12 d-flex justify-end">
                  <button className="button -blue-1 size-40 rounded-full flex-center bg-white text-dark-1">
                    <i className="icon-heart text-16" />
                  </button>
                </div>
              </div>
              {/* End .galleryGrid__item */}

              <div className="galleryGrid__item">
                <Item
                  original="/img/gallery/1/2.png"
                  thumbnail="/img/gallery/1/2.png"
                  width={450}
                  height={375}
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src="/img/gallery/1/2.png"
                      alt="image"
                      className="rounded-4"
                      role="button"
                    />
                  )}
                </Item>
              </div>
              {/* End .galleryGrid__item */}

              <div className="galleryGrid__item relative d-flex">
                <img
                  src="/img/gallery/1/3.png"
                  alt="image"
                  className="rounded-4"
                  role="button"
                />
                <div className="absolute h-full col-12 flex-center">
                  <div
                    className="button -blue-1 size-40 rounded-full flex-center bg-white text-dark-1 js-gallery"
                    role="button"
                    onClick={() => setOpen(true)}
                  >
                    <i className="icon-play text-16" />
                  </div>
                </div>
              </div>
              {/* End .galleryGrid__item */}

              <div className="galleryGrid__item">
                <Item
                  original="/img/gallery/1/4.png"
                  thumbnail="/img/gallery/1/4.png"
                  width={450}
                  height={375}
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src="/img/gallery/1/4.png"
                      alt="image"
                      className="rounded-4"
                      role="button"
                    />
                  )}
                </Item>
              </div>
              {/* End .galleryGrid__item */}

              <div className="galleryGrid__item relative d-flex">
                <img
                  src="/img/gallery/1/5.png"
                  alt="image"
                  className="rounded-4"
                />
                <div className="absolute px-10 py-10 col-12 h-full d-flex justify-end items-end">
                  <Item
                    original="/img/gallery/1/5.png"
                    thumbnail="/img/gallery/1/5.png"
                    width={450}
                    height={375}
                  >
                    {({ ref, open }) => (
                      <div
                        className="button -blue-1 px-24 py-15 bg-white text-dark-1 js-gallery"
                        ref={ref}
                        onClick={open}
                        role="button"
                      >
                        See All Photos
                      </div>
                    )}
                  </Item>
                </div>
              </div>
              {/* End .galleryGrid__item */}
            </div>
          </Gallery>
        </div>
        {/* End .container */}
      </section>
      {/* End gallery grid wrapper */}

      <section className="pt-30">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-8">
              <div className="row y-gap-40">
                <div className="col-12">
                  <h3 className="text-22 fw-500">Property highlights</h3>
                  <PropertyHighlights />
                </div>
                {/* End .col-12 Property highlights */}

                <div id="overview" className="col-12">
                  <Overview overview={hotel?.overview} />
                </div>
                {/* End .col-12  Overview */}

                <div className="col-12">
                  <h3 className="text-22 fw-500 pt-40 border-top-light">
                    Most Popular Facilities
                  </h3>
                  <div className="row y-gap-10 pt-20">
                    <PopularFacilities />
                  </div>
                </div>
                {/* End .col-12 Most Popular Facilities */}

                <div className="col-12">
                  <RatingTag />
                </div>
                {/* End .col-12 This property is in high demand! */}
              </div>
              {/* End .row */}
            </div>
            {/* End .col-xl-8 */}

            <div className="col-xl-4">
              <SidebarRight hotel={hotel} />
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End single page content */}


      <section className="mt-40" id="facilities">
        <div className="container">
          <div className="row x-gap-40 y-gap-40">
            <div className="col-12">
              <h3 className="text-22 fw-500">Facilities of this Hotel</h3>
              <div className="row x-gap-40 y-gap-40 pt-20">
                <Facilities />
              </div>
              {/* End .row */}
            </div>
            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End facilites section */}

      <section className="pt-40">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="px-24 py-20 rounded-4 bg-light-2">
                <div className="row x-gap-20 y-gap-20 items-center">
                  <div className="col-auto">
                    <div className="flex-center size-60 rounded-full bg-white">
                      <Image
                        width={30}
                        height={30}
                        src="/img/icons/health.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                  <div className="col-auto">
                    <h4 className="text-18 lh-15 fw-500">
                      Extra health &amp; safety measures
                    </h4>
                    <div className="text-15 lh-15">
                      This property has taken extra health and hygiene measures
                      to ensure that your safety is their priority
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End health &  safety measures section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Popular properties similar to {hotel?.title}
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Explore Our Top Hotel Selections in the Area
                </p>
              </div>
              {/* End sectionTitle */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="pt-40 sm:pt-20 item_gap-x30">
            <Hotels2 />
          </div>
          {/* End slide hotel */}
        </div>
        {/* End .container */}
      </section>
      {/* End similar hotel */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(HotelSingleV1Dynamic), {
  ssr: false,
});
