import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AddSupportType from "./AddSupportType";

function SupportType({ supportTypes }) {
  console.log(supportTypes, "supportTypes");
  return (
    <div style={{ marginLeft: "328px" }}>
      <div className="org_title">
        <div className="org_title_txt">Աջակցության տեսակներ</div>
        <div>
          {/* <AddCategory /> */}
          <AddSupportType />
        </div>
      </div>

      <Table hover>
        <thead>
          <tr>
            <th>Ոլորտ (Հայ)</th>
            <th>Ոլորտ (Անգլ)</th>
            <th>Աջակցության տեսակ (Հայ)</th>
            <th>Աջակցության տեսակ (Անգլ)</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {supportTypes.length > 0 ? (
            supportTypes.map((supType, index) => {
              return (
                <tr key={supType.id}>
                  <td>{supType.category_arm}</td>
                  <td>{supType.category_eng}</td>
                  <td>{supType.support_arm}</td>
                  <td>{supType.support_eng}</td>

                  <td>
                    <div style={{ display: "flex" }}></div>
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
  );
}

export default SupportType;
