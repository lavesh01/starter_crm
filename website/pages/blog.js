import Blog1 from "../components/blog/Blog1";
import CallToActions from "../components/common/CallToActions";
import DefaultFooter from "../components/footer/default";
import DefaultHeader from "../components/header/default-header";
import React from "react";
import Seo from "../components/common/Seo";

const Blog = () => {
  return (
    <>
      <Seo 
        pageTitle="Blog"
        metaTitle="Explore Our Blog - Eurasia Global DMC"
        metaDescription="Read our latest blog posts and stay updated on travel trends, tips, and inspiring stories. Discover new destinations and plan your next adventure with Eurasia." 
        ogImage="/img/seo/blog-page.PNG"
        ogImageAlt="blog-page-image"
        twitterHandle="@eurassia"
        canonicalUrl={`${process.env.BASE_URL}/blog`}
        robotsContent="index, follow"
        keywords="Travel Blog, Travel Tips, Adventure Stories, Destination Insights, Travel Trends, Eurasia Global DMC Blog"
      />

      <div className="header-margin"></div>

      <DefaultHeader />

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Travel articles</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Wanderlust Chronicles: Unveiling World Wonders
                </p>
              </div>
            </div>
          </div>
          <Blog1 />
        </div>
      </section>

      <CallToActions />

      <DefaultFooter />
    </>
  );
};

export default Blog;
