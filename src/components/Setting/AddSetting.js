import React, { useState, useContext } from "react";
import { Modal, Button, Form, FormLabel } from "react-bootstrap";
import axios from "axios";
import { SettingContext } from "../../pages/SettingPage";

function AddSetting() {
  const settingCont = useContext(SettingContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    console.log("object");
    console.log(firstName, lastName, email, password);
    axios
      .post(`/api/addUser`, {
        firstName,
        lastName,
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          const user = {
            id: response.data.id,
            firstname: firstName,
            lastname: lastName,
            email,
            password,
          };
          settingCont.addUser(user);
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
            <FormLabel>Անուն</FormLabel>
            <Form.Control
              type="text"
              placeholder="Անուն"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <FormLabel>Ազգանուն</FormLabel>

            <Form.Control
              type="text"
              placeholder="Ազգանուն"
              onChange={(e) => setLastName(e.target.value)}
            />
            <br />
            <FormLabel>Էլ․ հասցե</FormLabel>

            <Form.Control
              type="email"
              placeholder="Էլ․ հասցե"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <FormLabel>Գաղտնաբառ</FormLabel>

            <Form.Control
              type="password"
              placeholder="Գաղտնաբառ"
              onChange={(e) => setPassword(e.target.value)}
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

export default AddSetting;
