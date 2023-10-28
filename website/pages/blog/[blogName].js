import React from "react";

import CallToActions from "../../components/common/CallToActions";
import DefaultFooter from "../../components/footer/default";
import DefaultHeader from "../../components/header/default-header";
import DetailsContent from "../../components/blog/blog-details/DetailsContent";
import Image from "next/image";
import RelatedBlog from "../../components/blog/blog-details/RelatedBlog";
import Seo from "../../components/common/Seo";
import blogsData from "../../data/blogs";

const BlogSingleDynamic = ({blog}) => {

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

      <div className="header-margin"></div>

      <DefaultHeader />

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
                width={550}
                height={550}
                priority={true}
                quality={60}
                className="col-12 rounded-8 w-100 img_large_details"
              />
            </div>
          </div>

          <div className="row y-gap-30 justify-center">
            <div className="col-xl-8 col-lg-10 layout-pt-md">
              <DetailsContent blog={blog} />

            </div>
          </div>
        </div>
      </section>

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

          <div className="row y-gap-30 pt-40">
            <RelatedBlog />
          </div>
        </div>
      </section>

      <CallToActions />

      <DefaultFooter />
    </>
  );
};

export default BlogSingleDynamic;

export async function getStaticPaths() {
  const paths = blogsData.map((blog) => ({
    params: { blogName: blog.param },
  }));

  return {
    paths,
    fallback: false, 
  };
}

export async function getStaticProps({ params }) {
  const { blogName } = params;
  const foundBlog = blogsData.find((blog) => blog.param === blogName);

  if (!foundBlog) {
    return {
      notFound: true, 
    };
  }

  return {
    props: {
      blog: foundBlog,
    },
  };
}

