import React, { useEffect, useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { VscDashboard } from "react-icons/vsc";
import { RiListSettingsLine } from "react-icons/ri";
import { BsCalendarMinus, BsFillPersonFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { BiMessageRoundedDots, BiHelpCircle } from "react-icons/bi";
import sidebarimg from "./img/sidebar-img.png";
import { Link } from "react-router-dom";
import doc from "./img/doc.png";
import axios from "axios";

function Sidebar() {
  const [docDetails, setDocDetails] = useState();

  const fetDocDet = () => {
    axios
      .get("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails")
      .then((res) => {
        setDocDetails(res.data[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetDocDet();
  }, []);

  const [sideBar, sideBarTog] = useState("sidebar-main");
  const toglesidebar = () => {
    if (sideBar === "sidebar-main") {
      sideBarTog("sidebar-main-remove");
    } else {
      sideBarTog("sidebar-main");
    }
  };
  return (
    <div>
      <section className={sideBar}>
        <div className="sidebar">
          <div className="sidebar-logo">
            <img src={sidebarimg} alt="hd" />
            <button className="sidebar-close" onClick={toglesidebar}>
              <GoThreeBars />
            </button>
          </div>
          <div className="sidebar-links">
            <Link to={"/overview"}>
              <section>
                <p>
                  <VscDashboard />
                </p>

                <h1 className="sidebar-link-text">overview</h1>
              </section>
            </Link>
            <Link to={"/calendar"}>
              <section>
                <p>
                  <BsCalendarMinus />
                </p>
                <h1 className="sidebar-link-text">calendar</h1>
              </section>
            </Link>
            <Link to={"/"}>
              <section>
                <p>
                  <BsFillPersonFill />
                </p>
                <h1 className="sidebar-link-text">Patient list</h1>
              </section>
            </Link>
            <Link to={"/messages"}>
              <section>
                <p>
                  <BiMessageRoundedDots />
                </p>
                <h1 className="sidebar-link-text">Messages</h1>
              </section>
            </Link>
            <Link to={"/paymentinfo"}>
              <section>
                <p>
                  <MdPayment />
                </p>
                <h1 className="sidebar-link-text">payment info</h1>
              </section>
            </Link>
            <Link to={"/settings"}>
              <section>
                <p>
                  <RiListSettingsLine />
                </p>
                <h1 className="sidebar-link-text">settings</h1>
              </section>
            </Link>
          </div>
          <div className="sidebar-footer">
            <div className="sidebar-help">
              <p>
                <BiHelpCircle />
              </p>
              <div>Help ?</div>
            </div>
            <div className="sidebar-footer-cont">
              <div className="sidebar-footer-cont-img">
                <div className="sidebar-footer-cont-img-img">
                  <img src={doc} alt="hd" />
                </div>
              </div>
              <div className="sidebar-footer-cont-info">
                <div className="sidebar-footer-cont-info-name">
                  {docDetails && docDetails.name}
                </div>
                <div className="sidebar-footer-cont-info-role">
                  {docDetails && docDetails.specification}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sidebar;
