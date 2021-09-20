import { restClient } from "@polygon.io/client-js";
import { API_KEY } from "./secrets.js";

const rest = restClient(API_KEY);

let date = new Date();
date = date.toISOString().split('T')[0];

async function getInvestingPortfolio() {
  let nvda = await rest.stocks.previousClose('NVDA').then(
    /* your success handler */
  );

  let crypto = await rest.crypto.groupedDaily('global', 'crypto', date).then(
    /* your success handler */
  );

  let btc = null; 
  let eth = null;

  for (let i = 0; i < Object.entries(crypto['results']).length; i++) {
    let item = Object.entries(crypto['results'])[i][1];
    
    if (item["T"] === "X:BTCUSD" && item["tickerSymbol"] === "X:BTCUSD") {
      btc = item;
    }
    if (item["T"] === "X:ETHUSD" && item["tickerSymbol"] === "X:ETHUSD") {
      eth = item;
    }
  }

  let investments = [
    {
      symbol: "NVDA"
      , price: nvda['results'][0]['c']
      , volume: nvda['results'][0]['v']
    },
    {
      symbol: "BTC"
      , price: btc['c']
      , volume: btc['v']
    },
    {
      symbol: "ETH"
      , price: eth['c']
      , volume: eth['v']
    }
  ];

  return investments;
}

export { getInvestingPortfolio };
