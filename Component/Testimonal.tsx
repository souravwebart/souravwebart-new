import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonal() {
  return (
    <div className="testimonials_section" style={{ padding: "80px 0px" }}>
      <div className="testimonial_section_details">
        <div className="testimonial_avatar">
          <div style={{ marginBottom: "-6px" }}>
            <Image
              src="../public/Image/Aashirvad-Kumar.png"
              alt={"Aashirvad-Kumar"}
              width={400}
              height={350}
              id={"testimonialavatar"}
            />
          </div>
        </div>
        <div className="testimonial-text">
          <span>
            <FaQuoteLeft size={30} color={"#372169"} />
          </span>
          <h2>
            He has great command of many languages. Personally, it feels good
            when you have such a knowledgeable person on your team.
          </h2>
          <h3>Aashirvad Kumar</h3>
          <p>Founder & CEO @ OptimizeForSEO - Digital Marketing Agency</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonal;
