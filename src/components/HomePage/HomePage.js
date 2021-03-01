import React, { useState, useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom';
import './HomePage.css'
import { Modal, Form } from 'react-bootstrap';
import ProjectPopup from "../ProjectPopup/ProjectPopup"



function HomePage() {


  return (
    <div>
      <ProjectPopup/>
    </div>

  );
}

export default HomePage;

