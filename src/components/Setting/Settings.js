import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AddSetting from "./AddSetting";
import DeleteSetting from "./DeleteSetting";
import EditSetting from "./EditSetting";

function Settings({ settings }) {
  return (
    <div style={{ marginLeft: "328px" }}>
      <div className="org_title">
        <div className="org_title_txt">Կարգավորումներ</div>
        <div>
          <AddSetting />
        </div>
      </div>

      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Անուն</th>
            <th>Ազգանուն</th>
            <th>Էլ․ հասցե</th>

            <th></th>
          </tr>
        </thead>

        <tbody>
          {settings.length > 0 ? (
            settings.map((set, index) => {
              return (
                <tr key={set.id}>
                  <td>{set.firstname}</td>
                  <td>{set.lastname}</td>
                  <td>{set.email}</td>

                  <td>
                    <div style={{ display: "flex", marginRight: "50px" }}>
                      <EditSetting set={set} />
                      <DeleteSetting set={set} />
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

export default Settings;
