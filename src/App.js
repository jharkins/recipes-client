import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "./components/Navigation";

import "./App.css";
import Random from "./components/Random";
import Recipe from "./components/Recipe";
import Browse from "./components/Browse";
import Search from "./components/Search";

const Layout = () => (
  <Container fluid>
    <Row>
      <Col>
        <h1>Loyning Cookbook</h1>
      </Col>
    </Row>
    <Row>
      <Col xs={2}>
        <Navigation />
      </Col>
      <Col>
        <Container className="mt-2">
          <Routes>
            <Route path="/" element={<Browse />} />
            <Route path="/random" element={<Random />} />
            <Route path="/search" element={<Search />} />
            <Route path="/recipe/:id" exact element={<Recipe />} />
          </Routes>
        </Container>
      </Col>
    </Row>
  </Container>
);

const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default App;
