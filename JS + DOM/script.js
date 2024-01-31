// This example comes from Dr. Carlos Scheidegger: http://cscheid.net/courses/fall-2019/csc444/lectures/lecture4.html

//select our div labeled "hi"
mainDiv = document.getElementById("hi");


// Add a Text Node
var aTextNode = document.createTextNode("This is some text");
mainDiv.appendChild(aTextNode);






// write a function create a Div with a text element inside
function divWithText(text) {
    var result = document.createElement("div");
    var textNode = document.createTextNode(text);
    result.appendChild(textNode);
    return result;
}






// Create a 10 divs with the square i as text
for (i=0; i<10; ++i) {
    mainDiv.appendChild(divWithText(String(i*i)));
}


x = divWithText("X");
mainDiv.appendChild(x);







// //Some data about temps
// var forecasts = [
//     { "city": "DCA", "temperature": 92,  order: 0 },
//     { "city": "JFK", "temperature": 96,  order: 1 },
//     { "city": "SEA", "temperature": 77,  order: 2 },
//     { "city": "TUS", "temperature": 102, order: 3 },
//     { "city": "SFO", "temperature": 65,  order: 4 }
// ];


// // A function to add text nodes at a specific position
// function textAt(text, x, y) {
//     var node = divWithText(text);
//     node.setAttribute("style", "position:absolute; left: " + x + "px; top: " + y + "px;");
//     return node;
// }


// mainDiv.appendChild(textAt("hi", 20, 30));

// //iterate over forecasts to add text nodes containing the cities  at the speicifed location, based on the "order" attribute
// forecasts.forEach(function(forecast) {
//     mainDiv.appendChild(textAt(
//         forecast.city,
//         forecast.order * 40 + 10,
//         150));
// });


// // Function to create div nodes for forecasts
// function forecastText(forecast) {
//     //create a div with text of the temp
//     var node = divWithText(String(forecast.temperature));
//     //put it above the corresponding city name
//     var x = forecast.order * 40 + 10;
//     //put at the y position corresponding ot the temp
//     var y = 130 - forecast.temperature;
    
//     //reset the div back to the it's original position
//     node.reset = function() {
//         node.textContent = String(forecast.temperature);
//         node.style.position = "absolute";
//         node.style.left = x + "px";
//         node.style.top  = y + "px";
//         // We could have written it like this as well:
//         // node.setAttribute("style", "position:absolute; left: " + x + "px; top: " + y + "px;");
//     }
    
//     //update the position of the div
//     node.update = function() {
//         // move 1% of the way to the "bottom"
//         var oldY = node.style.top;
//         oldY = Number(oldY.substr(0, oldY.length-2)); // remove "px", convert to number
//         node.style.top = (oldY * 0.99 + 0.01 * 130) + "px";

//         // If we want the animation to restart after reaching the bottom 
//         // if ((oldY * 0.99 + 0.01 * 130) > 129.5){
//         //     node.reset();
//         // }
//     };
//     node.reset();
//     return node;
// }


//Add forecasts to screen
// var nodes = forecasts.map(forecastText);
// nodes.forEach(function(forecastNode) {
//     mainDiv.appendChild(forecastNode);
// });

// nodes.forEach(function(node) { node.update(); });

// function tick() {
//     nodes.forEach(function(node) { node.update(); });
// }


// ---- creating the animation ----

// // //Don't do this! It will crash your browser. 
// // // while (true){
// // //    tick()
// // // }

// // this works! Create a function that continuously recurses using "requetAnimationFrame"
// function tickForever() {
//     tick();
//     window.requestAnimationFrame(tickForever);
// }

// tickForever()

