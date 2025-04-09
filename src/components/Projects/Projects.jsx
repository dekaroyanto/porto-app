import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wuling from "../../Assets/Projects/wuling.png";
import scentnice from "../../Assets/Projects/scentnice.png";
import tri from "../../Assets/Projects/tri.png";
import talent from "../../Assets/Projects/talent.png";
import presensi from "../../Assets/Projects/presensi.png";
import afiliator from "../../Assets/Projects/afiliator.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wuling}
              isBlog={false}
              title="Business Consultant Wuling"
              description="This website is the official digital platform for Wuling Bali Business Consultant, designed to showcase car sales consulting services for the Wuling brand in the Bali area. It provides comprehensive information about Wuling products, the latest offers, credit simulation tools, and direct consultation services via WhatsApp."
              demoLink="https://ydewmobilbarubali.my.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={afiliator}
              isBlog={false}
              title="ScentNice Affiliate"
              description="This landing page was specifically created to support the affiliate registration program for the ScentNice perfume brand. Designed with a modern, clean, and responsive layout, the page serves as both an information hub and a registration gateway for anyone interested in joining the ScentNice sales team."
              demoLink="https://scentnice.co.id/affiliate-dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scentnice}
              isBlog={false}
              title="ScentNice E-commerce"
              description="This application is an e-commerce platform for the ScentNice perfume brand. Designed with a modern and responsive interface, the website allows users to easily browse the perfume catalog, view product details, add items to the cart, and complete the checkout process seamlessly."
              demoLink="https://perfume.scentnice.co.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tri}
              isBlog={false}
              title="Transmart Umroh Rewards"
              description="Transmart Umroh Rewards is a loyalty app that lets customers earn points from every purchase at Transmart. These points can be exchanged for lottery vouchers, giving them a chance to win a free Umrah trip."
              demoLink="https://hadiah.transmart.co.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={talent}
              isBlog={false}
              title="Talent Recap"
              description="This application was developed to record talent sessions during live broadcasts or video shoots and automatically calculate fees based on the number of sessions. Equipped with features such as talent data input, session type selection, and daily summaries, the app simplifies talent performance monitoring and ensures fast, accurate payment calculations."
              ghLink="https://github.com/dekaroyanto/talent-nafast"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={presensi}
              isBlog={false}
              title="PresenTrack"
              description="This application is designed to record employee attendance and automatically calculate salaries based on the number of days present. Key features include employee data input, daily attendance tracking, and efficient monthly salary calculations. It is ideal for small businesses or SMEs to simplify attendance management and payroll processes."
              ghLink="https://github.com/dekaroyanto/nafast-media"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
