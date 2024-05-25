import React from "react";
import { Card, Badge } from "react-bootstrap";

const RecipeCard = (props) => {
  const { recipe } = props;

  const formatText = (text) => {
    return text.split("\r\n").map((str, index) => (
      <span key={index}>
        {str}
        <br />
      </span>
    ));
  };

  return (
    <Card className="mb-4">
      <Card.Header>
        <h2>{recipe.name}</h2>
        <Badge variant="info">{recipe.kind}</Badge>
      </Card.Header>
      <Card.Body>
        <Card.Title>Origin: {recipe.origin}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Serves: {recipe.enough_for}
        </Card.Subtitle>
        <Card.Text>
          <strong>Ingredients:</strong>
          <br />
          {formatText(recipe.ingredients)}
        </Card.Text>
        <Card.Text>
          <strong>Description:</strong>
          <br />
          {formatText(recipe.description)}
        </Card.Text>
        <Card.Text>
          <strong>Prep Time:</strong> {recipe.prep_time} |{" "}
          <strong>Cook Time:</strong> {recipe.cook_time}
        </Card.Text>
        <Card.Text>
          <strong>Difficulty:</strong> {recipe.difficulty}
        </Card.Text>
        <Card.Text>
          <strong>Notes:</strong>
          <br />
          {formatText(recipe.notes)}
        </Card.Text>
        <Card.Text>
          <strong>Serving Size:</strong> {recipe.serving_size}
        </Card.Text>
        <Card.Text>
          <strong>Rating:</strong> {recipe.rating}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
