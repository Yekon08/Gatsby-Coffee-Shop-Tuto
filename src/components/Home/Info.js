import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

const Info = () => {
  return (
    <div className="text-center px-8 py-16">
      <Title title="Our Story" />
      <p className="w-1/2 text-center mx-auto mt-6 mb-10 text-gray-600 leading-7 text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        vulputate ante sed mattis sodales. Pellentesque iaculis tempor dui at
        posuere. Nam gravida magna convallis mi fringilla, imperdiet dignissim
        leo efficitur. Integer consectetur ipsum sed varius egestas. Nulla felis
        lectus, semper sit amet iaculis non, aliquet et ex. Duis cursus id.
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit...
      </p>
      <Link
        to="/about"
        className="uppercase mt-6 p-3 border-solid border-2 border-mainYellow rounded text-center text-xl text-mainYellow hover:bg-mainYellow hover:text-mainWhite"
      >
        About page
      </Link>
    </div>
  )
}

export default Info
