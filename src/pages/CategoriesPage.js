import React, { useEffect, useState } from "react";
import Categories from "../components/Category/Categories";
import axios from "axios";

export const CategoryContext = React.createContext();
function CategoriesPage() {
  const [categories, setCategories] = useState("");

  const addCategory = (cat) => {
    categories.push(cat);
    setCategories([...categories]);
  };

  const editCategory = (cat) => {
    categories.map((category) => {
      if (category.id == cat.id) {
        category.name_eng = cat.name_eng;
        category.name_arm = cat.name_arm;

        setCategories([...categories]);
      }
    });
  };

  const deleteCategory = (id) => {
    categories.map((cat) => {
      if (cat.id == id) {
        const index = categories.indexOf(cat);
        categories.splice(index, 1);

        setCategories([...categories]);
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("object1");
      const result = await axios("/api/categories");
      console.log(result, "result");
      setCategories(result.data.data);
    };

    fetchData();
  }, []);
  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <CategoryContext.Provider
        value={{
          categories,
          setCategories,
          addCategory,
          deleteCategory,
          editCategory,
        }}
      >
        <Categories categories={categories} />
      </CategoryContext.Provider>
    </div>
  );
}

export default CategoriesPage;
