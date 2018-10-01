import React from "react";
import { InputField } from "src/components/Fields";
import moment from "moment";

const ConfigurationManager = ({ growth, onChange }) => (
  <div className="flex">
    <InputField
      name="CurrentDate"
      label="Current Date"
      type="text"
      disabled="disabled"
      placeholder={moment(Date.now()).format("YYYY/MM/DD")}
    />
    <InputField
      name="forecastPeriod"
      label="Forecast Period"
      type="number"
      placeholder="3 Months"
      options={[3, 6, 12]}
      onChange={onChange}
    />
    <InputField
      name="growth"
      label="Growth"
      type="text"
      placeholder="Linear"
      onChange={onChange}
      options={["Linear", "Exponential"]}
    />
    {growth === "Exponential" && (
      <InputField
        name="multiplier"
        label="Multiplier"
        type="number"
        default="2"
        onChange={onChange}
        placeholder="ratio"
      />
    )}
  </div>
);

export default ConfigurationManager;
