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
              src="https://lh3.googleusercontent.com/HFXcF-tM_OKEtRj6kICsL7eyHfnYDlnHve8vW2wwc3N6y71mN2F3etx6_m_pPOdLkfbeP6zq9E2OB0Trp1VvMt1OstZwZdxkR1hLuXthrRJBAEM4yUzcnqmRSCKXA4iuqybwzgmkpc9OoKuailbRH5vqOX-lWBQeWavrjT-su9t5d5oNIseLisz7piWFMTXqY5JuXusM4LiheufIF9jw2hKOk47rl1VAizAJGU7rcgyv8LABHN87RB-2HE0TVXAaQFGeLx34JWnaYHwbSths5ZLtW7NN8wwmMqvwhfCYOuoA_ekyV0OaTU1C_VqoZ98DRGfXz54t1EgvDfHxvI94CMS1IWJJI6T-Qw8oM8DdWqhYV2Sg19JzKmi6Cnpbd4sp9lKOOEif0zUCzxkn0wZ1s5K067oeqkV_ilzgdg-5aHphw3LW_n9w_FZ4xjIFZvXGzIulWWB-v-8mEmk3_Dzy5VZX-PxTy0eR_CGTSw1rxCTqmG_PsZQftIrxxMOZ7IvL7loclPfx4Ae4gpyvWqAroSMBxr8yKeMpc__X2ykx1q4QwMezo6AHPR2AhxP5IAyEgWsT-q8ZsFackz9bO0PagoNwbTDar0RYGZaHnOhrK7QL4BCFluzBJdZyclo9Ja3w4GaxzyLSWCKcJnlml1NjBeVKu9gOq6S2XekoHIK2At0yWup8gu_E4ypXDCZbQ0X8JoD3o7IK7rqwmGAlDa6XhgqsHu3pcY7eTNVDXS7EgyHlwQ5gBarxAswe4_oSkt6CaRCcAB719twnIeJpLysS34_7d6BAsVmlXPqREbVqSIQG20tbJlQaT9d6BzbtLhFva5EVmY1heDTifAWqONYaR91PrnRKTVZ--dBFTO0sNv3wQ4eOESaWAPUJOPdmK7zr8jSdUUgtLcWn8lWuDNhjpCRkE6U1aw_74bsUfrOHkripTQzZ=w380-h114-no?authuser=0"
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
