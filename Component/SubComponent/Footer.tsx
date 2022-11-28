import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <h1>Front-End Web Developer and SEO Specialist</h1>
          <h2>Lets Work Together </h2>
          <h3 className="footerh3">
            Have a project you would like to discuss?
          </h3>
          <Link href="/contact">
            <a
              data-scroll-to="true"
              className="header__hero--cta_footer Footer-heading "
            >
              Lets Talk!
            </a>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="copyrightfooter">
            <h1>Copyright @2022 Developed by Sourav Gupta</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
