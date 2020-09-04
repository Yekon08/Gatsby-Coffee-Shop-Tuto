import React from "react"
import Product from "./Product"
import Title from "../Globals/Title"
import { StaticQuery, graphql } from "gatsby"

const getProducts = graphql`
  {
    products: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          price
          image {
            fixed(width: 250, height: 250) {
              src
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Products = () => {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <div className="mx-auto flex justify-center items-center flex-col">
            <Title title="bonjour" />
            {console.log("data: ", data)}
            {data.products.edges.map(({ node: product }) => {
              return <Product key={product.id} product={product} />
            })}
          </div>
        )
      }}
    />
  )
}

export default Products
