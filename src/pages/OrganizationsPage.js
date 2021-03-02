import React, { useEffect, useState } from "react";
import Organization from "../components/Organization/Organization";
import axios from "axios";

export const OrganizationContext = React.createContext();
function OrganizationsPage() {
  const [organizations, setOrganizations] = useState("");

  const addOrganization = (org) => {
    organizations.push(org);
    setOrganizations([...organizations]);
  };

  const editOrganization = (org) => {
    organizations.map((organization) => {
      if (organization.id == org.id) {
        organization.name_eng = org.name_eng;
        organization.name_arm = org.name_arm;
        organization.person = org.person;

        setOrganizations([...organizations]);
      }
    });
  };

  const deleteOrganization = (id) => {
    organizations.map((organization) => {
      if (organization.id == id) {
        const index = organizations.indexOf(organization);
        organizations.splice(index, 1);

        setOrganizations([...organizations]);
      }
    });
  };

  //   console.log("object");
  useEffect(() => {
    const fetchData = async () => {
      console.log("object1");
      const result = await axios("api/organizations");
      console.log(result);
      setOrganizations(result.data.data);
    };

    fetchData();
  }, []);
  console.log(organizations, "organizationsorganizations");
  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <OrganizationContext.Provider
        value={{
          organizations,
          setOrganizations,
          addOrganization,
          deleteOrganization,
          editOrganization,
        }}
      >
        <Organization organizations={organizations} />
      </OrganizationContext.Provider>
    </div>
  );
}

export default OrganizationsPage;
