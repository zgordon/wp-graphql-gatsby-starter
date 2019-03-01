import React from "react"
import { Link, graphql } from "gatsby"
import config from "../../../config"
import PostEntryMeta from "../PostEntryMeta"

const PostEntry = ({ post }) => {
  return (
    <>
      <PostEntryMeta post={post} />

      <h2>
        <Link to={`/blog/${post.uri}`}>{post.title}</Link>
      </h2>
      <div
        dangerouslySetInnerHTML={{
          __html: post.content.replace(config.wordPressUrl, ``),
        }}
      />
    </>
  )
}

export default PostEntry

export const query = graphql`
  fragment PostEntryFragment on WPGraphQL_Post {
    id
    title
    uri
    slug
    date
    content: excerpt
    author {
      name
      slug
      avatar(size: 100) {
        url
      }
    }
  }
`
