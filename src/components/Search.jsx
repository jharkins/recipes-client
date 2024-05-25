import React, { useState } from "react";
import useSWR from "swr";
import { Link } from "react-router-dom";
import { Container, Form, Button, ListGroup, Row, Col } from "react-bootstrap";
import { API_URL } from "../config";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Search = () => {
  const [term, setTerm] = useState("");
  const [query, setQuery] = useState("");

  const { data, error } = useSWR(
    query ? `${API_URL}/api/recipe/search-recipes?term=${query}` : null,
    fetcher
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(term);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Search Recipes</h2>
          <Form onSubmit={handleSearch}>
            <Form.Group controlId="searchTerm">
              <Form.Label>Search Term</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a search term"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          {error && <div>Error: {error.message}</div>}
          {data && (
            <ListGroup className="mt-3">
              {data.length > 0 ? (
                data.map((recipe) => (
                  <ListGroup.Item key={recipe.id}>
                    <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
                  </ListGroup.Item>
                ))
              ) : (
                <div>No recipes found</div>
              )}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
