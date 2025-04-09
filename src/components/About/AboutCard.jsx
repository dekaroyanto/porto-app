import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Deka Royanto </span>
            from <span className="purple">Cirebon, Indonesia.</span>
            <br />
            I am a graduate of Informatics Engineering from Jenderal Soedirman
            University who is interested in the field of technology, especially
            Web Development and has some internship experiences. I have a
            passion for solving problems and continue to strive to expand my
            knowledge of the latest technologies. I also have strong analytical
            skills and am committed to producing efficient solutions.
            <br />
            <br />
            Companies where I interned:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> CV FIRMOS
            </li>
            <li className="about-activity">
              <ImPointRight /> PT TRANS RETAIL INDONESIA
            </li>
            <li className="about-activity">
              <ImPointRight /> PT COLUMBUS
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
