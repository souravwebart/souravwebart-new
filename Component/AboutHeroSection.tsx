import React from "react";
import Image from "next/image";

function AboutHeroSection() {
  return (
    <div
      className="aboutHero_Section"
      style={{ padding: "150px 0px 80px 0px" }}
    >
      <div className="container">
        <div className="aboutHero_start">
          <div className="row">
            <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="About_sourav_Image">
                <Image
                  src="../public/Image/souravwebart (3).png"
                  alt={"sourav Gupta"}
                  width={600}
                  height={600}
                />
              </div>
            </div>
            <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 about_sourav_description_col">
              <div className="about_sourav_description">
                <p>
                  I am <strong>Sourav Gupta</strong>, a front-end developer
                  enthusiastic about making the web open to everybody and
                  upholding building open and comprehensive developer networks.
                  I love to share my knowledge and I will do so through this
                  site and other developing sites like Github. I am a Front-end
                  and SEO Specialist on HTML, CSS, Javascript, bootstrap,
                  jquery, and so on. Sometimes when I am not doing coding, you
                  can discover me geeking about photography, attempting new food
                  recipes, and investigating various methods of making content
                  that can assist interested people to pave the way to the
                  coding world.
                </p>
                <div className="sourav_signature">
                  <Image
                    src="../public/Image/souravsign (2).png"
                    alt="souravwebart"
                    width={200}
                    height={50}
                    id="sourav_signature_filter"
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

export default AboutHeroSection;
