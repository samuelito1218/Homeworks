import React from "react";

const CategoryList = ({ categories }) => {
  return (
    <div className="category-container">
      <div className="category-list">
        {categories.map((cat, index) => (
          <p key={index} className="category-item">{cat}</p>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

