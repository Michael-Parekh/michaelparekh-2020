import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AboutImage from "./about-image"
import { setConfiguration, Container, Row, Col } from 'react-grid-system';

setConfiguration({ breakpoints: [576, 768, 992, 1200] });

const About = ({ siteTitle }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
      marginTop: `3rem`
    }}
  >
    <h2 style={{ margin: 0, marginBottom: 20 }}>
      Currently:
    </h2>
    <Container>
      <Row>
        <Col md={7}>
          <ul>
            <li>📚 Sophomore @ University of Illinois at Urbana-Champaign</li>
            <li>🎓 Graduated from William Fremd High School</li>
            <li>📱 Building iOS/Android apps with React Native</li>
            <li>🚵‍ Biking towards a total of 1000 miles in 2021</li>
            <li>📦‍ Selling items for my online business</li>
            <li>🎸 Learning to play guitar on YouTube</li>
          </ul>
        </Col>
        <Col md={5} align="center">
          <div className="about-image">
            <AboutImage />
          </div>
        </Col>
      </Row>
    </Container>
    <p className="about-paragraph">
      I’m a <span className="highlight">student from the suburbs of Chicago</span>. I aim to provide students with the CS opportunities
      that I wish I had when I was younger. From Windy City Hacks to Hack Chicago, I have been fortunate to meet passionate individuals from
      around the world and inspire students to build their dreams with code. <span className="highlight">CS is a superpower</span> that has allowed me to build my visionary ideas into a reality,
      and <span className="highlight">I want to continue sharing it with others</span>.
    </p>
  </div>
)

About.propTypes = {
  siteTitle: PropTypes.string,
}

About.defaultProps = {
  siteTitle: ``,
}

export default About
