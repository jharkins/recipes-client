// A react component that presents a table of recipes
// Path: src/components/RecipeTable.jsx

import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipeTable = (props) => {
  const { recipes } = props;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Kind</th>
          <th>Origin</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe) => (
          <tr key={recipe.id}>
            <td>
              <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
            </td>
            <td>{recipe.kind}</td>
            <td>{recipe.origin}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RecipeTable;
