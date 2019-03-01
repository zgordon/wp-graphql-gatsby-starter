import React, { Component } from "react"
import { graphql } from "gatsby"
import CategoriesWidget from "../components/CategoriesWidget"
import RecentCommentsWidget from "../components/RecentCommentsWidget"
import RecentPostsWidget from "../components/RecentPostsWidget"
import PostEntry from "../components/PostEntry"
import HomepageLayout from "../components/HomepageLayout"
import Seo from "../components/Seo"
import Pagination from "../components/Pagination"

class IndexPage extends Component {
  render() {
    const {
      data,
      location,
      pageContext: { pageNumber, hasNextPage, allPosts, itemsPerPage },
    } = this.props
    const blogPageNumber = pageNumber ? ` Page ${pageNumber}` : ``
    return (
      <HomepageLayout pageNumber={pageNumber} location={{ location }}>
        <Seo title={`Blog${blogPageNumber}`} />
        <div className="content">
          {data &&
            data.wpgraphql &&
            data.wpgraphql.posts.nodes.map(post => (
              <div key={post.id}>
                <PostEntry post={post} />
              </div>
            ))}
          <Pagination
            pageNumber={pageNumber}
            hasNextPage={hasNextPage}
            allPosts={allPosts}
            itemsPerPage={itemsPerPage}
          />
        </div>
        <div className="sidebar">
          <RecentPostsWidget />
          <CategoriesWidget />
          <RecentCommentsWidget />
        </div>
      </HomepageLayout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query GET_POSTS($ids: [ID]) {
    wpgraphql {
      posts(first: 12, where: { in: $ids }) {
        nodes {
          ...PostEntryFragment
        }
      }
    }
  }
`
