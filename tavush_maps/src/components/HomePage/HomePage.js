import React, {useState} from 'react'
import { Route, useHistory } from 'react-router-dom';
import './HomePage.css'
import { Button,Modal } from 'react-bootstrap';

function HomePage() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    



    return (
        <div>
            <div>
            <div className="div_add"><img src={require('./AdminIcons/add.svg').default} className="add_icon" />
                <button variant="primary" className="btn_add" onClick={handleShow}> Ավելացնել Ծրագիր</button>
            </div>
            <label className="name_project">Ծրագրեր</label>
            </div>
           

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <div>
            <label>Ծրագրի անուն</label>
            </div>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
           
        </div>

    );
}

export default HomePage;

