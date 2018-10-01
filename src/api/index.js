import moment from "moment";

function getGraphData(d, i, type, multiplier, forecastPeriod, slider, today) {
  if (type === "Exponential") {
    return {
      name: d.format("MMM"),
      actual:
        moment(d) < moment(today) ? 8 * i * i * multiplier - 6 * i + 20 : null,
      predicted:
        moment(d) >= moment(today).subtract(1, "months")
          ? 0.1 * slider * 4 * i * i * multiplier - 6 + i
          : null
    };
  }
  return {
    name: d.format("MMM"),
    actual: moment(d) < moment(today) ? i + i * 4 : null,
    predicted:
      moment(d) >= moment(today).subtract(1, "months")
        ? slider * i + i * 4
        : null
  };
}

const createData = ({
  timeframe,
  date = new Date(),
  forecastPeriod,
  growth,
  slider,
  multiplier
}) => {
  const today = moment(Date.now()).format("YYYY/MM/DD");
  const startOfPeriod = moment(date).subtract(forecastPeriod, "months");
  const data = Array.apply(null, {
    length: +forecastPeriod + +timeframe
  }).map((x, i) => {
    const d = moment(startOfPeriod).add(i + 1, "months");
    return getGraphData(
      d,
      i,
      growth,
      multiplier,
      forecastPeriod,
      slider,
      today
    );
  });
  console.log(data);
  return data;
};

export const getData = ({
  forecastDate,
  forecastPeriod,
  timeframe,
  growth,
  multiplier,
  slider
}) => {
  return createData({ timeframe, forecastPeriod, growth, multiplier, slider });
};
