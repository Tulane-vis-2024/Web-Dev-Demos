// This example comes from Dr. Carlos Scheidegger: http://cscheid.net/courses/fall-2019/csc444/lectures/lecture4.html

//-------------- Iteration 6: Getter generators, higher-order functions ------------------
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


// what if we wanted to plot a different dataset?

function plotAll(svg, data, widthGetter, heightGetter, xGetter, yGetter)
{
    for (var i=0; i<data.length; ++i) {
        svg.appendChild(make("rect", { 
            width: widthGetter(data[i], i), 
            height: heightGetter(data[i], i),
            x: xGetter(data[i], i),
            y: yGetter(data[i], i)
        }));
    }
}

//////////////////////////////////////////////////////////////////////////////
// these are now getter *generators*

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
// This is what we'll do now: call getter generator with different parameter

var chart1 = make("svg", { width: 800, height: 400, "class": "my-chart" });
document.getElementById("chart1").appendChild(chart1);
plotAll(chart1, ukDriverFatalities, 
        rectWidth(800),
        rectHeight(400),
        rectX(800),
        rectY(400));

var chart2 = make("svg", { width: 500, height: 300, "class": "my-chart" });
document.getElementById("chart2").appendChild(chart2);
plotAll(chart2, ukDriverFatalities, 
        rectWidth(500),
        rectHeight(300),
        rectX(500),
        rectY(300));

var chart3 = make("svg", { width: 300, height: 500, "class": "my-chart" });
document.getElementById("chart3").appendChild(chart3);
plotAll(chart3, ukDriverFatalities, 
        rectWidth(300),
        rectHeight(500),
        rectX(300),
        rectY(500));
