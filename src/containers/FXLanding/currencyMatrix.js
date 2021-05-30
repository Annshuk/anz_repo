const baseUSD = {
  AUD: "USD",
  CAD: "CAD",
  CNY: "USD",
  CZK: "USD",
  DKK: "USD",
  EUR: "USD",
  GBP: "USD",
  JPY: "USD",
  NOK: "USD",
  NZD: "USD",
  USD: "D",
};

const baseMix = {
  AUD: "USD",
  CAD: "CAD",
  CNY: "USD",
  CZK: "EUR",
  DKK: "DKK",
  EUR: "Inv",
  GBP: "USD",
  JPY: "USD",
  NOK: "EUR",
  NZD: "USD",
  USD: "EUR",
};

//lookup table matrix
const currencyMatrix = {
  AUD: { ...baseUSD },
  CAD: {
    ...baseUSD,
  },
  CNY: { ...baseUSD },
  CZK: { ...baseMix, DKK: "EUR" },
  DKK: { ...baseMix },
  EUR: { ...baseUSD, CZK: "D", DKK: "D", EUR: "EUR", NOK: "D", USD: "D" },
  GBP: { ...baseUSD, USD: "D" },
  JPY: { ...baseUSD, USD: "Inv" },
  NOK: { ...baseMix },
  NZD: { ...baseUSD },
  USD: {
    AUD: "Inv",
    CAD: "Inv",
    CNY: "Inv",
    CZK: "EUR",
    DKK: "EUR",
    EUR: "Inv",
    GBP: "Inv",
    JPY: "D",
    NOK: "EUR",
    NZD: "Inv",
  },
};

export default currencyMatrix;
