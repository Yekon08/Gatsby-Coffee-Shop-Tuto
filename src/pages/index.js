import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BgSection from "../components/Globals/BgSection"
import Info from "../components/Home/Info"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <BgSection img={data.img.childImageSharp.fluid} title="regular joe's" styleClass="min-h-bgFullScreen flex justify-center items-center bg-linear" />
      <Info />
    </Layout>
  )
}

export const query = graphql`
  query {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
