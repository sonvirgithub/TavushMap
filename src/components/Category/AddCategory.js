import React, { useState, useContext } from "react";
import { Modal, Button, Form, FormLabel } from "react-bootstrap";
import axios from "axios";
import { CategoryContext } from "../../pages/CategoriesPage";

function AddCategory() {
  const categoryCont = useContext(CategoryContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [category_eng, setCategoryEng] = useState("");
  const [category_arm, setCategoryArm] = useState("");
  // const [person, setPerson] = useState("");

  const handleSubmit = (evt) => {
    console.log("object");
    console.log(category_eng, category_arm);
    axios
      .post(`/api/addCategory`, {
        category_eng,
        category_arm,
      })
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          const cat = {
            id: response.data.id,
            name_eng: category_eng,
            name_arm: category_arm,
          };
          categoryCont.addCategory(cat);
          handleClose();
          console.log("Կատարված է");
        } else {
          handleClose();
          console.log("Կատարված չէ");
        }
      })
      .catch((e) => {
        console.log("error");
        handleClose();
      });
  };

  return (
    <>
      <div>
        <img src={require("../HomePage/AdminIcons/add.svg").default} />
        <button variant="primary" className="button_add" onClick={handleShow}>
          Ավելացնել
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form.Group onSubmit={handleSubmit}>
            <FormLabel>Ոլորտի անվանումը (Հայերեն)</FormLabel>
            <Form.Control
              type="text"
              placeholder="Ոլորտի անվանումը"
              onChange={(e) => setCategoryArm(e.target.value)}
            />
            <br />
            <FormLabel>Ոլորտի անվանումը (Enlglish)</FormLabel>

            <Form.Control
              type="text"
              placeholder="Category name "
              onChange={(e) => setCategoryEng(e.target.value)}
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

export default AddCategory;
