import React from "react"
import { Link } from "gatsby"


const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path} className="overflow-hidden bg-white">
      <div className="px-4 py-5 sm:p-6">
          <h2 className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">
            {post.frontmatter.title}
          </h2>
          <p className="max-w-xl mt-5 text-lg text-gray-500">
            {post.excerpt}
          </p>
      </div>
    </Link>
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
    </div>
  </div>
)
export default PostLink