import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
