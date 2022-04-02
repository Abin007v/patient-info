import React, { useEffect, useState } from "react";
import "../index.css";
import proimg from "./img/doc.png";
import { BsPlusCircle, BsFillBellFill, BsFillPersonFill } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import axios from "axios";
function PatientList() {
  const [PdetailsArr, setPdetailsArr] = useState();
  const [proname, setProname] = useState("first name");
  const [promail, setPromail] = useState("helo@gamil.com");
  const [posts, setPosts] = useState(15);
  const [upcoming, setUpcoming] = useState(2);

  const fetchData = () => {
    axios
      .get("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
      .then((res) => {
        setPdetailsArr(Object.entries(res.data[0]));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
    fetchAppData();
  }, []);
  useEffect(() => {
    if (PdetailsArr) {
      setProname(PdetailsArr[0][1]);
      setPromail(PdetailsArr[1][1]);
      setPosts(PdetailsArr[2][1]);
      setUpcoming(PdetailsArr[3][1]);
    }
  }, [PdetailsArr]);

  const [appActive1, setAppActive1] = useState("active-app");
  const [appActive2, setAppActive2] = useState("");
  const [appActive3, setAppActive3] = useState("");

  const [appData, setAppData] = useState();
  const [appResArr, setAppResArr] = useState();
  const fetchAppData = () => {
    axios
      .get("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details")
      .then((res) => {
        setAppResArr(Object.entries(res.data[0]));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (appResArr) setAppData(appResArr[0][1]);
  }, [appResArr]);
  useEffect(() => {
    if (appData) console.log(appData);
  }, [appData]);
  const setButton = (i) => {
    if (appResArr) {
      console.log(i);
      if (i === 1) {
        setAppActive1("active-app");
        setAppActive2("");
        setAppActive3("");
        setAppData(appResArr[0][1]);
      } else if (i === 2) {
        setAppActive1("");
        setAppActive2("active-app");
        setAppActive3("");
        setAppData(appResArr[1][1]);
      } else {
        setAppActive1("");
        setAppActive2("");
        setAppActive3("active-app");
        setAppData(appResArr[2][1]);
      }
    }
  };

  return (
    <>
      <section className="main-section">
        <section className="header">
          <div className="header-upper-part">
            <div className="hader-upper-part-left">
              <div className="hader-upper-part-left-logo">
                <IoPersonOutline />
              </div>
              <div className="hader-upper-part-left-name">name lastname</div>
            </div>
            <div className="header-upper-part-input">
              <input type="text" placeholder="search" />
            </div>
            <div className="header-upper-part-plus">
              <BsPlusCircle />
            </div>
            <div className="header-upper-part-notify">
              <div className="header-upper-part-notify-logo">
                <div>
                  <BsFillBellFill />
                  <div className="header-upper-part-notify-dot"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-lower-part">
            <div className="header-lower-part-left">
              <div className="header-lower-part-left-name">Patient List</div>
              <div className="header-lower-part-left-name-logo">
                <RiArrowRightSLine />
              </div>
              <div className="header-lower-part-left-name-1">name</div>
            </div>
            <div className="header-lower-part-right">
              <div className="header-lower-part-right-print">
                <AiFillPrinter />
              </div>
              <div className="header-lower-part-right-edit">
                <div className="header-lower-part-right-edit-section">
                  <div className="header-lower-part-right-edit-section-logo">
                    <BiEdit />
                  </div>
                  <div>Edit Patient</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero">
          <section className="hero-left">
            <section className="hero-left-top">
              <section className="hero-left-top-left">
                <div className="hero-left-top-left-img">
                  <div className="hero-left-top-left-img-cont">
                    <img
                      className="hero-left-top-left-img-cont-img"
                      src={proimg}
                      alt="hel"
                    />
                  </div>
                </div>
                <div className="hero-left-top-left-name-cont">
                  <div>{proname}</div>
                </div>
                <div className="hero-left-top-left-mail-cont">{promail}</div>
                <div className="hero-left-top-left-post-cont">
                  <div>
                    <div className="hero-left-top-left-post-cont-posts">
                      {posts}
                    </div>
                    <p> past</p>
                  </div>
                  <div className="hero-left-top-left-post-cont-bar">
                    <div className="hero-left-top-left-post-cont-bar-bar"></div>
                  </div>
                  <div>
                    <div className="hero-left-top-left-post-cont-upcoming">
                      {upcoming}
                    </div>
                    <p>Upcoming</p>
                  </div>
                </div>
                <div className="hero-left-top-left-input">
                  <button> send message</button>
                </div>
              </section>
              <section className="hero-left-top-left-right">
                <div className="hero-left-top-left-right-cont">
                  {PdetailsArr &&
                    PdetailsArr.map((item, id) => {
                      if (id > 3) {
                        return (
                          <div
                            className="hero-left-top-left-right-cont-single-item"
                            key={id}
                          >
                            <div className="hero-left-top-left-right-cont-single-item-main">
                              <div className="hero-left-top-left-right-cont-single-item-type">
                                {item[0]}
                              </div>
                              <div className="hero-left-top-left-right-cont-single-item-name">
                                {item[1]}
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return <></>;
                    })}
                </div>
              </section>
            </section>
            <section className="hero-left-bottom">
              <div className="hero-left-bottom-cont">
                <div className="hero-left-bottom-cont-top">
                  <div className="hero-left-bottom-cont-top-cont">
                    <button
                      onClick={() => setButton(1)}
                      className={`hero-left-bottom-cont-top-cont-1 ${appActive1}`}
                    >
                      Upcoming Appointments
                    </button>
                    <button
                      onClick={() => setButton(2)}
                      className={`hero-left-bottom-cont-top-cont-2 ${appActive2}`}
                    >
                      Post Appointment
                    </button>
                    <button
                      onClick={() => setButton(3)}
                      className={`hero-left-bottom-cont-top-cont-3 ${appActive3}`}
                    >
                      Medical Records
                    </button>
                  </div>
                </div>
                <div className="hero-left-bottom-cont-bottom">
                  <div className="hero-left-bottom-cont-bottom-top">
                    <div className="hero-left-bottom-cont-bottom-top-left">
                      Root Canal Treatment
                    </div>
                    <div className="hero-left-bottom-cont-bottom-top-right">
                      show previous Treatment
                    </div>
                  </div>
                  <div className="hero-left-botto-cont-bottom-bottom">
                    {appData && appData.Time && (
                      <div className="hero-left-botto-cont-bottom-bottom-cont">
                        <div className="hero-left-botto-cont-bottom-bottom-cont-left-bar"></div>
                        <div className="hero-left-botto-cont-bottom-bottom-cont-1">
                          <div className="sub">
                            <div className="sub-a">
                              {appData && appData.Date}
                            </div>
                            <div className="sub-b">
                              {appData && appData.Time}
                            </div>
                          </div>
                          <div className="sub">
                            <div className="sub-1">Treatment</div>
                            <div className="sub-2">
                              {appData && appData.Treatment}
                            </div>
                          </div>
                          <div className="sub">
                            <div className="sub-1">Dentist</div>
                            <div className="sub-2">
                              {appData && appData.Dentist}
                            </div>
                          </div>
                          <div className="sub">
                            <div className="sub-1">Nurse</div>
                            <div className="sub-2">
                              {appData && appData.Nurse}
                            </div>
                          </div>
                          <div className="sub-n">
                            <CgNotes />
                            Notes
                          </div>
                        </div>
                        <div className="hero-left-botto-cont-bottom-bottom-cont-left-bar"></div>

                        <div className="hero-left-botto-cont-bottom-bottom-cont-1">
                          <div className="sub">
                            <div className="sub-a">
                              {appData && appData.Date}
                            </div>
                            <div className="sub-b">
                              {appData && appData.Time}
                            </div>
                          </div>
                          <div className="sub">
                            <div className="sub-1">Treatment</div>
                            <div className="sub-2">
                              {appData && appData.Treatment}
                            </div>
                          </div>
                          <div className="sub">
                            <div className="sub-1">Dentist</div>
                            <div className="sub-2">
                              {appData && appData.Dentist}
                            </div>
                          </div>
                          <div className="sub">
                            <div className="sub-1">Nurse</div>
                            <div className="sub-2">
                              {appData && appData.Nurse}
                            </div>
                          </div>
                          <div className="sub-n">
                            <CgNotes />
                            Notes
                          </div>
                        </div>
                      </div>
                    )}
                    {appData && appData.status && (
                      <div className="hero-left-botto-cont-bottom-bottom-cont-bottom">
                        <div className="hero-left-botto-cont-bottom-bottom-cont-bootom">
                          <div className="sub-k">
                            <div className="sub-x">status</div>
                            <div className="sub-y">
                              {appData && appData.status}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section className="hero-right">
            <section className="hero-right-top">
              <div className="hero-right-top-cont">
                <div className="hero-right-top-cont-1">
                  <div className="hero-right-top-cont-1-a">Notes</div>
                  <div className="hero-right-top-cont-1-b">See all</div>
                </div>
                <div className="hero-right-top-cont-2">
                  <div className="hero-right-top-cont-2-1">
                    -This pateient is lorem ipsum dolor sit amet
                  </div>
                  <div className="hero-right-top-cont-2-1">
                    -This pateient is lorem ipsum dolor sit amet
                  </div>
                  <div className="hero-right-top-cont-2-1">
                    -This pateient is lorem ipsum dolor sit amet
                  </div>
                  <button className="save-note">save note</button>
                </div>
                <div className="hero-right-top-cont-3">
                  <div className="hero-right-top-cont-3-top">
                    Lorem ipsum dolor sit amet
                  </div>
                  <div className="hero-right-top-cont-3-bottom">
                    <div className="hero-right-top-cont-3-bottom-logo">
                      <BsFillPersonFill />
                    </div>
                    <div>Drg.Mega Nanade </div>
                    <div className="hero-right-top-cont-3-bottom-date">
                      20 Nov '19
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="hero-right-bottom">
              <div className="hero-right-bottom-cont">
                <div className="hero-right-bottom-cont-1">
                  <div style={{ fontWeight: "1000", fontSize: "1.1rem" }}>
                    Files/Documents
                  </div>
                  <div className="addfile">AddFiles</div>
                </div>
              </div>
              <div className="hero-right-bottom-cont-2">
                <div children="hero-right-bottom-cont-2-sub">
                  <div className="hero-right-bottom-cont-2-sub-1">
                    <div>
                      <CgNotes />
                    </div>
                    <div className="center">Check Up Resulsts.pdf</div>
                    <div>123kb</div>
                  </div>
                  <div className="hero-right-bottom-cont-2-sub-1">
                    <div>
                      <CgNotes />
                    </div>
                    <div className="center">Check Up Resulsts.pdf</div>
                    <div>123kb</div>
                  </div>
                  <div className="hero-right-bottom-cont-2-sub-1">
                    <div>
                      <CgNotes />
                    </div>
                    <div className="center">Check Up Resulsts.pdf</div>
                    <div>123kb</div>
                  </div>
                  <div className="hero-right-bottom-cont-2-sub-1">
                    <div>
                      <CgNotes />
                    </div>
                    <div className="center">Check Up Resulsts.pdf</div>
                    <div>123kb</div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default PatientList;
