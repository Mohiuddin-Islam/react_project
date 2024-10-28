import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
              Since 2011, Excellence Car Rental has been serving local, regional and international customers. We are a locally owned rental company In Bangladesh. Car rental in Bangladesh has never been easier than with Excellence Car Rental. We offer unmatched service, selection, and competitive pricing. Excellence Car Rental is the premier car rental company in Bangladesh whereby we believe in excellent customer service and meeting our customer need. Our selection includes Luxury, Jeep Wranglers, Compact, Pickup, Midsize and Full-size automobiles for rent or lease. We offer competitive prices, customer discounts and excellent customer service. We focus on ensuring that every customer enjoys their rental experience and stay here in Bangladesh. Our focus is to always meet our customer demand and satisfaction at all times.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Unlimited Miles Car Rental.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Many Pickup Locations.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Airport Transfer 24/7 Days..
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Fast & Easy Booking.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
