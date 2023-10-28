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

      <div className="header-margin"></div>

        <h1 style={{textAlign: "center",padding: "6rem 0"}}>Coming Soon...</h1>

      <CallToActions />

      <DefaultFooter />
    </>
  );
};

export default ComingSoon;
