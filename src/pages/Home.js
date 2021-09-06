import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Form from '../Form';
import Calendar from "./Calendar"
const home = () => {
  return (
    <>
      <Hero>
      <Form />

        <Banner
          title="Anshul Flight Services"
          subtitle="A Memorable Experience "
        >
          <Link to="/Fli" className="btn-primary">
            Available Flights
          </Link>
        
        </Banner>
        <Calendar/>
      </Hero>
      <Services />
    </>
  );
};

export default home;
