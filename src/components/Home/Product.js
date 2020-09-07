import React from "react"
import Img from "gatsby-image"

const Product = ({ product }) => {
  return (
    <div className="shadow mt-8 p-6 text-xl ml-6">
      <Img fixed={product.image.fixed} className="rounded" />
      <div className="flex flex-col justify-center items-center">
        <h6 className="mt-4 font-bold">{product.title}</h6>
        <h6 className="font-bold text-mainYellow">{product.price}$</h6>
        <button
          className="snipcart-add-item focus:outline-none uppercase mt-6 p-2
          border-solid border-2 border-mainYellow rounded text-center text-xl
          text-mainYellow hover:bg-mainYellow hover:text-mainWhite"
          data-item-id={product.id}
          data-item-price={product.price}
          data-item-url="https://coffe-shop-test.netlify.app/"
          data-item-image={product.image.fixed.src}
          data-item-name={product.title}
        >
          {" "}
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default Product
