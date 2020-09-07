import React from "react"
import Title from "../Globals/Title"

const Contact = () => {
  return (
    <div className="mx-auto text-center px-8 py-16 bg-gray-300 text-xl flex justify-center items-center flex-col">
      <Title title="Contact Us !" />
      <form
        className="w-1/2 text-left"
        action="https://formspree.io/mvowerrv"
        method="POST"
      >
        <div className="flex justify-star flex-col mt-6">
          <label className="mb-1" htmlFor="name">
            Name
          </label>
          <input
            className="rounded p-2 bg-transparent shadow bg-gray-100 focus:outline-none"
            type="text"
            name="name"
            id="name"
            placeholder="Bob"
          />
        </div>
        <div className="flex justify-star flex-col mt-6">
          <label className="mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="rounded p-2 bg-transparent shadow bg-gray-100 focus:outline-none"
            type="text"
            name="email"
            id="email"
            placeholder="bob08@gmail.com"
          />
        </div>
        <div className="flex justify-star flex-col mt-6">
          <label className="mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            className="rounded p-2 bg-transparent shadow bg-gray-100 focus:outline-none"
            name="description"
            id="description"
            placeholder="Your text..."
          ></textarea>
        </div>
        <button
          className="focus:outline-none flex justify-center items-center mx-auto mt-6 uppercase py-3 px-10 border-solid border-2 border-mainYellow rounded text-center text-xl text-mainYellow hover:bg-mainYellow hover:text-mainWhite"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
