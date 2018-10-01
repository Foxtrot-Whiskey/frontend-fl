Frontend Development - 1

Objectives:
- Implement a model to fetch data from server
- build HTML/CSS layouts
- implement UI input components
- build interactive line graph

Technologies:
- Javascript, React, Redux
- HTML/CSS, SCSS

Description:
Create two components as part of a larger panel. The component on top integrates some dynamic
information (current date) and some high level configuration inputs - it is a component manager.
In this component, the user can view the current date and select a visualisation period (3, 6 or 12 Months)
for his data. He can also choose one of two models of growth (linear and exponential). IF he choses
exponential, he gets an extra input field where he is prompted for a multiplier ratio (e.g. 1.5x).
The second component below, contains two input entries (a value field and a slider) and a dynamic line
graph. The line chart represents the output for the parameters selected, combined with some background
data. The user begins by choosing a timeframe (e.g. 5 months) from which he is going to get a projection
starting from the current date. This projection will be extrapolated from the current value, and the type of
growth selected above. The slider allows the user to change the forecast value in real time, and updates
every month month in between.
Below, you’ll be asked to compute numbers and graphs, but this will not be part of our assessment. You
don’t have to perform the actual computations, and instead, you can just use random test data. At the end
of this document, we also provide a JSON response from a hypothetical prediction service that you can
use.
#Date
output: current date
#Period
Description: select number of months to forecast in the graph. By default there should be a set number of
past data also displayed.
#Input: drop-down (3, 6, 12 months)
#Growth
Description: There are 2 types of growth to choose from dropdown. In Linear Growth, we apply a linear
equation based on the past growth. In exponential growth, we apply an exponential equation to create a
proportional growth based on a numeric monthly multiplier.
Input: drop-down (3, 6, 12 months)
#Multiplier
Description: select number of months to forecast in the graph.
Input: numeric entry, a float number. When inactive shows “ratio” as a description
output: monthly exponential growth based on monthly multiplier and time period.
#Timeframe
Input: number of months. When inactive shows a description (i.e. number of months)
Output: Number of months projected.
Example: User chooses 5 months and 90 in the slider. He gets a projection of 90 in 5 months and all the
months up till then are calculated.
#Slider
Input: slider (min. 0 and max. 100)
Description
- Current (month) value is represented and remains visible.
- Slider changes new value between threshold 0 and 100.
Output: new number updates future value in the graph, based on the time frame selected. Other months
are calculated based on the growth rate.
Line graph
Inputs: current date, period, growth, multiplier (when applicable), time-frame, slider value, demo data
supplied.
Description:
- X axis represents months, and Y axis represents values of intensity.
- The dark blue line represents historical data.
- Yellow breakpoint represent the current date.
- The white flag/label highlights the data for the current date.
- A new line starts in the current date and projects into the future, based on time frame, slider value
and the type of growth selected.
- The amount of months represented, past and future, are based on the period selected in the top
panel. And it should also incorporate the timeframe selected by the user.
- Below the graph lines, there are vector fields that highlight the growth. They are represented in
the example in grey (past) and blue (future).
- When the user rolls over the line, he gets a tooltip showing the value for the corresponding
month.
Optional: Provide a stub to abstract from server communication. Assume that you can call a “/predict” url
(pass parameters as you wish), and you will receive the following JSON object as a server response. Use
the data from the JSON to update your components. You can also use the same JSON to replace the
hard coded data in the drop downs.
If the JSON is not fully suitable to your needs, feel free to make adjustments as needed.
{
"growth_types_available": [
{
"id": 1,
"display_name": "Linear"
},
{
"id": 2,
"display_name": "Exponential"
}
],
"forecast_months_available" : [ 6, 9, 12 ],
"current_date": "2014-06-30",
"periodicity": "monthly",
"forecast_months": 6,
"growth_type": 1,
"inputs": [
{
"id": 1,
"type": "number",
"value": 58,
"min": 0,
"max": 100,
"graph": {
"x_axis": [ "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
"units": "$",
"values": {
"actual": [30, 42, 43, 40, 35, 40, 50],
"prediction": [30, 42, 43, 40, 35, 40, 50, 70, 73, 77, 83, 90]
}
}
}
]
}
