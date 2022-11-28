import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaGit } from "react-icons/fa";
import Rocket2 from "../public/Image/sourav gupta (2).png";
import Image from "next/image";
import Link from "next/link";

function SocialSection() {
  return (
    <div className="socialsection" style={{ marginBottom: "70px" }}>
      <div className="container">
        <div className="abovesocialSection">
          <h1>Find Me on</h1>
          <p>
            I am happy to discuss a eye-catching project to your needs. You can
            find me on below social media platforms/ professional platforms.
          </p>
          <Image src={Rocket2} alt="souravwebart" width={300} height={130} />
        </div>
        <div className="social_section_grid">
          <div className="social-media-platform">
            <Link
              href="https://www.facebook.com/sguptacoding"
              style={{ cursor: "pointer" }}
            >
              <a>
                {" "}
                <FaFacebookF size={30} color={"#fff"} />
                <h2>Facebook</h2>
              </a>
            </Link>
          </div>
          <div className="social-media-platform">
            <Link
              href="https://www.instagram.com/souravwebart/"
              style={{ cursor: "pointer" }}
            >
              <a>
                <FaInstagram size={30} color={"#fff"} />
                <h2>Instragram</h2>
              </a>
            </Link>
          </div>
          <div className="social-media-platform">
            <Link
              href="https://www.linkedin.com/in/souravwebart/"
              style={{ cursor: "pointer" }}
            >
              <a>
                <FaLinkedinIn size={30} color={"#fff"} />
                <h2>Linkedin</h2>
              </a>
            </Link>
          </div>
          <div className="social-media-platform">
            <Link
              href="https://github.com/souravwebart"
              style={{ cursor: "pointer" }}
            >
              <a>
                {" "}
                <FaGit size={30} color={"#fff"} />
                <h2>Github</h2>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialSection;
