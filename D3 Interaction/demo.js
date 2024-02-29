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
let x_attr = attrs[2]
//Set the attribute mapped to the y-axis 
let y_attr = attrs[3]

//Define the scales for the x & y axes
let x_scale = d3.scaleLinear(d3.extent(cars, (x) => x[x_attr]),[margin_left, scatter_width + margin_left]).nice()
let y_scale = d3.scaleLinear(d3.extent(cars, (x) => x[y_attr]),[scatter_height + margin_top, margin_top]).nice()

//Create d3 axesand for each scale
var xAxis = d3.axisBottom(x_scale);
var yAxis = d3.axisLeft(y_scale);

//Define a clip so that everything outside the bounds of our plot area (the space inside of our axes), 
// is not visible 
var clip = svg.append("defs").append("clipPath")
        .attr("transform",`translate(${margin_left},${margin_top})`) //shift the clip to accomodate our padding
        .attr("id", "clip")
        .append("rect") //append a rect element to our clip to define the rectangle that we want to be visible (everything outside the rect will be clipped off)
        .attr("id", "clip-rect")
        .attr("x", "0")
        .attr("y", "0")
        .attr('width', scatter_width)
        .attr('height', scatter_height);

//create a group that our marks will go in & add the clip to it 
let gDot = svg.append("g").attr("clip-path", "url(#clip)")

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


/*--------------- Select -------------- */

//click point event
circs.on("click",(e)=>point_click(d3.select(e.target)))

//function to handle click event
function point_click(pt){
    //select details div
    let details = d3.select("#details")
    //check if currently selected & show details accordingly
    details.text(JSON.stringify(pt.datum()))

    //check if the point is currently selected to decide if we should highlight/unhighlight it
    if(pt.classed("selected")){
        pt.classed("selected",false)
    }
    else{
        pt.classed("selected",true)
    }
}

/*--------------- Change -------------- */
//selects our navigation element
let controls = d3.select("#controls")

//create control label
let drp_lab = controls.append("label")
.text("x Attribute: ")

//create select element for x attr
let drp = controls.append("select")
.attr("id","x_attr")

//add options for x attr select
drp.selectAll("option")
.data(attrs)
.join("option")
.attr("value",(d)=> d)
.text((d)=> d)


//add event handler for dropdown
drp.on("change", function(d){
    
    x_attr = d3.select(this).property("value")

    //check if name or origin to set scale type
    if(x_attr=="Name" || x_attr=="Origin"){
        x_scale = d3.scaleBand(new Set(cars.map((d)=> d[x_attr])),[margin_left, scatter_width + margin_left])
    }
    else{
        x_scale = d3.scaleLinear(d3.extent(cars, (x) => x[x_attr]),[margin_left, scatter_width + margin_left]).nice()
    }

    //update circles
    circs
    .attr("cx", (d)=> x_scale(d[x_attr]))
    .attr("cy", (d)=> y_scale(d[y_attr]))
    .attr("r",5)
    .attr("fill","steelblue")
    .attr("stroke","black")
    .on("click",(d)=> point_click(d3.select(d.target)))

    //update axis
    x_ax.call(d3.axisBottom(x_scale))

})





/*--------------- Navigate -------------- */



//create a zoom object
let zoom = d3.zoom()
.scaleExtent([.5,32]) //sets how much we can zoom in and out (from .5x scale to 32x)
.on("zoom", zoomed);

//zoomed function, 
function zoomed(e) {
    //get transform object from zoom event
    let transform = e.transform;

    //rescale x & y scales based on transform
    const zx = transform.rescaleX(x_scale).interpolate(d3.interpolateRound);
    const zy = transform.rescaleY(y_scale).interpolate(d3.interpolateRound);

    //update circles
    circs.attr("cx", (d)=> zx(d[x_attr]))
    .attr("cy", (d)=> zy(d[y_attr]))
    //update x & y axes
    x_ax.call(xAxis.scale(zx));
    y_ax.call(d3.axisLeft(zy));
  }

  // call zoom on svg
  svg.call(zoom)//.call(zoom.transform, d3.zoomIdentity)









