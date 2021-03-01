import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AddCategory from "./AddCategory";
import DeleteCategory from "./DeleteCategory";
import EditCategory from "./EditCategory";
// import AddOrganization from "./AddOrganization";
// import DeleteOrganization from "./DeleteOrganization";
// import EditOrganization from "./EditOrganization";
// import MoreInfoOrganization from "./MoreInfoOrganization";
// import "./style.css";

function Organization({ categories }) {
  console.log(categories, "categories");
  return (
    <div style={{ marginLeft: "328px" }}>
      <div className="org_title">
        <div className="org_title_txt">Կազմակերպություններ</div>
        <div>
          {/* <AddOrganization /> */}
          <AddCategory />
        </div>
      </div>

      <Table hover>
        <thead>
          <tr>
            <th>Ոլորտ (Հայ)</th>
            <th>Ոլորտ (Անգլ)</th>

            <th></th>
          </tr>
        </thead>

        <tbody>
          {categories.length > 0 ? (
            categories.map((cat, index) => {
              return (
                <tr key={cat.id}>
                  <td>{cat.name_arm}</td>
                  <td>{cat.name_eng}</td>

                  <td
                  //   style={{ display: "flex" }}
                  >
                    <div style={{ display: "flex" }}>
                      <EditCategory cat={cat} />
                      <DeleteCategory cat={cat} />
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
  );
}

export default Organization;
