import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <React.Fragment>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </Helmet>
    <Layout>
      <SEO title="Home" />
    </Layout>
  </React.Fragment>
)

export default IndexPage
