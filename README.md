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
