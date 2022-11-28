import React from "react";
import Image from "next/image";
import IIfl from "../public/Image/iifl.png";
import Fedaral from "../public/Image/fedaral.png";
import Scale from "../public/Image/scale.png";
import Eastsure from "../public/Image/eatsure.png";
import Aartisto from "../public/Image/AArtisto (1).png";
import CivilWorks from "../public/Image/civilworks.png";

function WorkFeatures() {
  return (
    <div
      className="top-company"
      style={{ backgroundColor: "#EFEFEF", padding: "20px 0px" }}
    >
      <div className="container top-company-work">
        <h1>Work for Top Companies</h1>
        <div className="top_company_section">
          <div className="company-logo">
            <Image src={IIfl} alt="souravwebart" width={150} height={75} />
          </div>
          <div className="company-logo">
            <Image src={Fedaral} alt="souravwebart" width={150} height={75} />
          </div>
          <div className="company-logo">
            <Image src={Scale} alt="souravwebart" width={150} height={75} />
          </div>
          <div className="company-logo">
            <Image src={Eastsure} alt="souravwebart" width={150} height={75} />
          </div>
          <div className="company-logo">
            <Image src={Aartisto} alt="souravwebart" width={150} height={75} />
          </div>
          <div className="company-logo">
            <Image
              src={CivilWorks}
              alt="souravwebart"
              width={150}
              height={75}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkFeatures;
