// A react component that fetches a list of recipes and presents them in a RecipeTable
// Path: src/components/Browse.jsx
import React, { useState } from "react";
import useSWR from "swr";
import RecipeTable from "./RecipeTable";
import { Container, Pagination, Form, Row, Col } from "react-bootstrap";

const API_URL = "http://localhost:8080";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Browse = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data, error } = useSWR(
    `${API_URL}/api/recipe/?page=${pageIndex}&pageSize=${pageSize}`,
    fetcher
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const maxPage = Math.ceil(data.total / data.pageSize);

  const handlePrevClick = () => {
    if (pageIndex > 1) {
      setPageIndex(pageIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (pageIndex < maxPage) {
      setPageIndex(pageIndex + 1);
    }
  };

  const handlePageSizeChange = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setPageIndex(1);
  };

  return (
    <Container>
      <RecipeTable recipes={data.recipes} />
      <Container>
        <Row>
          <Col>
            <Pagination>
              <Pagination.Item
                onClick={handlePrevClick}
                disabled={pageIndex === 1}
              >
                Previous
              </Pagination.Item>
              <Pagination.Item
                onClick={handleNextClick}
                disabled={pageIndex === maxPage}
              >
                Next
              </Pagination.Item>
            </Pagination>
          </Col>
          <Col>
            <Form.Group controlId="pageSize">
              <Form.Label>Recipes per page:</Form.Label>
              <Form.Control
                as="select"
                value={pageSize}
                onChange={handlePageSizeChange}
              >
                <option>5</option>
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Browse;
