import React from "react";
import Form from "./Form";
import Hero from "./Hero";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="container-md bg-dark">
      <Navbar />
      <Hero />
      <h1 className="text-start mt-5">
        <i class="bi bi-arrow-down text-light" />
      </h1>
      <Form />
    </div>
  );
}

export default Home;
