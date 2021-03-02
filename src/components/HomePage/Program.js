import React, { useState, useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom';
import { Modal, Form,Table } from 'react-bootstrap';
import AddProgram from './AddProgram/AddProgram'


function Program() {
  return (
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
            <th>Ոլորտ</th>
            <th>Աջակցության տեսակ</th>
            <th>Համայնք</th>
            <th>Բյուջե</th>
            <th>Տևողություն</th>
            <th>Կարգավիճակ</th>
            <th>Ծրագրի ղեկավար</th>

          </tr>
        </thead>

        <tbody>
          
              
                <tr>
                  <td>nameArm</td>
                  <td>nameEng</td>
                  <td>person</td>
                  <td>person</td>
                  <td>person</td>
                  <td>person</td>
                  <td>person</td>
                  <td>person</td>

                  <td
                  
                  >
                    <div style={{ display: "flex" }}>
                      {/* <MoreInfoOrganization org={org} /> */}
                      {/* <EditOrganization org={org} />
                      <DeleteOrganization org={org} /> */}
                    </div>
                  </td>
               </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Program;