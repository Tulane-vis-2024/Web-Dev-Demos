//load our svg
let svg = d3.select("#plot")



//RECALL:
//<path d="M 20 40 L 120 120 L 220 100 L 320 150"/>


//d3.line()(coords) takes in a set of coordinate pairs, 
// and generates the "d" attribute of the path element
p = d3.line()([[20, 40], [120, 120], [220, 100], [320, 150]])
console.log(p)


//Let's add it to the SVG

// svg.append("path")
// .attr("d",p)
// .attr("stroke","blue")
// .attr("stroke-width","5px")

// You can imagine how we might use this more generically:
// function make_line(d){
//     //Map data (d) into coordinate pairs
//     //coords = ...
//     return d3.line()(coords)
// }




