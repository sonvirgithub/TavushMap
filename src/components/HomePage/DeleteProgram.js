import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { ProgramContext } from "../../pages/ProgramsPage";

function DeleteProgram({ prog, show, setShow }) {
  const programCont = useContext(ProgramContext);

 // const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  useEffect(() => {
    setId(prog.id);
  }, []);

  const handleSubmit = (evt) => {
    console.log(id);
    axios
      .delete(`/api/deleteProgram/${id}`)
      .then((response) => {
        console.log(response);
        if (response.data) {
          programCont.deleteProgram(id);
          //   toast.success("Կատարված է");
        } else {
          //   toast.error(response.data.errorMessage);
        }
      })
      .catch((e) => {
        // toast.error("Կատարված չէ");
      });
  };

  return (
    <>
      {/* <div style={{ marginLeft: "5px" }} onClick={handleShow}>
        <img
          className="org_icon"
          src={require("../../img/remove.svg").default}
        />
      </div> */}

      <Modal show={show} onHide={handleClose} animation={false}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Համոզվա՞ծ եք</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          Դուք ցանկանում եք հեռացնել {prog.name_arm} ծրագիրը
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Չեղարկել
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit();
              handleClose();
            }}
          >
            Հաստատել
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteProgram;
