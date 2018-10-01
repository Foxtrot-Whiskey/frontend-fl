import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import * as api from "src/api";
import { InputField, SliderField } from "src/components/Fields";

const SimpleLineChart = ({ data }) => {
  return (
    <AreaChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="actual" stroke="#82ca9d" fill="#82ca9d" />
      <Area
        type="monotone"
        dataKey="predicted"
        stroke="#8884d8"
        fill="#8884d8"
      />
    </AreaChart>
  );
};

const Inputs = ({
  growth,
  multiplier,
  forecastPeriod,
  timeframe,
  slider,
  onChange,
  onSliderChange
}) => (
  <div>
    <header>Inputs</header>
    <div className="flex">
      <InputField
        name="timeframe"
        label="Timeframe"
        type="text"
        onChange={onChange}
        placeholder="no. of months"
      />
      <SliderField onChange={onSliderChange} label="Value" />
      <SimpleLineChart
        data={api.getData({
          forecastPeriod,
          multiplier,
          growth,
          timeframe,
          slider
        })}
      />
    </div>
  </div>
);

export default Inputs;
