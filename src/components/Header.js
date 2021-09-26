import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { css, withStyles } from "../withStyles";
import Social from "./Social";

const menuItems = [
  { name: "About", link: "about" },
  { name: "Traits", link: "traits" },
  { name: "Roadmap", link: "roadmap" }
];

class Header extends React.Component {
  render() {
    const { styles } = this.props;

    return (
      <nav {...css(styles.container)}>
        <Link key="Home" to="/">
          <img
            {...css(styles.terminal)}
            src="/images/terminal.svg"
            alt="Terminal"
          />
        </Link>
        <div {...css(styles.menu_items)}>
          {menuItems.map(item => (
            <Link key={item.name} to={item.link} {...css(styles.menu_item)}>
              {item.name}
            </Link>
          ))}
          <div {...css(styles.social)}>
            <Social />
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object,
  styles: PropTypes.object.isRequired
};

export default withStyles(({ color }) => ({
  container: {
    padding: "10px 20px 20px"
  },

  terminal: {
    display: "inline-block",
    float: "left",
    height: "50px"
  },

  social: {
    display: "inline-block",
    marginTop: "3px",
    float: "right"
  },

  menu_items: {
    display: "flex",
    float: "right",
    marginTop: "20px"
  },

  menu_item: {
    padding: "0 15px",
    textDecoration: "none",
    textAlign: "left",
    color: color.white,
    fontWeight: "600",
    opacity: "0.6",
    ":hover": {
      opacity: "1"
    }
  }
}))(Header);
