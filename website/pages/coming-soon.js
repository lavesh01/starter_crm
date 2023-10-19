import CallToActions from "../components/common/CallToActions";
import DefaultFooter from "../components/footer/default";
import DefaultHeader from "../components/header/default-header";
import Seo from "../components/common/Seo";

const ComingSoon = () => {
  return (
    <>
      <Seo 
        pageTitle="Cooming Soon"
      />
      <DefaultHeader />
      {/* End Header 1 */}

      <div className="header-margin"></div>
      {/* header top margin */}


        <h1 style={{textAlign: "center",padding: "6rem 0"}}>Coming Soon...</h1>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default ComingSoon;
