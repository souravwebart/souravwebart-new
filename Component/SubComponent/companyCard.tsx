import React from "react";
import Image from "next/image";

interface Props {
  item: companyInterface;
}
export interface companyInterface {
  id: number;
  name: string;
  imgURL: string;
  title: string;
}

function companyCard(Props: Props) {
  const { item } = Props;
  console.log("item", item);
  return (
    <div className="companycard" style={{ position: "relative" }}>
      <div className="companycard_section" style={{ display: "flex" }}>
        <div
          className="companycard_section_left"
          style={{ padding: "20px 0px" }}
        >
          <img
            src={`${item.imgURL}`}
            alt="company logo"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <div className="company_section_right" style={{ padding: "10px" }}>
          {item && item.name && <h2>{item.name}</h2>}
          {item && item.title && <p>{item.title}</p>}
        </div>
      </div>
      <div style={{ position: "absolute", bottom: -7, right: 0, opacity: 0.5 }}>
        <Image src="/bg.png" alt="bg" height={150} width={200} />
      </div>
    </div>
  );
}

export default companyCard;
