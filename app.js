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

// Add tooltip
var tooltip = d3.select("body")
	.append("div")
	.style("position", "absolute")
	.style("z-index", "10")
	.style("visibility", "hidden")
    .text("a simple tooltip");

    
// Load data from hours-of-tv-watched.csv
d3.csv("data.csv", function(error, latinoData) {
    if (error) throw (error);
  
    // Print the latinoData
    console.log(latinoData);
    console.log(latinoData.length)



    // Format the data
    latinoData.forEach(function(data) {
        // turn each data set into int
        data.unemploymentLatino = +data.unemploymentLatino; 
        data.povertyLatino = +data.povertyLatino; 
        data.rateLatino = +data.rateLatino; 
        data.healthStatus = +data.healthStatus; 
        data.depression = +data.depression; 
        data.lackingHealthCare = +data.lackingHealthCare; 
    });

    // Step 5: Create the scales for the chart
    // =================================
    var xLinearScale = d3.scaleLinear().range([height, 0]);

    var yLinearScale = d3.scaleLinear().range([height, 0]);

    // Set max values for scales
    var xMax = 30;
    var yMax = 30;
    
    // Use the yMax value to set the yLinearScale domain
    yLinearScale.domain([0, yMax]);

     // Step 7: Create the axes
    // =================================
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);
      
    // Step 8: Append the axes to the chartGroup
    // ==============================================
    // Add x-axis
    chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

    // Add y-axis
    chartGroup.append("g").call(leftAxis);
    
    // STEP 9: Set up scatter generator for each set of data and append 3 svg paths
    // ========================

    // scatter generator for first set
    var scatter1= 

 
        
    // draw the x axis
    var xAxis = d3.svg.axis()
	.scale(x)
	.orient('bottom');

    main.append('g')
	.attr('transform', 'translate(0,' + height + ')')
	.attr('class', 'main axis date')
	.call(xAxis);

    // draw the y axis
    var yAxis = d3.svg.axis()
	.scale(y)
	.orient('left');

    main.append('g')
	.attr('transform', 'translate(0,0)')
	.attr('class', 'main axis date')
	.call(yAxis);

    var g = main.append("svg:g"); 
    
    g.selectAll("scatter-dots")
      .data(data)
      .enter().append("svg:circle")
          .attr("cx", function (d,i) { return x(d[0]); } )
          .attr("cy", function (d) { return y(d[1]); } )
          .attr("r", 8);
    });