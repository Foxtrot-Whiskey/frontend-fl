import React, { Component } from "react";
import ConfigurationManager from "src/components/ConfigManager";
import Inputs from "src/components/Inputs";
import "./App.css";

class App extends Component {
  state = {
    growth: "",
    forecastPeriod: 3,
    multiplier: 1,
    timeframe: 1,
    slider: 10
  };

  onChange = e => {
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
      [name]: val
    });
  };

  onSliderChange = sliderValues => {
    this.setState({ slider: sliderValues });
  };

  render() {
    const {
      growth,
      forecastPeriod,
      multiplier,
      timeframe,
      slider
    } = this.state;
    return (
      <div className="App">
        <main className="Main">
          <section className="Section">
            <ConfigurationManager growth={growth} onChange={this.onChange} />
          </section>
          <section className="Section">
            <Inputs
              forecastPeriod={forecastPeriod}
              growth={growth}
              multiplier={multiplier}
              timeframe={timeframe}
              slider={slider}
              onChange={this.onChange}
              onSliderChange={this.onSliderChange}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
