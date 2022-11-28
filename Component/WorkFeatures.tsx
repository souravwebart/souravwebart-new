import React from "react";
import Image from "next/image";

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
            <Image
              src="../public/Image/iifl.png"
              alt="souravwebart"
              width={150}
              height={75}
            />
          </div>
          <div className="company-logo">
            <Image
              src="../public/Image/fedaral.png"
              alt="souravwebart"
              width={150}
              height={75}
            />
          </div>
          <div className="company-logo">
            <Image
              src="../public/Image/scale.png"
              alt="souravwebart"
              width={150}
              height={75}
            />
          </div>
          <div className="company-logo">
            <Image
              src="../public/Image/eatsure.png"
              alt="souravwebart"
              width={150}
              height={75}
            />
          </div>
          <div className="company-logo">
            <Image
              src="../public/Image/AArtisto (1).png"
              alt="souravwebart"
              width={150}
              height={75}
            />
          </div>
          <div className="company-logo">
            <Image
              src="../public/Image/civilworks.png"
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
