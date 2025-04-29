import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/proffesional website.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/portfolio basic.png";
import chatify from "../../Assets/Projects/eradigicloud.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/drsrank.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Eradigicloud website"
              description="Eradigicloud is an online education platform that offers comprehensive courses in digital marketing and various tech domains, focusing on practical skills, live sessions, real-world projects, and career-ready training for students, professionals, and entrepreneurs."
              ghLink="https://github.com/udit0423/eradigicloud"
              demoLink="https://eradigicloud.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Drs Rank website"
              description="DRS Rank is an online platform that provides detailed rankings and insights into various fields, such as education, business, and technology. It offers users the ability to view and compare rankings of institutions, professionals, and services, helping them make informed decisions. The website also includes reviews, ratings, and performance metrics to support its ranking system."
              ghLink="https://github.com/udit0423"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Basic portfolio website"
              description="A **basic portfolio website** is a simple personal website that highlights your skills, projects, and contact information. It typically includes a brief **About Me** section, a showcase of **projects** or work, and a way to **contact** you. The goal is to present your work and expertise in a clean, easy-to-navigate format."
              ghLink="https://github.com/udit0423"
              demoLink="https://udit0423.github.io/portfolio/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="persnol portfolio website"
              description="An **advanced personal portfolio website** is a professional, interactive site that showcases your skills, projects, and experience with features like animations, dynamic portfolios, blog posts, responsive design, SEO, and interactive UI elements, offering a comprehensive view of your expertise."
              ghLink="https://github.com/udit0423"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
