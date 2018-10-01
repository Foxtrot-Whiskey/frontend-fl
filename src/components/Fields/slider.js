import React from "react";
import Slider from "src/components/Slider";

const SliderField = ({ label, onChange }) => (
  <div className="Field">
    <label className="label">{label}</label>
    <Slider handleChange={onChange} />
  </div>
);

export default SliderField;
