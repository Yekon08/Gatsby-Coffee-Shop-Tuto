import React, { useState, useEffect } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

const Menu = ({ items }) => {
  const [category, setCategory] = useState([])
  console.log("category : ", category)

  // Functions
  useEffect(() => {
    // get category
    let tempItems = items.edges.map(edge => {
      return edge.node.category
    })
    let tempCategories = new Set(tempItems)
    let categories = Array.from(tempCategories)
    categories = ["all", ...categories]
    setCategory(categories)
  }, [])

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

  const itemsFilter = category => {
    let tempItems = items.edges.filter(({ node }) => node.category === category)
    console.log("bonjour", tempItems)
  }

  //Render
  if (items.edges.length > 0) {
    return (
      <div className="text-center px-8 py-16 bg-gray-300">
        <Title title="Best Of Our Menu" />
        <h2 className="text-mainDark text-3xl font-light">
          these are our items
        </h2>
        <button onClick={itemsFilter("Coffee")}>test</button>
        <div>{itemsRender}</div>
      </div>
    )
  } else {
    return <p>probleeeeeeeeeeeeeme</p>
  }
}

export default Menu
