import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navigation from "./components/Navigation";

import Random from "./components/Random";
import Recipe from "./components/Recipe";
import Browse from "./components/Browse";
import Search from "./components/Search";
import "./App.css";

const Layout = () => (
  <>
    <Navigation />
    <Container className="mt-4">
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/random" element={<Random />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipe/:id" exact element={<Recipe />} />
      </Routes>
    </Container>
  </>
);

const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default App;
