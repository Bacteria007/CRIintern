import React from "react";
import logo from "../assets/logo.png";
import trophy from "../assets/1.png";
import ReceivingTrophy from "../assets/2.png";
import Collection from "../assets/3.png";
import "../styles/Home.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <section>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="parent-div">
          <div className="left-div">
            <img src={trophy} alt="Trophy" className="img" />
          </div>
          <div className="right-div">
            <p className="bold-text">
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </p>
            <ul>
              <li>
                <p className="simple-text">
                  C.R.I.'s energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for
                  various projects across the globe to save energy.
                </p>
              </li>
              <li>
                <p className="simple-text">
                  C.R.I. is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Services Limited) to
                  replace the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with IoT enabled control panel.
                </p>
              </li>
            </ul>
            <img src={ReceivingTrophy} alt="ReceivingTrophy" className="img" />
            <p className="simple-text">
              Government of India has awarded the{" "}
              <span className="bold-text">
                "National Energy Conservation Award 2018".
              </span>{" "}
              Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
              the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
              Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </section>

      {/* details */}
      <section className="details-container">
        <p className="simple-text">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
        </p>
        <div className="center-container">
          <img src={Collection} alt="collection of PUMPSETS" className="img" />
          <p className="bold-text">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
          </p>
        </div>
      </section>
      {/* footer section */}
      <section>
        <div className="line"></div>
        <div className="text-center">
          <p className="bold-text">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </p>
          <p className="simple-text">
            CHEMICALS & PROCESS&nbsp;<span className="red-vertical">|</span>&nbsp;POWER{" "}
            <span className="red-vertical">|</span>&nbsp;OILS & GAS{" "}
            <span className="red-vertical">|</span>&nbsp;WATER & WASTE WATER{" "}
            <span className="red-vertical">|</span>&nbsp;PHARMA{" "}
            <span className="red-vertical">|</span>&nbsp;SUGARS & DISTILLERIES{" "}
            <span className="red-vertical">|</span>&nbsp;PAPER & PULP
            <span className="red-vertical">|</span>&nbsp;MARINE & DEFENCE{" "}
            <span className="red-vertical">|</span>&nbsp;METAL & MINING{" "}
            <span className="red-vertical">|</span>&nbsp;FOOD & BEVERAGE{" "}
            <span className="red-vertical">|</span>&nbsp;PETROCHEMICAL & REFINERIES{" "}
            <span className="red-vertical">|</span>&nbsp;SOLAR{" "}
            <span className="red-vertical">|</span>&nbsp;BUILDING{" "}
            <span className="red-vertical">|</span>&nbsp;HVAC{" "}
            <span className="red-vertical">|</span>&nbsp;FIRE FIGHTING{" "}
            <span className="red-vertical">|</span>&nbsp;AGRICULTURE & RESIDENTIAL{" "}
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
