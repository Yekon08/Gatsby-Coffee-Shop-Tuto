import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BgSection from "../components/Globals/BgSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Products from "../components/Home/Products"
import Contact from "../components/Home/Contact"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <BgSection
        img={data.img.childImageSharp.fluid}
        title="Coffee Shop"
        styleClass="min-h-bgFullScreen flex justify-center items-center bg-linear"
      />
      <Info />
      <Menu items={data.menu} />
      <Products />
      <Contact />
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

    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 100, height: 100) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

export default IndexPage
