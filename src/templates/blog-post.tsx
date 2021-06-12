import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"

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


      <div className="pt-16 pb-8 mx-auto mt-1 text-gray-900 sm:px-4">
        <p className="mb-10 text-blue-700">← <Link to="/">back to posts</Link></p>
        <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
          {post.frontmatter.title}
        </h1>
        <p className="text-gray-500">
          {post.frontmatter.author} | {post.frontmatter.date} | {post.timeToRead} min
        </p>
      </div>

      <div
        className="mx-auto mt-6 prose prose-lg text-gray-800 prose-indigo"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`