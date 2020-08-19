import React from "react"
import { link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BgSection from "../components/Globals/BgSection"
import Info from '../components/Home/Info'

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <BgSection
        img={data.img.childImageSharp.fluid}
        title="about us"
        styleClass="min-h-bgAboutScreen flex justify-center items-center bg-linear"
      />
      <Info />
    </Layout>
  )
}

export const query = graphql`
  query {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
