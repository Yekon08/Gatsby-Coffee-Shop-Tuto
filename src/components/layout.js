/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import NavBar from "./Globals/NavBar"
import Footer from "./Globals/Footer"

const Layout = ({ children }) => {
  return (
    <div className="font-body text-mainDark">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
