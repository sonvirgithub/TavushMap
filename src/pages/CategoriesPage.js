import React, { useEffect, useState } from "react";
import Categories from "../components/Category/Categories";
import axios from "axios";

export const CategoryContext = React.createContext();
function CategoriesPage() {
  const [categories, setCategories] = useState("");

  // const addOrganization = (org) => {
  //   organizations.push(org);
  //   setOrganizations([...organizations]);
  // };

  // const editOrganization = (org) => {
  //   organizations.map((organization) => {
  //     if (organization.id == org.id) {
  //       organization.name_eng = org.name_eng;
  //       organization.name_arm = org.name_arm;

  //       setOrganizations([...organizations]);
  //     }
  //   });
  // };

  // const deleteOrganization = (id) => {
  //   organizations.map((organization) => {
  //     if (organization.id == id) {
  //       const index = organizations.indexOf(organization);
  //       organizations.splice(index, 1);

  //       setOrganizations([...organizations]);
  //     }
  //   });
  // };

  //   console.log("object");
  useEffect(() => {
    const fetchData = async () => {
      console.log("object1");
      const result = await axios("/api/categories");
      console.log(result, "result");
      setCategories(result.data.data);
    };

    fetchData();
  }, []);
  // console.log(organizations, "organizationsorganizations");
  return (
    <div>
      {/* <CategoryContext.Provider
        value={{
          organizations,
          setOrganizations,
          addOrganization,
          deleteOrganization,
          editOrganization,
        }}
      >
        <Categories organizations={organizations} />
      </CategoryContext.Provider> */}
      <Categories categories={categories} />
    </div>
  );
}

export default CategoriesPage;
