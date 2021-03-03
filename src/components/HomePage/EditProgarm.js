import React, { useState, useContext, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { ProgramContext } from "../../pages/ProgramsPage";

function EditProgram({ org }) {
  const programCont = useContext(ProgramContext);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  const [name_arm, setName_arm] = useState([])
  const [name_eng, setName_eng] = useState([])
  const [community, setCommunity] = useState([])
  const [budge, setBudge] = useState([])
  const [startDate, setStartDate] = useState([])
  const [endDate, setEndDate] = useState([])
  const [manager_arm, setManager_arm] = useState([])
  const [manager_eng, setManager_eng] = useState([])
  const [contactPerson_arm, setContactPerson_arm] = useState([])
  const [contactPerson_eng, setContactPerson_eng] = useState([])
  const [organization, setOrganization] = useState([])
  const [category, setCategory] = useState([])
  const [support_type, setSupport_type] = useState([])
  const [description_arm, setDescription_arm] = useState([])
  const [description_eng, setDescription_eng] = useState([])
  const [status, setStatus] = useState([])

  const newDataFunc = () => {
    setId(prog.id);
    setName_arm(prog.name_arm);
    setName_eng(prog.name_eng);
    setCommunity(prog.community_arm);
    setBudge(prog.budget)
    setStartDate(prog.start_date)
    setEndDate(prog.end_date)
    setManager_arm(prog.manager_arm)
    setManager_eng(prog.manager_eng)
    setContactPerson_arm(prog.contactPerson_arm)
    setContactPerson_eng(prog.contactPerson_eng)
    setOrganization(prog.organization_arm)
    setCategory(prog.category_arm)
  };

  useEffect(() => {
    setId(prog.id);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (evt) => {
    axios
      .put(`/api/editProgram`, {
        id,
        nameArm,
        nameEng,
        person,
      })
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          const org = {
            id: id,
            name_eng: nameEng,
            name_arm: nameArm,
            person: person,
          };
          handleClose();
          organizationCont.editOrganization(org);
          console.log("Կատարված է");
        } else {
          handleClose();
          console.log(response.data.errorMessage);
        }
      })
      .catch((e) => {
        handleClose();
        console.log("error");
      });
  };

  return (
    <>
      <div
        variant="primary"
        onClick={() => {
          handleShow();
          newDataFunc();
        }}
      >
        <img className="org_icon" src={require("../../img/edit.svg").default} />
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Խմբագրել</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <Form.Group onSubmit={handleSubmit}>
            <Form.Label> Կազմակերպության անվանումը (Հայերեն)</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={nameEng}
              onChange={(e) => setNameEng(e.target.value)}
            />
            <br />
            <Form.Label>Կազմակերպության անվանումը ( Enlglish)</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={nameArm}
              onChange={(e) => setNameArm(e.target.value)}
            />
            <br />
            <Form.Label>Կոնտակտ անձ</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={person}
              onChange={(e) => setPerson(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Չեղարկել
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit();
              // handleClose();
            }}
          >
            Հաստատել
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProgram;
