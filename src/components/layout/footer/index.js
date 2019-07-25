import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import * as g from "../../global"
import FooterNav from "./nav"

const StyledFooter = styled.footer`
  text-align: center;
  padding: 3.6rem;
  background-color: ${g.colors.gray900};

  @media ${g.screen.max.sm} {
    padding: 4.8rem;
    padding-bottom: 8rem;
  }
`

const Footer = props => (
  <StyledFooter>

    {/* <Logo /> */}

    <FooterNav nav={props.data.nav} />

    {/* <Social /> */}

    <div className="text-sm">&copy; {new Date().getFullYear()} Kitchen 1883</div>
  </StyledFooter>
)

Footer.propTypes = {
  data: PropTypes.object,
}

Footer.defaultProps = {
  data: {
    nav: [],
    social: [],
  },
}

export default Footer
