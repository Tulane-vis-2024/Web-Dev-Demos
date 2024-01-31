//-------------------- Let's modify our Bar Plot from demo 2 to use scales & axes ---------------
let mainDiv = d3.select("#test")


//First, let's define some specs of our vis
let height = 500, width = 500, margin_left = 50, margin_bottom = 100;
let barWidth = (width-margin_left)/languages.length;
let maxCount = 26

//Now, let's create an SVG
let svg = mainDiv.append('svg')
.attr("height", height) //and specify its dimensions
.attr("width",width)


//------------- Let's add Scales! -----------------------
// this specifies a band scale on the x axis to map the categorical "language" labels to x positions (maps categorical to quantitative)
let xScale = d3.scaleBand()
.range([margin_left,width])
.domain(languages.map(function(l){return l.language; }))

// this specifies a linear scale that maps the "count" values to y positions
let yScale = d3.scaleLinear()
.range([height-margin_bottom,0]) //note our y scale maps 0 to the "highest" y value which cooresponds to the x axis location of our plot 
.domain([0,maxCount])

//this creates a linear scale that maps "count" to color
let scaleColor = d3.scaleLinear()
.range(["white","blue"])
.domain([0,maxCount])



//Let's create a group to hold all of our bars
let bar_g = svg.append("g").attr("id","bars")
.selectAll("rect").data(languages).enter().append("rect")
.attr("x",function(d,i){return xScale(d.language)}) // now we can use the xScale to get the x position
.attr("y", function(d){return yScale(d.count);}) //now we can use the xScale to get the x position
.attr("height",function(d){return (height-margin_bottom) - yScale(d.count);}) //Note, to get the height we have to subtract the y position from the height of the plot
.attr("width",barWidth) //set width to bar width
.style("fill",function(d){return scaleColor(d.count);}).style("stroke","black") //add a bit of styling










//------------------ Let's add some axes --------------//
// //step 1: create a group for each axis
let x_ax = svg.append("g");
let y_ax = svg.append("g");

// //step 2: transform groups
// translate the x axis down to the bottom of the plot
x_ax.attr("transform",`translate(0,${height-margin_bottom})`)
// translate the y axis down to the edge of the plot (accounts for margin). Note, if we had negative x values, we may instead want to translate it to "xScale(0)"
y_ax.attr("transform",`translate(${margin_left},0)`)

// //step3: call axes on the gropu to add them to the plot
x_ax.call(d3.axisBottom(xScale))
y_ax.call(d3.axisLeft(yScale))

