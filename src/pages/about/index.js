import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Card, Container } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  socialprofils,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timeline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">My Facebook Groups</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <ul>
              <li>
                <a href={socialprofils.facebookGroup1}>
                  𝓛𝓸𝓿𝓮 𝓪𝓷𝓭 𝓛𝓸𝓿𝓮 𝓹𝓪𝓰𝓮♡︎group
                </a>
              </li>
              <li>
                <a href={socialprofils.facebookGroup2}>Cuty Baby Page Group</a>
              </li>
              <li>
                <a href={socialprofils.facebookGroup3}>CUTE AI PHOTOS</a>
              </li>
              <li>
                <a href={socialprofils.facebookGroup4}>
                  Ai Flowers & Girls Page Group
                </a>
              </li>
              <li>
                <a href={socialprofils.facebookGroup5}>
                  Digital Surreal Universal Art
                </a>
              </li>
              <li>
                <a href={socialprofils.facebookGroup6}>∆DTA Group</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">My Social Channels</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <ul>
              <li>
                <a href={socialprofils.facebookPage1}>Love & Obey</a>
              </li>
              <li>
                <a href={socialprofils.facebookPage2}>CUTY BAB </a>
              </li>
              <li>
                <a href={socialprofils.facebookPage3}>DTA</a>
              </li>
              <li>
                <a href={socialprofils.tiktok}>TikTok</a>
              </li>
              <li>
                <a href={socialprofils.pintrest}>Pintrest</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7" className="grid-container">
            {skills.map((skills, i) => {
              return (
                <div key={i}>
                  <Card className="skill-card">
                    <Card.Body>
                      <h3 className="card-title">{skills.name}</h3>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
