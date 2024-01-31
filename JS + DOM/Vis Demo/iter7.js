// This example comes from Dr. Carlos Scheidegger: http://cscheid.net/courses/fall-2019/csc444/lectures/lecture4.html

//-------------- Iteration 7: Generic plotAll for any SVG element, just like generic make in iter2 ------------------
//////////////////////////////////////////////////////////////////////////////
function make(name, attrs)
{
    var element = document.createElementNS("http://www.w3.org/2000/svg", name);
    if (attrs === undefined) attrs = {};
    for (var key in attrs) {
        element.setAttributeNS(null, key, attrs[key]);
    }
    return element;
}


//////////////////////////////////////////////////////////////////////////////
// what if we wanted to plot with different shapes?

function plotAll(svg, data, element, attributeGetters)
{
    var obj;
    for (var i=0; i<data.length; ++i) {
        obj = {};
        for (var key in attributeGetters) {
            obj[key] = attributeGetters[key](data[i], i);
        }
        svg.appendChild(make(element, obj));
    }
}

//////////////////////////////////////////////////////////////////////////////
// these are what we had before

function rectWidth(svgWidth) { 
    return function() { 
        return Math.ceil(svgWidth / ukDriverFatalities.length);
    };
}

function rectHeight(svgHeight) {
    return function(row, index) { 
        return row.count / 2500 * svgHeight; 
    };
}

function rectX(svgWidth) { 
    return function(row, index) {
        return index * svgWidth / ukDriverFatalities.length; 
    };
}

function rectY(svgHeight) {
    return function(row, index) {
        return svgHeight - (row.count / 2500 * svgHeight);
    };
}

//////////////////////////////////////////////////////////////////////////////
// This is what we'll do now: different getters for different sizes

var chart1 = make("svg", { width: 800, height: 400, "class": "my-chart" });
document.getElementById("chart1").appendChild(chart1);
plotAll(chart1, ukDriverFatalities, "rect", {
            width: rectWidth(800),
            height: rectHeight(400),
            x: rectX(800),
            y: rectY(400)
        });

var chart2 = make("svg", { width: 500, height: 300, "class": "my-chart" });
document.getElementById("chart2").appendChild(chart2);
plotAll(chart2, ukDriverFatalities, "rect", {
            width: rectWidth(500),
            height: rectHeight(300),
            x: rectX(500),
            y: rectY(300)
        });

var chart3 = make("svg", { width: 300, height: 500, "class": "my-chart" });
document.getElementById("chart3").appendChild(chart3);
plotAll(chart3, ukDriverFatalities, "rect", {
            width: rectWidth(300),
            height: rectHeight(500),
            x: rectX(300),
            y: rectY(500)
        });
