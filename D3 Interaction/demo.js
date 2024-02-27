let svg = d3.select("#plot")

let svgheight = 500;
let svgwidth =500;
let margin_left = 50, margin_right = 50, margin_top = 50, margin_bottom = 50;
let scatter_height = svgheight - margin_top- margin_bottom;
let scatter_width = svgheight - margin_left- margin_right;

let attrs = Object.keys(cars[0])
let x_attr = attrs[2]
let y_attr = attrs[3]


let x_scale = d3.scaleLinear(d3.extent(cars, (x) => x[x_attr]),[margin_left, scatter_width + margin_left]).nice()
let y_scale = d3.scaleLinear(d3.extent(cars, (x) => x[y_attr]),[scatter_height + margin_top, margin_top]).nice()

var xAxis = d3.axisBottom(x_scale);
var yAxis = d3.axisLeft(y_scale);


var clip = svg.append("defs").append("clipPath")
        .attr("transform",`translate(${margin_left},${margin_top})`)
        .attr("id", "clip")
        .append("rect")
        .attr("id", "clip-rect")
        .attr("x", "0")
        .attr("y", "0")
        .attr('width', scatter_width)
        .attr('height', scatter_height);


let gDot = svg.append("g").attr("clip-path", "url(#clip)")


let circs = gDot.selectAll("circle")
.data(cars)
.join("circle")
.attr("cx", (d)=> x_scale(d[x_attr]))
.attr("cy", (d)=> y_scale(d[y_attr]))
.attr("r",5)
.attr("class","circle")
.attr("fill","steelblue")
.attr("stroke","black")

let gx = svg.append("g")

let x_ax = gx
.attr("transform",`translate(0,${margin_top + scatter_height})`)
.call(xAxis)


let x_lab = svg.append("text")
.attr('text-anchor', 'middle')
.attr("transform",`translate(${margin_left + scatter_width/2.0},${margin_top + scatter_height + 2*20})`)
.text(x_attr)

let gy = svg.append("g")


let y_ax = gy.attr("id","yAx")
.attr("transform",`translate(${margin_left},0)`)
.call(yAxis)

let y_lab = svg.append("text")
.attr('text-anchor', 'middle')
.attr("transform",`translate(12,${margin_top + scatter_height/2.0 }  ) rotate(-90) `)
.text(y_attr)


/*--------------- Select -------------- */

//click point event


//function to handle click event
    //select details div

    //check if currently selected & show details accordingly



/*--------------- Change -------------- */
//selects our navigation element

//create control label


//create select element for x attr


//add options for x attr select


//add event handler for dropdown


    //check if name or origin to set scale type
   

    //update circles
    

    //update axis







/*--------------- Navigate -------------- */



//create a zoom object, set scale extent, call zoomed on zoom



//zoomed function, 

    //get transform object from zoom event

    //rescale x & y scales based on transform

    
    //update circles


    //update x & y axes


  // call zoom on svg












