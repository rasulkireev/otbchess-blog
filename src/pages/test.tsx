// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TestPage = () => (
  <Layout>
    <Seo title="TestPage" />
    <h1>This is a test page!</h1>
    <p>Hello</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TestPage