// D3 Scatterplot Assignment

// Students:
// =========
// Follow your written instructions and create a scatter plot with D3.js.

// define svg area dimesnions
var svgWidth = 960;
var svgHeight = 660;

// define the chart's margins as an object
var chartMargin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30
  };

// define the dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append are to it, and set the dimensions
var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);


// Load data from hours-of-tv-watched.csv
d3.csv("data.csv", function(error, latinoData) {

    // Log an error if one exists
    if (error) return console.warn(error);
  
    // Print the tvData
    console.log(latinoData);
    console.log(latinoData.length)
    // Cast the hours value to a number for each piece of tvData
    // latinoData.forEach(function(data) {
    //   data.hours = +data.hours;
    });