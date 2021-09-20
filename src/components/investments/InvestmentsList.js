import React from "react";
import PropTypes from "prop-types";
import Investment from "./Investment";
import { numberWithCommas } from "../../miscFunctions";
import { css, withStyles } from "../../withStyles";

const investmentsList = [
  {
    color: "#f46a54",
    placement: "left",
    name: "Nvidia",
    ticker: "NVDA",
    yahoo_ticker: "NVDA"
  },
  {
    color: "#f46a54",
    placement: "center",
    name: "Bitcoin",
    ticker: "BTC",
    yahoo_ticker: "BTC-USD"
  },
  {
    color: "#f46a54",
    placement: "right",
    name: "Ethereum",
    ticker: "ETH",
    yahoo_ticker: "ETH-USD"
  }
];

function InvestmentsList({ investments, styles }) {
  for (let i = 0; i < investments.length; i++) {
    let investment = investments[i];
    const found = investmentsList.find(
      st => st.ticker.toString() === investment['symbol'].toString()
    );

    if (found) {
      found.price = "$" + numberWithCommas(parseFloat(investment['price']).toFixed(2));
      found.volume = numberWithCommas(parseFloat(investment['volume']).toFixed(0));
    }
  }

  return (
    <div>
      <div {...css(styles.container)}>
        {investmentsList.map(investment => (
          <Investment key={investment.ticker} investment={investment} />
        ))}
      </div>
    </div>
  );
}

InvestmentsList.propTypes = {
  investment: PropTypes.array,
  styles: PropTypes.object.isRequired
};

export default withStyles(() => ({
  container: {
    display: "inline-flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap"
  }
}))(InvestmentsList);
