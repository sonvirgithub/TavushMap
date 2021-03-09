import React, { useState, useContext, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { ProgramContext } from "../../pages/ProgramsPage";


function EditProgram({ prog }) {
  const programCont = useContext(ProgramContext);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  const [name_arm, setName_arm] = useState("")
  const [name_eng, setName_eng] = useState("")
  const [community, setCommunity] = useState("Համայնք")
  const [budge, setBudge] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [manager_arm, setManager_arm] = useState("")
  const [manager_eng, setManager_eng] = useState("")
  const [contactPerson_arm, setContactPerson_arm] = useState("")
  const [contactPerson_eng, setContactPerson_eng] = useState("")
  const [organization, setOrganization] = useState("Կազմակերպություն")
  const [categor_support, setCategor_support] = useState([])
  const [description_arm, setDescription_arm] = useState("")
  const [description_eng, setDescription_eng] = useState("")
  const [status, setStatus] = useState("")
  const [isDonor, setIsDonor] = useState(false)

  const newDataFunc = () => {
    setId(prog.id);
    setName_arm(prog.name_Arm);
    setName_eng(prog.name_Eng);
    setCommunity(prog.city);
    setBudge(prog.budget)
    setStartDate(prog.start_date)
    setEndDate(prog.end_date)
    setManager_arm(prog.manager_Arm)
    setManager_eng(prog.manager_Eng)
    setContactPerson_arm(prog.contactPerson_Arm)
    setContactPerson_eng(prog.contactPerson_Eng)
    setOrganization(prog.organiz)
    setCategor_support(prog.categor_Support)
    setDescription_arm(description_Arm)
    setDescription_eng(description_Eng)
    setStatus(statusId)
    setIsDonor(is_donor)

  };


  // useEffect(() => {
  //   setId(prog.id);
  // }, []);


  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const handleSubmit = (evt) => {
  //   axios
  //     .put(`/api/editProgram`, {
  //       id,
  //       nameArm,
  //       nameEng,
  //       person,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       if (response.data.success) {
  //         const org = {
  //           id: id,
  //           name_eng: nameEng,
  //           name_arm: nameArm,
  //           person: person,
  //         };
  //         handleClose();
  //         organizationCont.editOrganization(org);
  //         console.log("Կատարված է");
  //       } else {
  //         handleClose();
  //         console.log(response.data.errorMessage);
  //       }
  //     })
  //     .catch((e) => {
  //       handleClose();
  //       console.log("error");
  //     });
  // };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (evt) => {
    axios
      .put(`/api/editProgram`, {
        id,
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
        categor_support,
        description_arm,
        description_eng,
        status,
        isDonor
      })
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          const prog = {
            id: id,
            name_Arm: name_arm,
            name_Eng: name_eng,
            city: community,
            budget: budge,
            start_date: startDate,
            end_date: endDate,
            manager_Arm: manager_arm,
            manager_Eng: manager_eng,
            contactPerson_Arm: contactPerson_arm,
            contactPerson_Eng: contactPerson_eng,
            categor_Support: categor_support,
            organiz: organization,
            description_Arm: description_arm,
            description_Eng: description_eng,
            statusId: status,
            is_donor: isDonor
          };
          handleClose();
          programCont.editProgram(prog);
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
      {/* <div
        variant="primary"
        onClick={() => {
          handleShow();
          newDataFunc();
        }}
      >
        <img className="org_icon" src={require("../../img/edit.svg").default} />
      </div>

      <Modal show={show} onHide={handleClose} animation={false}> */}
      {/* <Modal.Header closeButton>
          <Modal.Title>Խմբագրել</Modal.Title>
        </Modal.Header> */}
      {/* <Modal.Body>
          <Form.Group onSubmit={handleSubmit}>
           
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Չեղարկել
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit(); */}
      {/* // handleClose(); */}
      {/* }}
          >
            Հաստատել
          </Button>
        </Modal.Footer>
      </Modal> */}
      <div>lyyaa</div>
    </>
  );
}

export default EditProgram;
