import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

interface Props {
  data: any
}

export default function Template({ data }: Props) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Seo title={`${post.frontmatter.title}`} />
      <Helmet title={`${post.frontmatter.title}`} />

        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-lg max-w-prose">
            <h1 className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
              {post.frontmatter.title}
            </h1>
          </div>
          <div
            className="mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`