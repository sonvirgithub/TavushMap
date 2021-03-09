import React, { useState, useContext, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { OrganizationContext } from "../../pages/OrganizationsPage";

function EditOrganization({ org, setSuccessPage, setFailPage }) {
  const organizationCont = useContext(OrganizationContext);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [nameArm, setNameArm] = useState("");
  const [nameEng, setNameEng] = useState("");
  const [person, setPerson] = useState("");

  const newDataFunc = () => {
    setId(org.id);
    setNameArm(org.name_arm);
    setNameEng(org.name_eng);
    setPerson(org.person);
  };

  useEffect(() => {
    setId(org.id);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (evt) => {
    axios
      .put(`/api/editOrganization`, {
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
          setSuccessPage(true);
          console.log("Կատարված է");
        } else {
          handleClose();
          setFailPage(true);
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
              value={nameArm}
              onChange={(e) => setNameArm(e.target.value)}
            />
            <br />
            <Form.Label>Կազմակերպության անվանումը (Enlglish)</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={nameEng}
              onChange={(e) => setNameEng(e.target.value)}
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

export default EditOrganization;
