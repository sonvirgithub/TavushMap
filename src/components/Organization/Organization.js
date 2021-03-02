import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AddOrganization from "./AddOrganization";
import DeleteOrganization from "./DeleteOrganization";
import EditOrganization from "./EditOrganization";
import MoreInfoOrganization from "./MoreInfoOrganization";
import "./style.css";
import axios from "axios";

function Organization({ organizations }) {
  console.log(organizations, "organizations");
  return (
    <div style={{ marginLeft: "328px" }}>
      <div className="org_title">
        <div className="org_title_txt">Կազմակերպություններ</div>
        <div>
          <AddOrganization />
        </div>
      </div>

      <table style={{ width: "100%" }}>
        <thead style={{ fontSize: "18px", fontWeight: "700" }}>
          <tr>
            <th>
              Կազմակերպության անվանում{" "}
              <span style={{ fontWeight: "400" }}>(Հայ)</span>
            </th>
            <th>
              Կազմակերպության անվանում
              <span style={{ fontWeight: "400" }}>(Անգլ)</span>
            </th>
            <th>Կոնտակտ անձ</th>

            <th></th>
          </tr>
        </thead>

        <tbody style={{ fontSize: "16px" }}>
          {organizations.length > 0 ? (
            organizations.map((org, index) => {
              return (
                <tr key={org.id}>
                  <td>{org.name_arm}</td>
                  <td>{org.name_eng}</td>
                  <td>{org.person}</td>
                  {/* <td>{org.name_eng}</td> */}
                  <td
                  //   style={{ display: "flex" }}
                  >
                    <div style={{ display: "flex", marginRight: "32px" }}>
                      {/* <MoreInfoOrganization org={org} /> */}
                      <EditOrganization org={org} />
                      <DeleteOrganization org={org} />
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

export default Organization;
