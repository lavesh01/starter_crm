import Head from "next/head";

const Seo = ({ pageTitle, metaTitle, metaDescription  }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || Eurasia Global DMC`}
      </title>
      {metaTitle && <meta name="title" content={metaTitle} />}
      {metaDescription && <meta name="description" content={metaDescription} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  </>
);

export default Seo;
