import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

import { SupportContext } from "../../pages/SupportTypesPage";

function DeleteSupportType({ supType, setSuccessPage, setFailPage }) {
  //   console.log(supType, "supType");
  const supportCont = useContext(SupportContext);

  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setId(supType.supportid);
  }, []);

  const handleSubmit = (evt) => {
    axios
      .delete(`api/deleteSupport/${id}`)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          supportCont.deleteSupport(id);
          setSuccessPage(true);
          console.log("Կատարված է");
        } else {
          console.log(response.data.errorMessage);
          setFailPage(true);
        }
      })
      .catch((e) => {
        console.log("Կատարված չէ");
      });
  };

  return (
    <>
      <div style={{ marginLeft: "5px" }} onClick={handleShow}>
        <img
          className="org_icon"
          src={require("../../img/remove.svg").default}
        />
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Համոզվա՞ծ եք</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          Դուք ցանկանում եք հեռացնել{" "}
          <span style={{ fontWeight: "600" }}>{supType.support_arm}</span>{" "}
          կազմակերպությունը
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

export default DeleteSupportType;
