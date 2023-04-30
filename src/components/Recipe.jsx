import React from "react";
import useSWR from "swr";
import RecipeCard from "./RecipeCard";
import { useParams } from "react-router-dom";
import { API_URL } from "../config";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Recipe = () => {
  const { id: recipeID } = useParams();
  const { data, error } = useSWR(`${API_URL}/api/recipe/${recipeID}`, fetcher);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <RecipeCard recipe={data} />
    </div>
  );
};

export default Recipe;
