import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { NavLink, Nav } from "react-bootstrap";
import "./SideBar.css";

function Sidebar() {
  const [nameArm, setNameArm] = useState("");
  const [nameEng, setNameEng] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [cityArm, setCityArm] = useState("");
  const [cityEng, setCityEng] = useState("");
  const [responsiblePersonArm, setResponsiblePersonArm] = useState("");
  const [responsiblePersonEng, setResponsiblePersonEng] = useState("");
  const [contactPersonArm, setContactPersonArm] = useState("");
  const [contactPersonEng, setContactPersonEng] = useState("");
  const [categoryArm, setCategoryArm] = useState([
    "category1",
    "category2",
    "category3",
  ]);
  const [support_typeArm, setSupportArm] = useState([
    "support_type 1",
    "support_type 2",
    "support_type 3",
  ]);

  async function createProgress() {
    console.log("createProgress");

    let body = {
      nameArm,
      startDate,
      endDate,
      cityArm,
      responsiblePersonArm,
      contactPersonArm,
      categoryArm,
      support_typeArm,
    };

    body = JSON.stringify(body);
    const headers = {};
    headers["Content-Type"] = "application/json";
    const res = await fetch("/createProject", {
      method: "POST",
      body,
      headers,
    });
    if (res.status == 200) {
      let data = await res.json();
      console.log(data);
    }
  }

  const history = useHistory();

  async function log_out() {
    const headers = {};
    headers["Content-Type"] = "application/json";
    const res = await fetch("/logout", {
      method: "GET",
      headers,
    });

    if (res.status == 200) {
      history.push("/login");
      // console.log(await res.json());
    } else {
      console.log("data chka");
    }
    // window.location.reload()
  }

  return (
    <>
      <div className="sideBar">
        <div className="properties">
          <Nav>
            <div className="div_projects">
              <button className="btn_projects">
                <img
                  src={require("./AdminIcons/programm.svg").default}
                  className="icon"
                />{" "}
                Ծրագրեր
              </button>
            </div>
            <div className="div_projects">
              <div className="btn_projects">
                <NavLink
                  to="/organization"
                  //   className="navlink"
                  //   activeClassName="activeclass"
                >
                  <img
                    src={require("./AdminIcons/orggray.svg").default}
                    className="icon"
                  />
                  Կազմակերպություններ
                </NavLink>
                {/* Կազմակերպություններ */}
              </div>
            </div>
            <div className="div_projects">
              <button className="btn_projects">
                <img
                  src={require("./AdminIcons/phere.svg").default}
                  className="icon"
                />
                Ոլորտներ
              </button>
            </div>
            <div className="div_projects">
              <button className="btn_projects">
                <img
                  src={require("./AdminIcons/support.svg").default}
                  className="icon"
                />
                Աջակցության տեսակներ
              </button>
            </div>
            <div className="div_projects">
              <button className="btn_projects">
                <img
                  src={require("./AdminIcons/settings.svg").default}
                  className="icon"
                />
                Կարգավորումներ
              </button>
            </div>
          </Nav>
        </div>

        <div className="logout">
          <button className="btn_logout" onClick={log_out}>
            Դուրս գալ{" "}
            <img
              src={require("./AdminIcons/logout.svg").default}
              className="log_out_icon"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
