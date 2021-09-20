import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";
import { css, withStyles } from "../../withStyles";

function Investment({ investment, styles }) {
  return (
    <a
      href={`https://finance.yahoo.com/quote/${investment.yahoo_ticker}`}
      target="_blank"
      rel="noopener noreferrer"
      {...css(styles.container)}
    >
      <Box
        placement={investment.placement}
        color={investment.color}
        {...css(styles.box_container)}
      >
        <div {...css(styles.box)}>
          <h3 {...css(styles.title)}>{investment.name}</h3>
          <div style={{ color: investment.color }}>
            {investment.ticker}
            <br />
            <b {...css(styles.price)}>
              {investment.price ? <span>{investment.price}</span> : "$$$..."}
            </b>
          </div>
          <div {...css(styles.volume)}>
            Volume:{" "}
            <span style={{ color: investment.color }}>
              {investment.volume ? <span>{investment.volume}</span> : "Loading..."}
            </span>
          </div>
        </div>
      </Box>
    </a>
  );
}

Investment.propTypes = {
  investment: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired
};

export default withStyles(() => ({
  container: {
    margin: "20px",
    textDecoration: "none"
  },

  box_container: {
    display: "flex",
    verticalAlign: "top",
    width: "250px",
    backgroundColor: "white",
    cursor: "pointer"
  },

  box: { padding: "30px 20px 30px 20px", textAlign: "left" },

  title: { color: "black", margin: "0 auto 20px auto" },

  price: {
    fontSize: "18px"
  },

  volume: { fontSize: "12px", marginTop: "10px", color: "black" }
}))(Investment);
