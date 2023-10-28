import CallToActions from "../components/common/CallToActions";
import DefaultFooter from "../components/footer/default";
import DefaultHeader from "../components/header/default-header";
import NotFound from "../components/common/NotFound";
import Seo from "../components/common/Seo";

const index = () => {
  return (
    <>
      <Seo pageTitle="404" />

      <div className="header-margin"></div>

      <DefaultHeader />

      <NotFound />

      <CallToActions />

      <DefaultFooter />
    </>
  );
};

export default index;
