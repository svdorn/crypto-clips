import React from "react";
import PropTypes from "prop-types";
import { css, withStyles } from "../withStyles";

const icons = [
  { name: "twitter", href: "https://twitter.com/stphn_drn" },
  { name: "github", href: "https://github.com/svdorn" },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/stephen-dorn-149055a3/"
  },
  { name: "instagram", href: "https://www.instagram.com/stephen.dorn/" },
  { name: "email", href: "mailto:stevedorn9@gmail.com" }
];

function Social({ styles }) {
  return (
    <div {...css(styles.container)}>
      {icons.map(icon => (
        <a
          key={icon.name}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          {...css(styles.image_clickable)}
        >
          <img
            src={`/images/social/${icon.name}.svg`}
            alt={icon.name}
            {...css(styles.image)}
          />
        </a>
      ))}
    </div>
  );
}

Social.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(() => ({
  container: {
    display: "inline-block"
  },

  image_clickable: {
    margin: "0 5px",
    opacity: "0.4",
    ":hover": {
      opacity: "0.6"
    }
  },

  image: {
    height: "34px"
  }
}))(Social);
