import currencyMatrix from "./currencyMatrix";

const directLookup = {
  USD: 1.0,
  AUD: 0.8371,
  CAD: 0.8711,
  CNY: 6.1715,
  EUR: 1.2315,
  GBP: 1.5683,
  NZD: 0.775,
  JPY: 119.95,
  CZK: 27.6028,
  DKK: 7.4405,
  NOK: 8.6651,
};

const lookup = {
  Inv: "invert",
  D: "direct",
  EUR: "EUR",
  USD: "USD",
};

const toFixedDecimal = (value) => parseFloat(value).toFixed(2);

/**
 * getConversionRate
 * @param {String} from
 * @param {String} to
 * @param {Number} amount
 * @returns value
 */
const getConversionRate = (from, to, amount) => {
  const keysMap = Object.keys(currencyMatrix);
  const indexValue = keysMap.indexOf(from);

  const map = currencyMatrix[from];
  const value = keysMap[indexValue];

  const type = lookup[map[to]];

  if (from !== to) {
    if (type === "invert") {
      const conversion = amount / directLookup[from];

      return toFixedDecimal(conversion);
    }

    if (type === "direct") {
      const base_jpy = to === "JPY" ? directLookup[to] : directLookup[from];
      const conversion = base_jpy * amount;

      return toFixedDecimal(conversion);
    }

    if (type === "EUR" && from !== to) {
      const conversion = (directLookup[type] / directLookup[from]) * amount;

      return toFixedDecimal(conversion);
    }

    if (type === "USD" && from !== to) {
      const conversion = amount * directLookup[from] * directLookup[to];

      return toFixedDecimal(conversion);
    }

    if (type && !type[value]) {
      return toFixedDecimal(type[value] * amount);
    }
  }

  return amount;
};

/**
 *
 * @param {String}  from ad to is value from selection
 * amount is for given amount to convert
 * @returns conversion rate result
 */

const currencyConvert = ({ from, to, amount = 0 }) => {
  const amountcalc = getConversionRate(from, to, +amount);

  const target = !isNaN(amountcalc) ? amountcalc : amount;

  return `${to} ${target}`;
};

export default currencyConvert;
