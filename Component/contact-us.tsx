import React, { useState } from "react";
import Image from "next/image";
import Email from "../public/images/email (1).png";
import WhatsApp from "../public/images/whatsapp (1).png";
import Telegram from "../public/images/telegram (1).png";
import { BsFillPencilFill, BsGlobe, BsSearch } from "react-icons/bs";

function contactUs() {
  return (
    <div className="contact-us" style={{ marginTop: "80px" }}>
      <div className="container">
        <div className="row">
          <div className="contact-us_start">
            <div
              className="contact_us_left"
              style={{ margin: "80px 0px 20px 0px", minWidth: "300px" }}
            >
              <div className="contactcard">
                <div className="contact-row">
                  <div>
                    {" "}
                    <Image src={Email} alt={"email"} width={20} height={20} />
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <h1 className="contactcardh1">For any queries</h1>
                    <p className="contactcardtext">
                      Get Reply within 24-48 Hours
                    </p>
                    <div className="contactcardbtn">
                      <h2 className="contactcardbutton">
                        Guptasourav536@gmail.com
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="contact-row">
                  <div>
                    <Image
                      src={WhatsApp}
                      alt={"WhatsApp"}
                      width={20}
                      height={20}
                    />
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    {" "}
                    <h1 className="contactcardh1">Talk to me over WhatsApp</h1>
                    <p className="contactcardtext">Get Reply within 24 Hours</p>
                    <div className="contactcardbtn">
                      <a
                        className="contactcardbuttonanchor"
                        href="https://wa.me/7085548881?text=I%27m%20interested%20in%20your%20web%20development%20service"
                      >
                        <h2 className="contactcardbutton">Chat Now</h2>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="contact-row">
                  <div>
                    <Image
                      src={Telegram}
                      alt={"Telegram"}
                      width={20}
                      height={20}
                    />
                  </div>

                  <div style={{ marginLeft: "10px" }}>
                    <h1 className="contactcardh1">Talk to me over Telegram</h1>
                    <p className="contactcardtext">
                      Get Reply within 24-48 Hours
                    </p>
                    <div className="contactcardbtn">
                      <a
                        className="contactcardbuttonanchor"
                        href="https://t.me/Souravguptadeveloper"
                      >
                        <h2 className="contactcardbutton">Chat Now</h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="contact_us_right"
              style={{ margin: "80px 0px 20px 0px" }}
            >
              <div className="contact_us_heading">
                <div>
                  <h1>
                    If you wanna get in touch, talk to me about a project
                    collaboration feel free to contact me using the given
                    options. I will contact you as soon as possible within 24 to
                    48 hours.
                  </h1>
                </div>
                <div className="contact_us_card">
                  <div className="contact_card_box">
                    <BsFillPencilFill />
                    <h1>Website Design</h1>
                  </div>
                  <div className="contact_card_box">
                    <BsGlobe />
                    <h1>Website Development</h1>
                  </div>
                  <div className="contact_card_box">
                    <BsSearch />
                    <h1>Search Engine Optimization</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contactUs;
