import React, { useState } from "react";
import Image from "next/image";
import { BsFilterRight, BsXLg } from "react-icons/bs";
import Link from "next/link";

function Header() {
  const [show, setShow] = useState(true);

  const openMenu = () => {
    setShow(!show);
  };

  return (
    <div className="main_header">
      <div className="container">
        <div
          style={{
            top: "20px",
            left: "20px",
            position: "absolute",
            zIndex: 3,
            cursor: "pointer",
          }}
        >
          <Link href="/">
            <Image
              src={`./souravwebart.png`}
              alt="souravwebart"
              width={150}
              height={50}
            />
          </Link>
        </div>
        <input type="checkbox" id="active" onClick={openMenu} />
        <label htmlFor="active" className="menu-btn">
          {show ? (
            <BsFilterRight className="icon-menu" size={"3rem"} />
          ) : (
            <BsXLg />
          )}
        </label>
        <div className="wrapper ">
          <input type="checkbox" id="active" onClick={openMenu} />
          <label htmlFor="active" className="menu-btn">
            {show ? (
              <BsFilterRight className="icon-menu" size={"3rem"} />
            ) : (
              <BsXLg />
            )}
          </label>
          <ul>
            <li>
              <Link href="/">
                <a className="Gradiant-heading">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="Gradiant-heading">About</a>
              </Link>
            </li>
            <li>
              <Link href="/project">
                <a className="Gradiant-heading">Projects</a>
              </Link>
            </li>
            <li>
              <a className="Gradiant-heading" href="#">
                Blog <span>Coming Soon</span>
              </a>
            </li>
            <li>
              <Link href="/contact">
                <a className="Gradiant-heading">Lets talk!</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
