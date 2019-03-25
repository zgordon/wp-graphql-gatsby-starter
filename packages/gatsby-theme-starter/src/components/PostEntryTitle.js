import React from "react"
import { Link } from "gatsby"

const PostEntryTitle = ({ post, location, titleClass }) => (
  <>
    {location === "single" ? (
      <h1 className={titleClass} dangerouslySetInnerHTML={{__html: post.title}} />
    ) : (
      <h2 className={titleClass}>
        <Link to={`/blog/${post.uri}`} dangerouslySetInnerHTML={{__html: post.title}} />
      </h2>
    )}
  </>
)

export default PostEntryTitle
