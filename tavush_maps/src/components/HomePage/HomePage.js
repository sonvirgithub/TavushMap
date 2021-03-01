import React, { useState, useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom';
import './HomePage.css'
import { Modal, Form } from 'react-bootstrap';
import ProjectPopup from "../ProjectPopup/ProjectPopup"

// function HomePage() {

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [communities, setCommunities] = useState([])
//   const [organizations, setOrganizations] = useState([])
//   const [spheres, setSpheres] = useState([])

//   useEffect(() => {
//     fetch('/api/organizations')
//       .then(res => res.json())
//       .then(data => {
//         console.log(data.data);
//         setOrganizations(data.data)

//       }).catch(err => {
//         console.log(err);
//       })

//     fetch('/api/communities')
//       .then(res => res.json())
//       .then(data => {
//         console.log(data.data);
//         setCommunities(data.data)

//       }).catch(err => {
//         console.log(err);
//       })

//     fetch('/api/supports')
//       .then(res => res.json())
//       .then(data => {
//         console.log(data.data);
//         setSpheres(data.data)

//       }).catch(err => {
//         console.log(err);
//       })



//   }, [])


//   return (
//     <div>
//       <div>
//         <div className="div_add"><img src={require('./AdminIcons/add.svg').default} className="add_icon" />
//           <button variant="primary" className="btn_add" onClick={handleShow}> Ավելացնել Ծրագիր</button>
//         </div>
//       </div>


//       <Modal show={show} onHide={handleClose} animation={false}>

//         <Modal.Body>
//           <div className="project_name">
//             <label className="project_name_label">Ծրագրի անուն (Հայերեն)</label>
//             <input className="project_name_input" placeholder="Ծրագրի անուն հայերեն" />

//           </div>
//           <div className="project_name">
//             <label className="project_name_label">Ծրագրի անուն (English)</label>
//             <input className="project_name_input" placeholder="Project name in English" />
//           </div>

//           {/* city-i inputnery */}
//           <div className="project_name">
//             <label className="city_label_arm">Համայնք (Հայերեն)</label>
//             <Form.Control as="select" className="city_input">
//               {
//                 communities.map((community) => (
//                   <option>{community.name_arm}</option>

//                 ))
//               }

//             </Form.Control>
//           </div>
//           <div className="project_name">
//             <label className="city_label_eng">Համայնք (English)</label>
//             <Form.Control as="select" className="city_input">
//               {
//                 communities.map((community) => (
//                   <option>{community.name_eng}</option>

//                 ))
//               }
//             </Form.Control>
//           </div>

//           {/* budget-i inputnery */}
//           <div className="project_name">
//             <label className="budge_name">Բյուջե</label>
//             <input className="budge_input" placeholder="Բյուջե հայերեն" />
//             <Form.Control as="select" className="usd_input">
//               <option >USD</option>
//             </Form.Control>
//           </div>

//           {/* date-eri inputnery */}
//           <div className="project_name">
//             <label className="start_date_label">Սկիզբ</label>
//             <label className="end_date_label">Ավարտ</label>
//             <Form.Control as="select" className="start_date_input">
//               <option >MM/DD/YY</option>
//             </Form.Control>
//             <Form.Control as="select" className="end_date_input">
//               <option >MM/DD/YY</option>
//             </Form.Control>
//           </div>

//           {/* xekavari input-nery */}
//           <div className="project_name">
//             <label className="project_name_label">Ծրագրի ղեկավար (Հայերեն)</label>
//             <input className="project_name_input" placeholder="Անուն, Ազգանուն" />

//           </div>
//           <div className="project_name">
//             <label className="project_name_label">Ծրագրի ղեկավար (English)</label>
//             <input className="project_name_input" placeholder="Fistname, Lastname" />
//           </div>

//           {/* contactPerson-i input-nery */}
//           <div className="project_name">
//             <label className="project_name_label">Կոնտակտ անձ (Հայերեն)</label>
//             <input className="project_name_input" placeholder="Անուն, Ազգանուն" />

//           </div>
//           <div className="project_name">
//             <label className="project_name_label">Կոնտակտ անձ (Անգլերեն)</label>
//             <input className="project_name_input" placeholder="Fistname, Lastname" />
//           </div>

//           {/* organizationi input-nery */}
//           <div className="project_name">
//             <label className="kazmakerp_arm">Կազմակերպություն(ներ) (Հայերեն) </label>
//             <Form.Control as="select" className="city_input">
//               {
//                 organizations.map((organization) => (

//                   <option>{organization.name_arm}</option>

//                 ))
//               }
//             </Form.Control>
//           </div>
//           <div className="project_name">
//             <label className="kazmakerp_eng">Կազմակերպություն(ներ) (English)</label>
//             <Form.Control as="select" className="city_input">
//               {
//                 organizations.map((organization) => (
//                   <option>{organization.name_eng}</option>

//                 ))
//               }
//             </Form.Control>
//           </div>

//           {/* spheres input-nery */}
//           <div className="project_name">
//             <label className="volort_arm">Ոլոորտ(ներ) (Հայերեն) </label>
//             <Form.Control as="select" className="city_input">
//               {
//                 spheres.map((sphere) => (
//                   <option>{sphere.name_arm}</option>

//                 ))
//               }
//             </Form.Control>
//           </div>
//           <div className="project_name">
//             <label className="volort_eng">Ոլոորտ(ներ) (English)</label>
//             <Form.Control as="select" className="city_input">
//               {
//                 spheres.map((sphere) => (
//                   <option>{sphere.name_eng}</option>

//                 ))
//               }            </Form.Control>
//           </div>

//           {/* discriptionneri input-nery */}
//           <div className="project_name">
//             <label className="project_name_label">Նկարագրություն (Հայերեն)</label>
//             <input className="description_input" placeholder="Հակիրճ նկարագրություն" />

//           </div>
//           <div className="project_name">
//             <label className="project_name_label">Նկարագրություն (English)</label>
//             <input className="description_input" placeholder="Brief description" />
//           </div>

//           {/* status-i inputnery */}
//           <div className="project_name">
//             <label className="city_label_arm">Ստատուս (Հայերեն)</label>
//             <Form.Control as="select" className="city_input">
//               <option >ongoing</option>
//               <option >finished</option>
//             </Form.Control>
//           </div>
//           <div className="project_name">
//             <label className="city_label_eng">Ստատուս (English)</label>
//             <Form.Control as="select" className="city_input">
//               <option >ongoing</option>
//               <option >finished</option>
//             </Form.Control>
//           </div>

//           <div className="btn_popup">
//             <button className="cancel">Չեղարկել</button>
//             <button className="remember">Հիշել</button>
//             <button className="save">Հաստատել</button>
//           </div>
//         </Modal.Body>
//       </Modal>

//     </div>

//   );
// }

function HomePage() {

  


  return (
    <div>
      <ProjectPopup/>
    </div>

  );
}

export default HomePage;

