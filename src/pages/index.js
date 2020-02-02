import React from "react"
import Fragment from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  return (
    <Fragment>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </Helmet>

      <Layout>
        <SEO title="Home" />
      </Layout>
    </Fragment>
  )
)

export default IndexPage
