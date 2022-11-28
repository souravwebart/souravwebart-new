import React from "react";

import Image from "next/image";
import Rocket2 from "../public/Image/sourav gupta (2).png";
import Link from "next/link";

function HomeComponent() {
  return (
    <div
      style={{ minHeight: "100vh", position: "relative" }}
      className="hometop"
    >
      <div className="container">
        <div className="row">
          <div className="col col-12" style={{ margin: "auto" }}>
            <div style={{ paddingTop: "25vh" }}>
              <div className="Topheading">
                <h1>
                  Goal-oriented professional<br></br> targeting challenging
                  assignments in <br></br>PROJECT EXECUTION & DELIVERY / WEB
                  DESIGN &
                </h1>
                <br></br>
                <p>
                  <span className="Gradiant-heading">
                    FRONT-END DEVELOPMENT
                  </span>{" "}
                  World...
                </p>
              </div>
              <Link href="/about">
                <a
                  data-scroll-to="true"
                  className="header__hero--cta Gradiant-heading "
                >
                  Lets Start to know me
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ bottom: 0, right: "20px", position: "absolute" }}
        className="moving-rocket"
      >
        <Image src={Rocket2} alt="souravwebart" width={300} height={200} />
      </div>
    </div>
  );
}

export default HomeComponent;
