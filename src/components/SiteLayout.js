import React from "react"
import PropTypes from "prop-types"
import Header from "./SiteHeader"
import "./style.css"

const SiteLayout = ({ children, location }) => (
  <>
    <Header location={location} />

    <div className="content">{children}</div>

    <div className="footer">
      © {new Date().getFullYear()} | Built with
      {` `}
      <a href="https://www.wpgraphql.com">WPGraphQL</a> and{` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </>
)

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteLayout
