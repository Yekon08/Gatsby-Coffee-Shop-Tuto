import React from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

const Menu = ({ items }) => {
  console.log("items: ", items)
  console.log("items length: ", items.edges.length)

  const itemsRender = items.edges.map(edge => {
    return (
      <div
        key={edge.node.id}
        className="flex justify-between items-center text-xl w-1/2 mt-8 mx-auto"
      >
        <Img className="rounded" fixed={edge.node.image.fixed} />
        <div className="ml-6">
          <p className="font-bold">{edge.node.title}</p>
          <p className="font-light">{edge.node.description.description}</p>
        </div>
        <p className="ml-6 font-bold text-mainYellow">{edge.node.price}$</p>
      </div>
    )
  })

  if (items.edges.length > 0) {
    return (
      <div className="text-center px-8 py-16 bg-gray-300">
        <Title title="Best Of Our Menu" />
        <h2 className="text-mainDark text-3xl font-light">
          these are our items
        </h2>
        <div>{itemsRender}</div>
      </div>
    )
  } else {
    return <p>probleeeeeeeeeeeeeme</p>
  }
}

export default Menu
