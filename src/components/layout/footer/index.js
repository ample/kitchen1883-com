import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import * as g from "../../global"
import FooterNav from "./nav"
import Logo from "../../logo"

const StyledFooter = styled.footer`
  text-align: center;
  padding: 3.6rem;
  background-color: ${g.colors.gray900};

  @media ${g.screen.max.sm} {
    padding: 4.8rem;
    padding-bottom: 8rem;
  }
`

const StyledLogo = styled(Logo)`
  height: 3.6rem;
  @media ${g.screen.max.sm} {
    height: 2.2rem;
  }
`

const Footer = props => (
  <StyledFooter>
    <StyledLogo color={g.colors.white} />
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
