import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AddSupportType from "./AddSupportType";
import DeleteSupportType from "./DeleteSupportType";
import EditSupportType from "./EditSupportType";

function SupportType({ supportTypes, categoryType }) {
  console.log(supportTypes, "supportTypes");
  return (
    <div style={{ marginLeft: "328px" }}>
      <div className="org_title">
        <div className="org_title_txt">Աջակցության տեսակներ</div>
        <div>
          <AddSupportType categoryType={categoryType} />
        </div>
      </div>

      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>
              Ոլորտ
              {/* <span style={{ fontWeight: "400" }}>(Հայ)</span> */}
            </th>
            {/* <th>
              Ոլորտ <span style={{ fontWeight: "400" }}>(Անգլ)</span>{" "}
            </th> */}
            <th>
              Աջակցության տեսակ <span style={{ fontWeight: "400" }}>(Հայ)</span>
            </th>
            <th>
              Աջակցության տեսակ{" "}
              <span style={{ fontWeight: "400" }}>(Անգլ)</span>{" "}
            </th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {supportTypes.length > 0 ? (
            supportTypes.map((supType, index) => {
              return (
                <tr key={supType.id}>
                  <td>{supType.category_arm}</td>
                  {/* <td>{supType.category_eng}</td> */}
                  <td>{supType.support_arm}</td>
                  <td>{supType.support_eng}</td>

                  <td>
                    <div style={{ display: "flex" }}>
                      <EditSupportType
                        supType={supType}
                        categoryType={categoryType}
                      />

                      <DeleteSupportType supType={supType} />
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
      </table>
    </div>
  );
}

export default SupportType;
