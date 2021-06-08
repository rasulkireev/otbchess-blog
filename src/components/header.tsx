import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <header>
    <div>
      <h1>
        <Link to="/">
          { siteTitle }
        </Link>
      </h1>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
