import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from "baseui/header-navigation"
import { StyledLink } from "baseui/link"

interface HeaderProps {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => (
  <HeaderNavigation>
    <StyledNavigationList $align={ALIGN.left}>
      <StyledNavigationItem>
        <Link
          to="/"
          style={{
            color: `Black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </StyledNavigationItem>
    </StyledNavigationList>
    <StyledNavigationList $align={ALIGN.center} />
    <StyledNavigationList $align={ALIGN.center}>
      <StyledNavigationItem>
        <StyledLink>
          <Link
            style={{
              color: `Black`,
              textDecoration: `none`,
            }}
            to="/"
          >
            Todays weather
          </Link>
        </StyledLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledLink>
          <Link
            style={{
              color: `Black`,
              textDecoration: `none`,
            }}
            to="/longForecast/"
          >
            Extended forecast
          </Link>
        </StyledLink>
      </StyledNavigationItem>
    </StyledNavigationList>
  </HeaderNavigation>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
