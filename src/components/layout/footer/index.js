import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import * as g from "../../global-variables"

import Link from "../../utilities/link"
import Logo from "../../logo"
import FooterNav from "./nav"
import SocialIcons from "../../social-icons"

const StyledFooter = styled.footer`
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 3.6rem;
  background-color: ${g.colors.gray900};

  .copy {
    margin-top: 4rem;
  }

  @media ${g.screen.max.sm} {
    padding: 4.8rem;
    padding-bottom: 8rem;

    .copy {
      margin-top: 3rem;
    }
  }
`

const StyledLogo = styled(Logo)`
  height: 3.6rem;
  @media ${g.screen.min.sm} and ${g.screen.max.md}{
    height: 3.2rem;
  }
  @media ${g.screen.max.sm} {
    height: 2.2rem;
  }
`

const Footer = props => (
  <StyledFooter>
    <Link to="/">
      <StyledLogo color={g.colors.white} />
    </Link>
    <FooterNav nav={props.data.nav} />
    <SocialIcons
      location={props.data.social.location}
      icons={props.data.social.icons}
      dark={true}
    />
    <div className="text-sm copy">&copy; {new Date().getFullYear()} Kitchen 1883</div>
  </StyledFooter>
)

Footer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Footer
