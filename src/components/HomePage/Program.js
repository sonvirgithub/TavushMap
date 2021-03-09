import React, { useState, useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom';
import { Modal, Form,Table } from 'react-bootstrap';
import AddProgram from './AddProgram/AddProgram'
import DeleteProgram from './DeleteProgram'
import EditProgram from './EditProgarm'


function Program({programs}) {
  console.log(programs, "programs");


  return (
    <div style={{ position: "absolute" }}>
    <div style={{ marginLeft: "328px" }}>
      <div className="org_title">
        <div className="org_title_txt">Ծրագրեր</div>
        <div>
          <AddProgram />
        </div>
      </div>

      <Table hover>
        <thead>
          <tr>
            <th>Ծրագրի անուն</th>
            
            <th>Աջակցության տեսակ</th>
            
            <th>Բյուջե</th>
           
            <th>Կարգավիճակ</th>
            <th>Ծրագրի ղեկավար</th>

          </tr>
        </thead>

        <tbody>
          
        {programs.length > 0 ? (
            programs.map((prog, index) => {
              return (
                <tr key={prog.id}>
                  <td>{prog.name_arm}</td>
                  <td>{prog.support_arm}</td>
                  <td>{prog.budget}</td>
                  <td>{prog.status_arm}</td>
                  <td>{prog.manager_arm}</td>
                    <td>
                    <div style={{ display: "flex" }}>
                       <EditProgram prog={prog} />
                      <DeleteProgram prog={prog} /> 
                     </div>
                  </td>
               </tr>
                 );
                })
              ) : (
                <tr>
                  <td colSpan="5">Տվյաներ չկան</td>
                </tr>
              )}
        </tbody>
        </Table> 
    </div>
    </div>
  );
}

export default Program;