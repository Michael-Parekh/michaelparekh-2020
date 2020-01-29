import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import HeaderImage from "./image";
import Particles from 'react-particles-js';
import { setConfiguration, Container, Row, Col } from 'react-grid-system';

setConfiguration({ breakpoints: [576, 768, 992, 1200] });


const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Row>
        <Col sm={12} md={8} lg={8} xl={8}>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1.45rem 1.0875rem`
            }}
          >
            <h1 style={{ margin: 0, color: `white` }}>
              Hey, I'm Michael!
            </h1>
            <h2 id="subheader" style={{ paddingTop: `3.5rem`, color: `white` }}>
              I'm an <span className="underline">ambitious coder</span> & <span className="underline">visionary entrepreneur</span>.
            </h2>
            <h4 className="header-icons">
              <span>📍<a href="https://twitter.com/michaelparekh" target="_blank">Twitter</a></span>
              <span>👋<a href="https://linkedin.com/in/michael-parekh" target="_blank">LinkedIn</a></span>
              <span>💻<a href="https://github.com/Michael-Parekh" target="_blank">GitHub</a></span>
              <span>✉️<a href="mailto:parekh1392@students.d211.org" target="_blank">Email</a></span>
            </h4>
          </div>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4} align="center">
          <div className="header-image">
            <HeaderImage />
          </div>
        </Col>
      </Row>
    </Container>

    <Particles
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1
      }}
      className="particles"
      params={{
        particles: {
      	   line_linked: {
            	enable: false
        	 },
           number: {
             value: 50
           }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: true,
              mode: "bubble"
            },
            modes: {
              bubble: {
                size: 2
              }
            }
          }
        }
    	}}
    />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
