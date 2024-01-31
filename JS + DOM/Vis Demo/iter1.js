// This example comes from Dr. Carlos Scheidegger: http://cscheid.net/courses/fall-2019/csc444/lectures/lecture4.html

//-------------- Iteration 1: No Reuse ------------------
function make(name)
{
    return document.createElementNS("http://www.w3.org/2000/svg", name);
}

function makeSVG(width, height)
{
    if (!width) width = 400;
    if (!height) height = 400;
    var svg = make("svg");
    svg.setAttributeNS(null, "width", width);
    svg.setAttributeNS(null, "height", height);
    return svg;
}

function makeRect(width, height, x, y)
{
    var rect = make("rect");
    rect.setAttributeNS(null, "width", width);
    rect.setAttributeNS(null, "height", height);
    rect.setAttributeNS(null, "x", x);
    rect.setAttributeNS(null, "y", y);
    return rect;
}

//////////////////////////////////////////////////////////////////////////////
// how would we plot all fatalities

function plotAll(svg)
{
    for (var i=0; i<ukDriverFatalities.length; ++i) {
        svg.appendChild(makeRect(3, 
            ukDriverFatalities[i].count / 2500 * 400, 
            i * 3,
            400 - (ukDriverFatalities[i].count / 2500 * 400 )));
    }
}

var chart1 = makeSVG(800, 400);
chart1.setAttribute("class", "my-chart");
document.getElementById("chart1").appendChild(chart1);
plotAll(chart1);

var chart2 = makeSVG(500, 300);
chart2.setAttribute("class", "my-chart");
document.getElementById("chart2").appendChild(chart2);
plotAll(chart2);

var chart3 = makeSVG(300, 500);
chart3.setAttribute("class", "my-chart");
document.getElementById("chart3").appendChild(chart3);
plotAll(chart3);


//because we hard-coded the values, they get plotted off of the svg