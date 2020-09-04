import React from "react"
import Img from "gatsby-image"

const Product = ({ product }) => {
  return (
    <div className="">
      <Img fixed={product.image.fixed} />
      <h6>{product.title}</h6>
    </div>
  )
}

export default Product
