import React from "react"
import renderer from "react-test-renderer"

import Markdown from "../markdown"

const validNode = {
  childMarkdownRemark: {
    html: "<p>Hello World</p>",
  },
}

describe("Markdown", () => {
  it("renders null for empty objects", () => {
    const tree = renderer.create(<Markdown node={{}} />).toJSON()
    expect(tree).toBeNull()
    expect(tree).toMatchSnapshot()
  })
  it("renders null for incorrectly structured objects", () => {
    const tree = renderer.create(<Markdown node={{ hello: "world" }} />).toJSON()
    expect(tree).toBeNull()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly", () => {
    const tree = renderer.create(<Markdown node={validNode} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
