const baseUSD = {
  AUD: "USD",
  CAD: "USD",
  CNY: "USD",
  CZK: "USD",
  DKK: "USD",
  EUR: "USD",
  GBP: "USD",
  JPY: "USD",
  NOK: "USD",
  NZD: "USD",
  USD: "Inv",
};

//lookup table matrix
const currencyMatrix = {
  AUD: { ...baseUSD, AUD: "AUD" },
  CAD: {
    ...baseUSD,
    CAD: "CAD",
  },
  CNY: { ...baseUSD, CNY: "CNY" },
  CZK: { ...baseUSD, CZK: "CZK", DKK: "EUR", EUR: "D", NOK: "EUR", USD: "EUR" },
  DKK: { ...baseUSD, DKK: "DKK", CZK: "EUR", EUR: "D", NOK: "EUR", USD: "EUR" },
  EUR: {
    ...baseUSD,
    CZK: "Inv",
    DKK: "Inv",
    EUR: "EUR",
    NOK: "Inv",
    USD: "Inv",
  },
  GBP: { ...baseUSD, GBP: "GBP" },
  JPY: { ...baseUSD, USD: "D", JPY: "JPY" },
  NOK: { ...baseUSD, DKK: "EUR", EUR: "D", NOK: "NOK", USD: "EUR" },
  NZD: { ...baseUSD, NZD: "NZD" },
  USD: {
    AUD: "D",
    CAD: "D",
    CNY: "D",
    CZK: "EUR",
    DKK: "EUR",
    EUR: "D",
    GBP: "D",
    JPY: "Inv",
    NOK: "EUR",
    NZD: "D",
    USD: "USD",
  },
};

export default currencyMatrix;
