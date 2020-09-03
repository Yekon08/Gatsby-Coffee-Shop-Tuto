import React, { useState, useEffect } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

const Menu = ({ items }) => {
  const [articles, setArticles] = useState(items.edges)
  const [category, setCategory] = useState([])

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

  const itemsRender = articles.map(edge => {
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
    let tempItems = items.edges

    if (category === "all") {
      setArticles(tempItems)
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      setArticles(items)
    }
  }

  const buttonsCategories = category.map(category => {
    return (
      <button
        onClick={() => {
          itemsFilter(category)
        }}
        key={category}
        className="focus:outline-none uppercase mt-2 mr-3 last:mr-0 p-2 border-solid border-2 border-mainYellow rounded text-center text-xl text-mainYellow hover:bg-mainYellow hover:text-mainWhite"
      >
        {category}
      </button>
    )
  })

  //Render
  if (items.edges.length > 0) {
    return (
      <div className="text-center px-8 py-16 bg-gray-300">
        <Title title="Best Of Our Menu" />
        <h2 className="text-mainDark text-3xl font-light">
          these are our items
        </h2>
        <div>{buttonsCategories}</div>
        <div>{itemsRender}</div>
      </div>
    )
  } else {
    return <p>No products.</p>
  }
}

export default Menu
