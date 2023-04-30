import React from "react";
import useSWR from "swr";
import RecipeCard from "./RecipeCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Random = () => {
  const { data, error } = useSWR(
    "http://localhost:8080/api/recipe/random",
    fetcher
  );

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

export default Random;
