import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import renderer from "react-test-renderer"

configure({ adapter: new Adapter() })

import ContentBlock from "../../content-block"

import soloTextFixture from "../../../../stories/__fixtures__/content-block/solo-text.yml"
import soloImageFixture from "../../../../stories/__fixtures__/content-block/solo-image.yml"
import textTilesFixture from "../../../../stories/__fixtures__/content-block/text-tiles.yml"
import imageTilesFixture from "../../../../stories/__fixtures__/content-block/image-tiles.yml"

// ---------------------------------------- | No Blocks

describe("ContentBlock - No Blocks", () => {
  it("renders", () => {
    const tree = renderer.create(<ContentBlock data={[]} />).toJSON()
    expect(tree).toBeTruthy()
    expect(tree).toMatchSnapshot()
  })
  it("does not have images", () => {
    const wrapper = shallow(<ContentBlock data={[]} />)
    expect(wrapper.instance().hasImages()).toEqual(false)
  })
  it("is not a solo block", () => {
    const wrapper = shallow(<ContentBlock data={[]} />)
    expect(wrapper.instance().isSolo()).toEqual(false)
  })
  it("does not have multiple blocks", () => {
    const wrapper = shallow(<ContentBlock data={[]} />)
    expect(wrapper.instance().hasMultipleBlocks()).toEqual(false)
  })
  it("gets set to auto height", () => {
    const wrapper = shallow(<ContentBlock data={[]} />)
    expect(wrapper.instance().wrapperHeight()).toEqual("auto")
  })
})

// ---------------------------------------- | Solo Text Block

describe("ContentBlock - Solo Text", () => {
  it("renders", () => {
    const tree = renderer.create(<ContentBlock data={soloTextFixture} />).toJSON()
    expect(tree).toBeTruthy()
    expect(tree).toMatchSnapshot()
  })
  it("does not have images", () => {
    const wrapper = shallow(<ContentBlock data={soloTextFixture} />)
    expect(wrapper.instance().hasImages()).toEqual(false)
  })
  it("is a solo block", () => {
    const wrapper = shallow(<ContentBlock data={soloTextFixture} />)
    expect(wrapper.instance().isSolo()).toEqual(true)
  })
  it("does not have multiple blocks", () => {
    const wrapper = shallow(<ContentBlock data={soloTextFixture} />)
    expect(wrapper.instance().hasMultipleBlocks()).toEqual(false)
  })
  it("gets set to auto height", () => {
    const wrapper = shallow(<ContentBlock data={soloTextFixture} />)
    expect(wrapper.instance().wrapperHeight()).toEqual("auto")
  })
  it("sets the first block to 100% width", () => {
    const wrapper = shallow(<ContentBlock data={soloTextFixture} />)
    const instance = wrapper.instance()
    expect(instance.blockWidth(0)).toEqual("100%")
  })
})

// ---------------------------------------- | Solo Image Block

describe("ContentBlock - Solo Image", () => {
  it("renders", () => {
    const tree = renderer.create(<ContentBlock data={soloImageFixture} />).toJSON()
    expect(tree).toBeTruthy()
    expect(tree).toMatchSnapshot()
  })
  it("has images", () => {
    const wrapper = shallow(<ContentBlock data={soloImageFixture} />)
    expect(wrapper.instance().hasImages()).toEqual(true)
  })
  it("is a solo block", () => {
    const wrapper = shallow(<ContentBlock data={soloImageFixture} />)
    expect(wrapper.instance().isSolo()).toEqual(true)
  })
  it("does not have multiple blocks", () => {
    const wrapper = shallow(<ContentBlock data={soloImageFixture} />)
    expect(wrapper.instance().hasMultipleBlocks()).toEqual(false)
  })
  it("gets set to explicit height", () => {
    const wrapper = shallow(<ContentBlock data={soloImageFixture} />)
    expect(wrapper.instance().wrapperHeight()).toEqual("56.3rem")
  })
  it("sets the first block to 100% width", () => {
    const wrapper = shallow(<ContentBlock data={soloImageFixture} />)
    const instance = wrapper.instance()
    expect(instance.blockWidth(0)).toEqual("100%")
  })
})

// ---------------------------------------- | Text Tiles

describe("ContentBlock - Text Tiles", () => {
  it("renders", () => {
    const tree = renderer.create(<ContentBlock data={textTilesFixture} />).toJSON()
    expect(tree).toBeTruthy()
    expect(tree).toMatchSnapshot()
  })
  it("does not images", () => {
    const wrapper = shallow(<ContentBlock data={textTilesFixture} />)
    expect(wrapper.instance().hasImages()).toEqual(false)
  })
  it("is not a solo block", () => {
    const wrapper = shallow(<ContentBlock data={textTilesFixture} />)
    expect(wrapper.instance().isSolo()).toEqual(false)
  })
  it("has multiple blocks", () => {
    const wrapper = shallow(<ContentBlock data={textTilesFixture} />)
    expect(wrapper.instance().hasMultipleBlocks()).toEqual(true)
  })
  it("gets set to explicit height", () => {
    const wrapper = shallow(<ContentBlock data={textTilesFixture} />)
    expect(wrapper.instance().wrapperHeight()).toEqual("56.3rem")
  })
  it("sets both blocks to 50% width", () => {
    const wrapper = shallow(<ContentBlock data={textTilesFixture} />)
    const instance = wrapper.instance()
    expect(instance.blockWidth(0)).toEqual("50%")
    expect(instance.blockWidth(1)).toEqual("50%")
  })
})

// ---------------------------------------- | Image Tiles

describe("ContentBlock - Image Tiles", () => {
  it("renders", () => {
    const tree = renderer.create(<ContentBlock data={imageTilesFixture} />).toJSON()
    expect(tree).toBeTruthy()
    expect(tree).toMatchSnapshot()
  })
  it("has images", () => {
    const wrapper = shallow(<ContentBlock data={imageTilesFixture} />)
    expect(wrapper.instance().hasImages()).toEqual(true)
  })
  it("is not a solo block", () => {
    const wrapper = shallow(<ContentBlock data={imageTilesFixture} />)
    expect(wrapper.instance().isSolo()).toEqual(false)
  })
  it("has multiple blocks", () => {
    const wrapper = shallow(<ContentBlock data={imageTilesFixture} />)
    expect(wrapper.instance().hasMultipleBlocks()).toEqual(true)
  })
  it("gets set to explicit height", () => {
    const wrapper = shallow(<ContentBlock data={imageTilesFixture} />)
    expect(wrapper.instance().wrapperHeight()).toEqual("56.3rem")
  })
  it("sets all blocks to 25% width", () => {
    const wrapper = shallow(<ContentBlock data={imageTilesFixture} />)
    const instance = wrapper.instance()
    Array.from(Array(4).keys()).forEach(n => {
      expect(instance.blockWidth(n)).toEqual("25%")
    })
  })
  it("sets the first block to 50% and the others to 25% when 3 blocks", () => {
    const fixture = [...imageTilesFixture].slice(0, 3)
    const wrapper = shallow(<ContentBlock data={fixture} />)
    const instance = wrapper.instance()
    expect(instance.blockWidth(0)).toEqual("50%")
    expect(instance.blockWidth(1)).toEqual("25%")
    expect(instance.blockWidth(2)).toEqual("25%")
  })
  it("sets the first block to 75% and the other to 25% when 2 blocks", () => {
    const fixture = [...imageTilesFixture].slice(0, 2)
    const wrapper = shallow(<ContentBlock data={fixture} />)
    const instance = wrapper.instance()
    expect(instance.blockWidth(0)).toEqual("75%")
    expect(instance.blockWidth(1)).toEqual("25%")
  })
})
