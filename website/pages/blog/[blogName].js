import React, { useEffect, useState } from "react";

import CallToActions from "../../components/common/CallToActions";
import DefaultFooter from "../../components/footer/default";
import DefaultHeader from "../../components/header/default-header";
import DetailsContent from "../../components/blog/blog-details/DetailsContent";
import Image from "next/image";
import RelatedBlog from "../../components/blog/blog-details/RelatedBlog";
import Seo from "../../components/common/Seo";
import blogsData from "../../data/blogs";
import { useRouter } from "next/router";

const BlogSingleDynamic = () => {
  const router = useRouter();
  const [blog, setBlogItem] = useState({});
  const blogName = router.query.blogName;

  useEffect(() => {
    const foundBlog = blogsData.find((item) => item.param == blogName);
    if (!blogName) <h1>Loading...</h1>;
    else if (!foundBlog) {
      router.push('/404')
      return;
    }
    else setBlogItem(foundBlog);
  }, [blogName,router]);

  return (
    <>
      <Seo 
        pageTitle="Blogs"
        metaTitle={`Explore ${blog?.title} - Where Tradition Meets Modernity`}
        metaDescription={`Discover the rich cultural tapestry of ${blog?.title}, where modernity seamlessly blends with ancient traditions. Immerse yourself in the city's history, architecture, and vibrant culture.`}
        ogImage="/img/seo/blog-page.PNG"
        ogImageAlt={`${blog?.title} Blog Image`}
        twitterHandle="@eurassia"
        canonicalUrl={`${process.env.BASE_URL}${blog?.routePath}`}
        robotsContent="index, follow"
        keywords={`${blog?.title}, ${blog?.tag}, ${blog?.param}, tradition, modernity, culture`}
      />

      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-40 justify-center text-center">
            <div className="col-auto">
              <div className="text-15 fw-500 text-blue-1 mb-8 text-capitalize">
                {blog?.tag}
              </div>
              <h1 className="text-30 fw-600">{blog?.title}</h1>
              <div className="text-15 text-light-1 mt-10">{blog?.date}</div>
            </div>
            <div className="col-12">
              <Image
                src={blog?.img}
                alt={blog?.title}
                className="col-12 rounded-8 w-100 img_large_details"
              />
            </div>
          </div>
          {/* End .row top bar image and title */}

          <div className="row y-gap-30 justify-center">
            <div className="col-xl-8 col-lg-10 layout-pt-md">
              <DetailsContent blog={blog} />
              {/* Details content */}

            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Details Blog Details Content */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Related content</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                More Global Stories to Uncover
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40">
            <RelatedBlog />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Related Content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default BlogSingleDynamic;
