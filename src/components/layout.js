/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import About from "./about"
import Projects from "./projects"
import "./layout.css"
import { SocialIcon } from 'react-social-icons';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
      <Projects siteTitle={data.site.siteMetadata.title}/>
      <About siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer style={{ marginTop: 50, marginBottom: 20 }}>
          <SocialIcon url="https://twitter.com/michaelparekh" target="_blank" style={{ height: 35, width: 35, margin: 5 }} bgColor="#6b76ff" fgColor="white"/>
          <SocialIcon url="https://linkedin.com/in/michael-parekh" target="_blank" style={{ height: 35, width: 35, margin: 5 }} bgColor="#6b76ff" fgColor="white"/>
          <SocialIcon url="https://github.com/Michael-Parekh" target="_blank" style={{ height: 35, width: 35, margin: 5 }} bgColor="#6b76ff" fgColor="white"/>
          <SocialIcon url="mailto:parekh1392@students.d211.org" target="_blank" style={{ height: 35, width: 35, margin: 5 }} bgColor="#6b76ff" fgColor="white"/>
          <div className="footer-copyright">By Michael Parekh ✌️</div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
