import React from "react";
import Container from "../Container";
import { categories } from "./categoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <p>
            <CategoryBox label={item.label} icon={item.icon} key={item.label} />
          </p>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
