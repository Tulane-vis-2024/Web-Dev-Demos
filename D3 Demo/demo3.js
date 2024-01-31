
//----------------- Nested Selects -------//
let D = [[1,2,3],[4,5,6]]

let svg = d3.select("#test").append("svg").attr("height",300).attr("width",500)

svg.selectAll("g")
.data(D)
.enter().append("g")          //creates 2 groups 
.selectAll("circle")
.data(function(row,i) {return row.map(function(d){return [d,i]});})
.enter().append("circle")    //creates 3 circles per group
.attr("r",function(d) { return d[0]*10;})
.attr("cx",function(d,i){ return (i+1)*120+10})
.attr("cy",function(d,i){ console.log(d); return (d[1]+1)*100})







// ------------- Bind D2 to Paragraphs in #test with an existing Paragraph, using Join and transitions ------------
// let mainDiv = d3.select("#test")
// mainDiv.append("p").text("This is my initial paragraph.")

// selection = mainDiv.selectAll("p").data(d2)

// Here, we transition the opacity of our entering and exiting elements to emphasize the changes
// selection.join(
//     enter => enter.append("p")
//     .style("color","steelblue")
//     .style("opacity",0)
//     .transition().duration(1000).style("opacity",1)
//     .text(function(d, i){return `Entered: Data: ${d}, Index: ${i}`}),

//     update => update
//     .text(function(d, i){return `Updated: Data: ${d}, Index: ${i}`}),
    
//     exit => exit.text(function(d, i){return `Exited: Data: ${d}, Index: ${i}`}).style("color","red")
//     .transition().duration(1000).style("opacity",0).remove()
// )


// Now, with exiting elements 
// selection.join("p").text(function(d, i){return `Data: ${d}, Index: ${i}`})

// selection = mainDiv.selectAll("p").data(d1.slice(0,5))

// selection.join(
//     enter => enter.append("p")
//     .style("color","steelblue")
//         .style("color","steelblue")
//         .style("opacity",0)
//         .transition().duration(1000).style("opacity",1)
//     .text(function(d, i){return `Entered: Data: ${d}, Index: ${i}`}),

//     update => update.style("color",'black')
//     .text(function(d, i){return `Updated: Data: ${d}, Index: ${i}`}),
    
//     exit => exit.text(function(d, i){return `Exited: Data: ${d}, Index: ${i}`}).style("color","red")
//     .transition().duration(1000).style("opacity",0).remove()
// )





