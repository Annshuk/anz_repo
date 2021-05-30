import currencyMatrix from "./currencyMatrix";

const direct = {
  AUDUSD: 0.8371,
  CADUSD: 0.8711,
  USDCNY: 6.1715,
  EURUSD: 1.2315,
  GBPUSD: 1.5683,
  NZDUSD: 0.775,
  USDJPY: 119.95,
  EURCZK: 27.6028,
  EURDKK: 7.4405,
  EURNOK: 8.6651,
};

const directLookup = {
  USD: 0.8371,
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
  const indexValue = keysMap.indexOf(to);

  const map = currencyMatrix[to];
  const value = keysMap[indexValue];

  const type = lookup[map[from]];

  const join = `${from}${to}`;

  console.log(type, to, from, map[to]);

  if (from !== to) {
    if (type === "invert") {
      const base_jpy = from === "JPY" ? directLookup[from] : directLookup[to];
      const conversion = amount / base_jpy;

      return toFixedDecimal(conversion);
    }

    if (type === "direct") {
      const conversion = direct[join] * amount;

      return toFixedDecimal(conversion);
    }

    if (type === "EUR") {
      const conversion = (directLookup[type] / directLookup[from]) * amount;
      console.log(type);
      return toFixedDecimal(conversion);
    }

    if (type === "USD") {
      const crossVia = directLookup[type] * directLookup[to];
      const conversion = amount * directLookup[from] * crossVia;
      console.log(type);
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
