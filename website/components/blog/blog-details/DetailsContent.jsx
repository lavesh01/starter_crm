import Social2 from "../../common/social/Social2";
import blogsData from "../../../data/blogs";
import Link from "next/link";

const DetailsContent = ({blog}) => {
  return (
    <>
      <h3 className="text-20 fw-500">{blog.title}</h3>
      <div className="text-15 mt-20">
        {blog.details}
      </div>

      <div className="row y-gap-20 justify-between pt-30">
        <div className="col-auto">
          <div className="d-flex items-center">
            <div className="fw-500 mr-10">Share</div>
            <div className="d-flex items-center">
              <Social2 />
            </div>
          </div>
        </div>
        {/* End social share */}

        <div className="col-auto">
          <div className="row x-gap-10 y-gap-10">
            {blogsData.slice(0, 3).map((item) => (
              <div key={item.id} className="col-auto">
                <Link
                  href={`/blog/blog-details/${item.param}`}
                  className="button -blue-1 py-5 px-20 bg-blue-1-05 rounded-100 text-15 fw-500 text-blue-1 text-capitalize"
                >
                  {item.tag}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* End tags */}
      </div>
    </>
  );
};

export default DetailsContent;
