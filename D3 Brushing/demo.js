//load our svg
let svg = d3.select("#plot")

//define the bounds of our svg
let svgheight = 500;
let svgwidth =500;
let margin_left = 50, margin_right = 50, margin_top = 50, margin_bottom = 50;
let scatter_height = svgheight - margin_top- margin_bottom;
let scatter_width = svgheight - margin_left- margin_right;

//create a list of the attributes of our dataset
let attrs = Object.keys(cars[0])
//Set the attribute mapped to the x-axis (I chose attribute 2 because 1 has NaN's in the data, and 0 is categorical)
let x_attr = attrs[3]
//Set the attribute mapped to the y-axis 
let y_attr = attrs[4]

//Define the scales for the x & y axes
let x_scale = d3.scaleLinear(d3.extent(cars, (x) => x[x_attr]),[margin_left, scatter_width + margin_left]).nice()
let y_scale = d3.scaleLinear(d3.extent(cars, (x) => x[y_attr]),[scatter_height + margin_top, margin_top]).nice()

//Create d3 axesand for each scale
var xAxis = d3.axisBottom(x_scale);
var yAxis = d3.axisLeft(y_scale);


//function to check if a point (x,y) is inside the bounds of a brush, b
function check_selection(b,x,y){
    //extract the coordinates of the brush bounds
    [[x0,y0],[x1,y1]]=b;

    //check if the point is within the bounds
    return x0<= x && x1 >= x && y0 <= y && y1 >= y;
}


//create a brush and define the "brush" and "end" events
let brush = d3.brush()
.on("brush end", function(e){
    //get the boundaries of the brush.  
    //brush_bounds[0] contains the coordinate of the upper left corner of the brush
    //brush_bounds[1] contains the coordinate of the bottom right corner of the brush
    //if no brush is active, this is null
    let brush_bounds = e.selection;

    //check if the brush exists
    if(brush_bounds){
        //select all circles on the svg,
        svg.selectAll("circle")
        .classed("selected", (d)=>check_selection(brush_bounds,x_scale(d[x_attr]),y_scale(d[y_attr]))) //check if they are inside the current brush. If so, class them "selected"
        .classed("background", (d)=>!check_selection(brush_bounds,x_scale(d[x_attr]),y_scale(d[y_attr])))//check if they are inside the current brush. If not, class them "background"

    }
    else{
        //if the brush doesn't exist, remove the classes from all points. 
        svg.selectAll("circle").classed("selected", false)
        .classed("background", false)
    }

})

//add a group to the svg to call the brush
let br_grp = svg.append('g')
.call(brush)


let gDot = svg.append("g")

//create and add circles to the svg for our data
let circs = gDot.selectAll("circle")
.data(cars)
.join("circle")
.attr("cx", (d)=> x_scale(d[x_attr]))
.attr("cy", (d)=> y_scale(d[y_attr]))
.attr("r",5)
.attr("class","circle")
.attr("fill","steelblue")
.attr("stroke","black")


//create a group for our x axis, translate it to the bottom, call our x-axis
let x_ax = svg.append("g")
.attr("transform",`translate(0,${margin_top + scatter_height})`)
.call(xAxis)

//Add an x-axis label, anchor it to the middle so it centers, translate it roughly to the center of the xaxis
let x_lab = svg.append("text")
.attr('text-anchor', 'middle')
.attr("transform",`translate(${margin_left + scatter_width/2.0},${margin_top + scatter_height + 2*20})`)
.text(x_attr)


//create a group for our x axis, translate it to the bottom, call our x-axis
let y_ax = svg.append("g").attr("id","yAx")
.attr("transform",`translate(${margin_left},0)`)
.call(yAxis)

//Add an x-axis label, anchor it to the middle so it centers, translate it roughly to the center of the yaxis & rotate it
let y_lab = svg.append("text")
.attr('text-anchor', 'middle')
.attr("transform",`translate(12,${margin_top + scatter_height/2.0 }  ) rotate(-90) `)
.text(y_attr)
