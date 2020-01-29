import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import { setConfiguration, Container, Row, Col } from 'react-grid-system';
import ProjectOneImage from './project-one-image'
import ProjectTwoImage from './project-two-image'
import ProjectThreeImage from './project-three-image'
import ProjectFourImage from './project-four-image'

setConfiguration({ gutterWidth: 20, breakpoints: [500, 768, 992, 1200] });

const Projects = ({ siteTitle }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
      marginTop: `3.5rem`
    }}
  >
    <h2 style={{ margin: 0, marginBottom: 20 }}>
      Featured Projects:
    </h2>

    <Container>
      <Row justify="between">
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <a href="https://windyhacks.com/" className="project-link" target="_blank">
            <div className="project-container">
              <ProjectOneImage className="project-image" style={{ position: `relative`, top: 0, left: 0, height: `2rem` }} />
              <div className="project-box" id="project-box-one">
                <h3 className="project-name">Windy City Hacks '19</h3>
                <h5 className="project-description">
                  Worked with a team of 6 as the Co-Organizer for a HS
                  hackathon in Chicago's loop. Contacted hundreds of schools for
                  320 nationwide registrations and handled logistics.
                </h5>
              </div>
            </div>
          </a>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <a href="https://weallcode.org/" className="project-link" target="_blank">
            <div className="project-container">
              <ProjectTwoImage style={{ position: `relative`, top: 0, left: 0, height: `2rem` }} />
              <div className="project-box" id="project-box-two">
                <h3 className="project-name">Mentor @ We All Code</h3>
                <h5 className="project-description">
                  Mentor on a team of engineers & makers from around Chicago
                  to provide young students with the opportunity to learn the art of
                  coding through exciting classes.
                </h5>
              </div>
            </div>
          </a>
        </Col>
      </Row>
      <Row justify="between">
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <a href="https://fremdstuco.com/" className="project-link" target="_blank">
            <div className="project-container">
              <ProjectThreeImage style={{ position: `relative`, top: 0, left: 0, height: `2rem` }} />
              <div className="project-box" id="project-box-three">
                <h3 className="project-name">FHS Student Council's Website</h3>
                <h5 className="project-description">
                  Built the first-ever website for William Fremd High School’s Student
                  Council using JavaScript and other technologies to increase awareness
                  and membership of the club.
                </h5>
              </div>
            </div>
          </a>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <a href="https://hackchicago.io/" className="project-link" target="_blank">
            <div className="project-container">
              <ProjectFourImage style={{ position: `relative`, top: 0, left: 0, height: `2rem` }} />
              <div className="project-box" id="project-box-four">
                <h3 className="project-name">Hack Chicago '18</h3>
                <h5 className="project-description">
                  Largest HS hackathon in the Midwest for 2018. Co-Organizer with logistics,
                  including event experience, food catering, and transportation for over 200
                  nationwide attendees.
                </h5>
              </div>
            </div>
          </a>
        </Col>
      </Row>
    </Container>

    <form target="_blank">
      <button type="submit" formAction="https://github.com/Michael-Parekh" target="_blank">See more >></button>
    </form>


  </div>
)

Projects.propTypes = {
  siteTitle: PropTypes.string,
}

Projects.defaultProps = {
  siteTitle: ``,
}

export default Projects
