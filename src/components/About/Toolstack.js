import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiFigma,
  SiGithub,
  SiWordpress,
} from "react-icons/si";
import { SiCanva } from "react-icons/si"; // Add Canva icon if there's one available

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Design & Development Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>

      {/* Collaboration & CMS */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
      </Col>
    </Row>
  );
}

export default Toolstack;
