import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { Modal, Form, Table } from "react-bootstrap";
import AddProgram from "./AddProgram/AddProgram";
import DeleteProgram from "./DeleteProgram";
import MoreInfoProgram from "./MoreInfoProgram";
import EditProgram from './EditProgram'

function Program({ setProgramId, programs, setPrograms, showResults, setShowResults }) {

  const [item, setItem] = useState({})
  const [itemDelete, setItemDelete] = useState({})
  const [editShow, setEditShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [isSelect, setIsSelect] = useState([])



  const handleShowEdit = (index) => {

    if (programs[index].status === "ընթացիկ") {
      programs[index].status =1
    }
    if (programs[index].status === "ավարտված") {
      programs[index].status =2
    }
   
    setItem(programs[index])
    

    setEditShow(true)
    programs[index].support.map((item) => {
      item.supports.map((support) => {
        isSelect.push({
          supportid: support.supportid
        })
      })
    })
  }

  const handleShowDelete = (index) => {
    setItemDelete(programs[index])
    setDeleteShow(true)
  }


  return (
    <div
    // style={{ position: "absolute" }}
    >
      <div style={{ marginLeft: "328px" }}>
        <div className="org_title">
          <div className="org_title_txt">Ծրագրեր</div>
          <div>
            <AddProgram />
          </div>
        </div>

        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Ծրագրի անուն</th>
              <th>Աջակցության տեսակ</th>
              <th>Բյուջե</th>
              <th>Կարգավիճակ</th>
              <th>Ծրագրի ղեկավար</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {programs.length > 0 ? (

              programs.map((prog, index) => {

                return (

                  <tr key={prog.id}>
                    <td>{prog.programName_arm}</td>
                    <td>{prog.support_arm}</td>
                    <td>{prog.budget}</td>
                    <td>{prog.status}</td>
                    <td>{prog.manager}</td>
                    <td>

                      <div style={{ display: "flex" }}>

                        <div variant="primary" onClick={() => {
                          handleShowEdit(index);

                        }}>
                          <img className="org_icon" src={require("../../img/edit.svg").default} />
                        </div>
                      </div>
                      <div style={{ marginLeft: "5px" }} onClick={() => {
                        handleShowDelete(index);

                      }}>
                        <img
                          className="org_icon"
                          src={require("../../img/remove.svg").default}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5">Տվյալներ չկան</td>
              </tr>
            )}
          </tbody>
          <EditProgram prog={item} setProg={setItem} show={editShow} setShow={setEditShow} isSelect={isSelect} setIsSelect={setIsSelect} />
          <DeleteProgram prog={itemDelete} show={deleteShow} setShow={setDeleteShow} />
          {/* <MoreInfoProgram
                          setProgramId={setProgramId}
                          prog={prog}
                          programs={programs}
                          showResults={showResults}
                          setShowResults={setShowResults}
                        /> */}
        </table>
      </div>

    </div>
  );
}

export default Program;
