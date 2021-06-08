import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 className="text-3xl">Hi people</h1>
    <p className="text-green-500">Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link className="block" to="/page-2/">
        Go to page 2
      </Link>
      <Link className="block" to="/using-typescript/">
        Go to "Using TypeScript"
      </Link>
      <Link className="block" to="/test/">
        Go to Test Page
      </Link>
    </p>
  </Layout>
)

export default IndexPage
