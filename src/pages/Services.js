/* eslint-disable no-lone-blocks */
import React from "react";
import "./services.css";

function Services() {
  return (
    <>
      <div class="row">
        <div className="services_head">Our Services</div>
        <div class="column">
          <h2>
            Architectural <br />
            Service
          </h2>
          <p>
            Architectural services include <br />
            design,preparation of construction <br/>documents and construction
            administration
          </p>
          <p>Learn more</p>
        </div>
        <div class="column">
          <h2>
            {" "}
            Expectiding <br />
            Service
          </h2>
          <p>
            Enable your project as schedule and aid in minimizing delays and
            costlyproduct deficiency issues
          </p>
          <p>Learn more</p>
        </div>
        <div class="column">
          <h2>
            Consultant <br />
            Service
          </h2>
          <p>
            Our solutions and services help our clients reduce risk,improve
            their performance and meet the challenge of quality health and
            safety
          </p>
          <p>Learn more</p>
        </div>
      </div>
    </>
  );
}

export default Services;
