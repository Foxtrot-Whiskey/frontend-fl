import React from "react";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import "./Slider.css";

const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, onChange, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle name="slider" value={value} onChange={onChange} {...restProps} />
    </Tooltip>
  );
};

const CustomSlider = ({ handleChange }) => (
  <div className="SliderContainer">
    <Slider
      min={0}
      max={100}
      marks={{ 0: "low", 100: "high" }}
      defaultValue={50}
      handle={handle}
      onChange={handleChange}
    />
  </div>
);

export default CustomSlider;
