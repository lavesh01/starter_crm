
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Seo from "./common/Seo";

const SeoDynamicPageData =  ({destination}) => {

  return (
    <>
      <Seo
        pageTitle="Destination"
        metaTitle={`Discover ${destination?.country} - Explore Attractions, Culture, and More`}
        metaDescription={`Plan your trip to ${destination?.country} with Eurasia. Learn about the attractions, culture, cuisine, and more to make the most of your travel experience.`}
        ogImage={`/img/seo/destination-page.PNG`}
        ogImageAlt={`${destination?.country}-page-image`}
        twitterHandle="@eurassia"
        canonicalUrl={`${process.env.BASE_URL}/destination/${destination?.param}`}
        robotsContent="index, follow"
        keywords={`${destination?.country} Travel, ${destination?.country} Attractions, ${destination?.country} Culture, ${destination?.country} Cuisine, Eurasia Destination`}
      />

    </>
  );
};

export default SeoDynamicPageData;
