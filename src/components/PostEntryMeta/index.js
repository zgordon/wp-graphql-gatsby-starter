import React from "react"
import moment from "moment/moment"
import { Link } from "gatsby"

const PostEntryMeta = ({ post }) => (
  <>
    <Link to={`/author/${post.author.slug}`}>
      <div className="avatar">
        <img src={post.author.avatar.url} alt="" />
      </div>
    </Link>

    <Link to={`/author/${post.author.slug}`}>{post.author.name}</Link>
    <br />
    {moment(post.date).format(`MMM Do YY`)}
  </>
)

export default PostEntryMeta
