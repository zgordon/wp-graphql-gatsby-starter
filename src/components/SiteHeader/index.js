import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SiteMenu from "../SiteMenu"
import wpgraphqlLogo from "../../images/wpgraphql-logo.png"

const Index = ({ location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img
              src={wpgraphqlLogo}
              alt="WPGraphQL Logo"
              style={{ height: `30px`, width: `30px` }}
            />
            {data.site.siteMetadata.title}
          </Link>
        </div>
        <SiteMenu location={location} />
      </div>
    )}
  />
)

Index.propTypes = {
  siteTitle: PropTypes.string,
}

Index.defaultProps = {
  siteTitle: ``,
}

export default Index
