import React from "react"
import BackgroundImage from "gatsby-background-image"

const BgSection = ({ img, title, children, styleClass }) => {
  return (
    <BackgroundImage className="w-full min-h-bgFullScreen h-full" fluid={img}>
      <div className={styleClass}>
        <h1 className="uppercase font-bold text-5xl text-mainWhite">{title}</h1>
        {children}
      </div>
    </BackgroundImage>
  )
}

BgSection.defaultProps = {
  title: "default title",
  styleClass: "bg-linear w-full h-full min-h-bgFullScreen flex justify-center items-center"
}

export default BgSection
