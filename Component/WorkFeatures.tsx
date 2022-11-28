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
            <Image src="/iifl.png" alt="souravwebart" width={150} height={75} />
          </div>
          <div className="company-logo">
            <Image
              src="/fedaral.png"
              alt="souravwebart"
              width={150}
              height={75}
            />
          </div>
          <div className="company-logo">
            <Image
              src="/scale.png"
              alt="souravwebart"
              width={150}
              height={75}
            />
          </div>
          <div className="company-logo">
            <Image
              src="/eatsure.png"
              alt="souravwebart"
              width={150}
              height={75}
            />
          </div>
          <div className="company-logo">
            <Image
              src="/AArtisto (1).png"
              alt="souravwebart"
              width={150}
              height={75}
            />
          </div>
          <div className="company-logo">
            <Image
              src="/civilworks.png"
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
