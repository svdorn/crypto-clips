import React from "react";
import MaterialButton from "@material-ui/core/Button";
import { css, withStyles } from "../withStyles";

function Button({ text, onClick, styles, type }) {
  return (
    <MaterialButton
      {...css(styles.container)}
      onClick={onClick}
      type={type || null}
    >
      {text}
    </MaterialButton>
  );
}

export default withStyles(({ color }) => ({
  container: {
    color: color.primary,
    backgroundColor: "white",
    borderRadius: 3,
    border: 0,
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.18)",
    textTransform: "none"
  }
}))(Button);
