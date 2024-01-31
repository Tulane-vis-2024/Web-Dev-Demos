// //-------------------- Let's make a Bar Plot! ---------------
let mainDiv = d3.select("#test")


// //First, let's define some specs of our vis
let height = 500, width = 500, margin_left = 50, margin_bottom = 100;
let barWidth = (width-margin_left)/languages.length;
let maxCount = 26;


// //Now, let's create an SVG
let svg = mainDiv.append('svg')
.attr("height", height) //and specify its dimensions
.attr("width",width)



// //Let's create a group to hold all of our bars
let bar_g = svg.append("g").attr("id","bars")


// //Now let's create a selection and bind our data!
let selection = bar_g.selectAll("rect").data(languages)


// //lets add bars for our entering data items 
selection.enter().append("rect")
.attr("x",function(d,i){return i*barWidth + margin_left;}) //set the x pos using the index
.attr("y", function(d){return height -margin_bottom - (height - margin_bottom)/ maxCount * d.count; }) //set y position based on count
.attr("height",function(d){return (height - margin_bottom)/ maxCount * d.count;}) //set height based on count
.attr("width",barWidth) //set width to bar width
.style("fill","steelblue").style("stroke","black") //add a bit of styling


// //add some labels
selection.enter().append("text")
.attr("x",function(d,i){return i*barWidth + margin_left;})
.attr("y", height-margin_bottom+15) //set y position based on count
.text(function(d){return d.language;})



// //alternatively we can draw our bars at y=0 (upside down) and transform them together (below)
// selection.enter().append("rect")
// .attr("x",function(d,i){return i*barWidth + margin_left;}) //set the x pos using the index
// .attr("y", function(d){return 0 }) //set y position based on count
// .attr("height",function(d){return (height - margin_bottom)/ maxCount * d.count;}) //set height based on count
// .attr("width",barWidth) //set width to bar width
// .style("fill","steelblue").style("stroke","black") //add a bit of styling


// // //Note, if we do this with our labels as well... 
// selection.enter().append("text")
// .attr("x",function(d,i){return i*barWidth + margin_left;})
// .attr("y", -15) //set y position based on count
// .text(function(d){return d.language;})

//transform the group of our rectangles so it is the right way up
bar_g.attr("transform",`translate(0, ${height -margin_bottom}) scale(1,-1)`)//transform instead!
