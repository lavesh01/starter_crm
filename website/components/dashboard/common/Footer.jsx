import Link from "next/link";
import React from "react";

function Footer() {
  const linksData = [
    { label: "Privacy", url: "#" },
    { label: "Terms", url: "#" },
    { label: "Site Map", url: "/sitemap.xml" },
    { label: "Rss Feed", url: "/b2bDmc" },
  ];

  return (
    <footer className="footer -dashboard mt-60">
      <div className="footer__row row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="row y-gap-20 items-center">
            <div className="col-auto">
              <div className="text-14 lh-14 mr-30">
                © {new Date().getFullYear()} Eurasia All rights reserved.
              </div>
            </div>

            <div className="col-auto">
              <div className="row x-gap-20 y-gap-10 items-center text-14">
                {linksData.map((link, index) => (
                  <div className="col-auto" key={index}>
                    <Link href={link.url} className="text-13 lh-1">
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-auto">
          <div className="d-flex x-gap-5 y-gap-5 items-center">
            <button className="text-14 fw-500 underline">English (US)</button>
            <button className="text-14 fw-500 underline">INR</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
