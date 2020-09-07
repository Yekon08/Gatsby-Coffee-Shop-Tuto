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
            fixed(width: 300, height: 300) {
              src
              ...GatsbyContentfulFixed
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
          <div className="mx-auto flex justify-center items-center flex-col py-8">
            <Title title="Our Products" />
            <div className="flex justify-center items-center flex-wrap px-8">
              {data.products.edges.map(({ node: product }) => {
                return <Product key={product.id} product={product} />
              })}
            </div>
          </div>
        )
      }}
    />
  )
}

export default Products
