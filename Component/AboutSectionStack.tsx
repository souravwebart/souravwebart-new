import Image from "next/image";
import React from "react";
import { AiFillRightCircle } from "react-icons/ai";

function AboutSectionStack() {
  return (
    <div className="AboutSectionStack" style={{ padding: "80px 0px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 stack_heading_section_col">
            <div className="stack_heading_section">
              <div className="heading_section">
                <h2>
                  <AiFillRightCircle
                    size={40}
                    style={{ paddingRight: "7px" }}
                  />
                  Front-End Development
                </h2>
                <p>
                  The main area of my expertise is front-end development, HTML,
                  CSS, JS, building small and medium web apps, custom features,
                  animations, and coding interactive layouts.
                </p>
              </div>
              <div className="heading_section">
                <h2>
                  <AiFillRightCircle
                    size={40}
                    style={{ paddingRight: "7px" }}
                  />
                  Full-Stack Development
                </h2>
                <p>
                  I have knowledge of Front-End as well as Back-End Developing.
                  My basket knowledge contains HTML, CSS, javascript, bootstrap,
                  jquery, PHP, MySQL, node.js, mongodb and many more. Acquiring
                  knowledge has no limit, So I keep on learning and trying to
                  increase my knowledge.
                </p>
              </div>
              <div className="heading_section">
                <h2>
                  <AiFillRightCircle
                    size={40}
                    style={{ paddingRight: "7px" }}
                  />
                  Wordpress Development
                </h2>
                <p>
                  I create successful responsive websites that are fast, easy to
                  use, and built with best practices. The main area of my
                  expertise in WordPress Development is the theme, Woocommerce
                  development, Elementor designing, adding features, and many
                  more.
                </p>
              </div>
              <div className="heading_section">
                <h2>
                  <AiFillRightCircle
                    size={40}
                    style={{ paddingRight: "7px" }}
                  />
                  Search Engine Optimization (SEO)
                </h2>
                <p>
                  I have knowledge of off-page and on-page SEO, High DA Link
                  Building, Local SEO, Business Listing, Social Media Marketing,
                  Google Search Console, Google Analytics, Keyword placement,
                  keyword research, Google Adwords, Google, Bing search engine,
                  SEO tools like ahref, Semrush and many more. .
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="stack_section">
              <div className="card">
                <div className="card-block">
                  <Image
                    src="../public/Image/frontend.png"
                    alt={"frontend"}
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <div className="card">
                <div className="card-block">
                  <Image
                    src="../public/Image/frontend (1).png"
                    alt={"frontend"}
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
            <div className="stack_section">
              <div className="card">
                <div className="card-block">
                  <Image
                    src="../public/Image/frontend (2).png"
                    alt={"frontend"}
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <div className="card">
                <div className="card-block">
                  <Image
                    src="../public/Image/frontend (3).png"
                    alt={"frontend"}
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSectionStack;
