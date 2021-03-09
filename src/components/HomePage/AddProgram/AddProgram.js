import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import "./AddProgram.css";
import { Modal, Form } from "react-bootstrap";
// import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

function AddProgram() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [communities, setCommunities] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [support_types, setSupport_types] = useState([]);
  const [categores, setCategores] = useState([]);

  const [name_arm, setName_arm] = useState([]);
  const [name_eng, setName_eng] = useState([]);
  const [community, setCommunity] = useState([]);
  const [budge, setBudge] = useState([]);
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);
  const [manager_arm, setManager_arm] = useState([]);
  const [manager_eng, setManager_eng] = useState([]);
  const [contactPerson_arm, setContactPerson_arm] = useState([]);
  const [contactPerson_eng, setContactPerson_eng] = useState([]);
  const [organization, setOrganization] = useState([]);
  const [category, setCategory] = useState([]);
  const [support_type, setSupport_type] = useState([]);
  const [description_arm, setDescription_arm] = useState([]);
  const [description_eng, setDescription_eng] = useState([]);
  const [status, setStatus] = useState([]);

  const [expanded, setExpanded] = useState(false);
  const [checkboxes, setCheckboxes] = useState("checkboxesNone");

  useEffect(() => {
    fetch("/api/organizations")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setOrganizations(data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch("/api/communities")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setCommunities(data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch("/api/supportsList")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategores(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function addProject() {
    if (support_type == "Ընթացիկ") {
      setSupport_type(1);
    } else {
      setSupport_type(2);
    }

    let body = {
      name_arm,
      name_eng,
      community,
      budge,
      startDate,
      endDate,
      manager_arm,
      manager_eng,
      contactPerson_arm,
      contactPerson_eng,
      organization,
      category,
      support_type,
      description_arm,
      description_eng,
      status,
    };

    console.log(
      name_arm,
      name_eng,
      community,
      budge,
      startDate,
      endDate,
      manager_arm,
      manager_eng,
      contactPerson_arm,
      contactPerson_eng,
      organization,
      category,
      support_type,
      description_arm,
      description_eng,
      status
    );

    body = JSON.stringify(body);
    const headers = {};
    headers["Content-Type"] = "application/json";
    const res = await fetch("/api/addProgram", {
      method: "POST",
      body,
      headers,
    });

    console.log(res);

    // window.location.reload("")
  }

  function showCheckboxes() {
    if (!expanded) {
      //checkboxes.style.display = "block";
      setCheckboxes("checkboxesBlock");
      setExpanded(true);
    } else {
      // checkboxes.style.display = "none";
      setCheckboxes("checkboxesNone");
      setExpanded(false);
    }
  }

  return (
    <div>
      <div
      //    className="div_add"
      >
        <img
          src={require("../AdminIcons/add.svg").default}
          //   className="add_icon"
        />
        <button variant="primary" className="button_add" onClick={handleShow}>
          Ավելացնել
        </button>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>
          <div className="project_name">
            <label className="project_name_label">Ծրագրի անուն (Հայերեն)</label>
            <input
              className="project_name_input"
              placeholder="Ծրագրի անուն հայերեն"
              value={name_arm}
              onChange={(e) => setName_arm(e.target.value)}
            />
          </div>
          <div className="project_name">
            <label className="project_name_label">Ծրագրի անուն (English)</label>
            <input
              className="project_name_input"
              placeholder="Project name in English"
              value={name_eng}
              onChange={(e) => setName_eng(e.target.value)}
            />
          </div>

          {/* city-i inputnery */}
          {/* <div className="project_name"> */}
          {/* <label className="city_label_arm">Համայնք</label>  */}

          {/* <form>
              <div class="multiselect">
                <div class="selectBox" >
                  <select className="support_placholder">
                  
                    {
                    communities.map((community) => (
                      <option >{community.name_arm}</option>
    
                    ))
                  }
                 </select>
                </div>
                     
              </div>
            </form> */}

          <div className="project_name">
            <label className="city_label_arm">Համայնք</label>
            <button className="btnSupport" id="btnSelect">
              <label>Համայնք</label>
              <img src={require("../AdminIcons/arrow.svg").default} />
            </button>

            <div className="NestedSelect">
              {communities.map((community) => (
                <div className="list city">
                  <li
                    className="li1"
                    style={{
                      backgroundColor: community.checked
                        ? "#A4C2D8"
                        : "#fafafa",
                    }}
                  >
                    {community.name_arm}
                  </li>
                </div>
              ))}
            </div>
          </div>

          {/* budget-i inputnery */}
          <div className="project_name">
            <label className="budge_name">Բյուջե</label>
            <input
              className="budge_input"
              placeholder="Բյուջե հայերեն"
              value={budge}
              onChange={(e) => setBudge(e.target.value)}
            />
            <Form.Control as="select" className="usd_input">
              <option>USD</option>
            </Form.Control>
          </div>

          {/* date-eri inputnery */}
          <div className="project_name">
            <label className="start_date_label">Սկիզբ</label>
            <label className="end_date_label">Ավարտ</label>
            <Form.Control
              as="select"
              className="start_date_input"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            >
              <option>10/08/20</option>
              <option>11/08/20</option>
            </Form.Control>
            <Form.Control
              as="select"
              className="end_date_input"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            >
              <option>01/01/21</option>
              <option>12/01/21</option>
            </Form.Control>
          </div>

          {/* xekavari input-nery */}
          <div className="project_name">
            <label className="project_name_label">
              Ծրագրի ղեկավար (Հայերեն)
            </label>
            <input
              className="project_name_input"
              placeholder="Անուն, Ազգանուն"
              value={manager_arm}
              onChange={(e) => setManager_arm(e.target.value)}
            />
          </div>
          <div className="project_name">
            <label className="project_name_label">
              Ծրագրի ղեկավար (English)
            </label>
            <input
              className="project_name_input"
              placeholder="Fistname, Lastname"
              value={manager_eng}
              onChange={(e) => setManager_eng(e.target.value)}
            />
          </div>

          {/* contactPerson-i input-nery */}
          <div className="project_name">
            <label className="project_name_label">Կոնտակտ անձ (Հայերեն)</label>
            <input
              className="project_name_input"
              placeholder="Անուն, Ազգանուն"
              value={contactPerson_arm}
              onChange={(e) => setContactPerson_arm(e.target.value)}
            />
          </div>
          <div className="project_name">
            <label className="project_name_label">Կոնտակտ անձ (Անգլերեն)</label>
            <input
              className="project_name_input"
              placeholder="Fistname, Lastname"
              value={contactPerson_eng}
              onChange={(e) => setContactPerson_eng(e.target.value)}
            />
          </div>

          {/* organizationi input-nery */}
          <div className="project_name">
            <label className="kazmakerp_arm">Կազմակերպություն(ներ) </label>
            <Form.Control
              as="select"
              className="city_input"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            >
              {organizations.map((organization) => (
                <option>{organization.name_arm}</option>
              ))}
            </Form.Control>
          </div>

          {/* support_type input-nery */}
          <div className="project_name">
            <label className="support_type">Աջակցության տեսակ(ներ)</label>
            {/* <Form.Control as="select" className="city_input" value={support_type} onChange={e => setSupport_type(e.target.value)}>
              
  {
  
    categores.map((categore) => (

      <option >{categore.categoryName}
      {
         
        categore.items.map((support) => (
          <option >{support.supportName}</option>
        ))
        
      }
      </option>
    ))
    
      }
  

            </Form.Control> */}

            <form>
              <div class="multiselect">
                <div class="selectBox" onClick={showCheckboxes}>
                  <select className="support_placholder">
                    <option>Աջակցության տեսակ(ներ)</option>
                  </select>
                  <div class="overSelect"></div>
                </div>
                <div className={checkboxes}>
                  {categores.map((categore) => (
                    <label for="" className="category">
                      <input type="checkbox" id="" />
                      {categore.categoryName}
                    </label>
                  ))}
                </div>
              </div>
            </form>
          </div>

          {/* discriptionneri input-nery */}
          <div className="project_name">
            <label className="project_name_label">
              Նկարագրություն (Հայերեն)
            </label>
            <input
              className="description_input"
              placeholder="Հակիրճ նկարագրություն"
              value={description_arm}
              onChange={(e) => setDescription_arm(e.target.value)}
            />
          </div>
          <div className="project_name">
            <label className="project_name_label">
              Նկարագրություն (English)
            </label>
            <input
              className="description_input"
              placeholder="Brief description"
              value={description_eng}
              onChange={(e) => setDescription_eng(e.target.value)}
            />
          </div>

          {/* status-i inputnery */}
          <div className="project_name">
            <label className="status">Կարգավիճակ</label>
            <Form.Control
              as="select"
              className="city_input"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Ընթացիկ</option>
              <Form.Check type="radio" aria-label="radio 1" />
              <option>Ավարտված</option>
            </Form.Control>
          </div>

          <div className="btn_popup">
            <button className="cancel">Չեղարկել</button>
            <button className="save" onClick={addProject}>
              Հաստատել
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddProgram;
