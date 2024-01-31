//Select the div we are working in
let mainDiv = d3.select("#test")


// ------------ Bind D1 to Paragraphs in #test --------------

//create a selection of all <p> tags in our main div and bind the data d1 to them
let selection = mainDiv.selectAll("p").data(d1)

//call enter to manipulate all new data items that don't have a corresponding <p> tag (all of them in this example)
// Append a new <p> tag per item and set the text based on the data. 
selection.enter().append("p").text(function(d, i){return `Data: ${d}, Index: ${i}`})

//access the data bound to the first p tag
console.log("The data in the first <p> tag is: " + d3.select("p").datum())

//remove all html tags from our div 
// mainDiv.selectAll("*").remove()









// ------------ Bind D2 to Paragraphs in #test with an existing Paragraph--------------
//add an initial <p> tag
mainDiv.append("p").text("This is my initial paragraph.")

//create a selection of <p> tags in our div and bind to d2
selection = mainDiv.selectAll("p").data(d2)

/* call enter to manipulate data items with no corresponding <p> tag (comment this out for the second updating option)*/
// selection.enter().append("p").text(function(d, i){return `Data: ${d}, Index: ${i}`})

/* -- Two options for updating existing elements -- */
/* change the attributes of the existing selection (the existing tags bound to the attached data)*/
selection.text(function(d, i){return `Data: ${d}, Index: ${i}`})

//or 

/* enter the new data items, append the <p> tags and then merge with the existing selection 
before adjusting the attributes*/
// selection.enter().append("p").merge(selection).text(function(d, i){return `Data: ${d}, Index: ${i}`})








// ------------ Bind D1 to Paragraphs in #test with a dataset smaller than existing elements--------------
//This example assumes the previous example is still present 


//select and bind the <p> tags to a smaller dataset than the previous example (a subset of d1)
selection = mainDiv.selectAll("p").data(d1.slice(0,4))

//call exit to manipulate elements that no longer have data bound to them
selection.exit().text("We no longer have data bound to us").style("color","red")
//update existing elements with bound data
selection.text(function(d, i){return `Updated: Data: ${d}, Index: ${i}`})

//remove all elements from the div
// mainDiv.selectAll("*").remove()










// ------------- Bind D2 to Paragraphs in #test with an existing Paragraph, using Join ------------

//Set an initial paragraph
mainDiv.append("p").text("This is my initial paragraph.")

//create a selection of <p> tags in our div and bind to d2
selection = mainDiv.selectAll("p").data(d2)

/* 
    Use join to simultaneoulsy: 1) append new elements for data items with a corresponding tag 
    2) remove elements that no longer have bound data and 
    3) update the attributes of all selected elements (both those that existed and those that just entered)
    
    This replaces the merge step from before
*/
selection.join("p").text(function(d, i){return `Data: ${d}, Index: ${i}`})


/* -- Now an example of joining with a smaller dataset, demonstrating the extra elements are automatically removed*/
selection = mainDiv.selectAll("p").data(d2.slice(0,3))
selection.join("p").text(function(d, i){return `Data: ${d}, Index: ${i}`})



/* -- We can also specify custom handling for each selection part */
selection.join(
    enter => enter.append("p")
    .style("color","steelblue")
    .text(function(d, i){return `Entered: Data: ${d}, Index: ${i}`}),

    update => update
    .text(function(d, i){return `Updated: Data: ${d}, Index: ${i}`}),
    
    exit => exit.text(function(d, i){return `Exited: Data: ${d}, Index: ${i}`}).style("color","red"),
)



// Now, with exiting elements 
selection = mainDiv.selectAll("p").data(d1.slice(0,5))

selection.join(
    enter => enter.append("p")
    .style("color","steelblue")
    .text(function(d, i){return `Entered: Data: ${d}, Index: ${i}`}),

    update => update.style("color",'black')
    .text(function(d, i){return `Updated: Data: ${d}, Index: ${i}`}),
    
    exit => exit.text(function(d, i){return `Exited: Data: ${d}, Index: ${i}`}).style("color","red"),
)





