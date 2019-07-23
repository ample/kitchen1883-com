import React from "react"
import renderer from "react-test-renderer"

import HTML from "../../utilities/html"

const validNode = {
  childMarkdownRemark: {
    html: "<p>Hello World</p>",
  },
}

describe("HTML", () => {
  it("renders null for empty objects", () => {
    const tree = renderer.create(<HTML field={{}} />).toJSON()
    expect(tree).toBeNull()
    expect(tree).toMatchSnapshot()
  })
  it("renders null for incorrectly structured objects", () => {
    const tree = renderer.create(<HTML field={{ hello: "world" }} />).toJSON()
    expect(tree).toBeNull()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly", () => {
    const tree = renderer.create(<HTML field={validNode} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
