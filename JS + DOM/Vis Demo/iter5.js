// This example comes from Dr. Carlos Scheidegger: http://cscheid.net/courses/fall-2019/csc444/lectures/lecture4.html

//-------------- Iteration 5: Use getters of iter4 to adjust visualizations ------------------
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
// these are what we had before

function rectWidth(row, index) { return 3; }
function rectHeight(row, index) { return row.count / 2500 * 400;}
function rectX(row, index) { return index * 3; }
function rectY(row, index) { return 400 - (row.count / 2500 * 400); }

//////////////////////////////////////////////////////////////////////////////
// This is what we'll do now: different getters for different sizes

var chart1 = make("svg", { width: 800, height: 400, "class": "my-chart" });
document.getElementById("chart1").appendChild(chart1);
plotAll(chart1, ukDriverFatalities, 
        function() { return Math.ceil(800 / ukDriverFatalities.length); }, 
        function(row) { return row.count / 2500 * 400; },
        function(row, index) { return index * 800 / ukDriverFatalities.length; }, 
        function(row) { return 400 - row.count / 2500 * 400; });

var chart2 = make("svg", { width: 500, height: 300, "class": "my-chart" });
document.getElementById("chart2").appendChild(chart2);
plotAll(chart2, ukDriverFatalities, 
        function() { return Math.ceil(500 / ukDriverFatalities.length); }, 
        function(row) { return row.count / 2500 * 300; },
        function(row, index) { return index * 500 / ukDriverFatalities.length; },
        function(row) { return 300 - row.count / 2500 * 300; });

var chart3 = make("svg", { width: 300, height: 500, "class": "my-chart" });
document.getElementById("chart3").appendChild(chart3);
plotAll(chart3, ukDriverFatalities, 
        function() { return Math.ceil(300 / ukDriverFatalities.length); }, 
        function(row) { return row.count / 2500 * 500; },
        function(row, index) { return index * 300 / ukDriverFatalities.length; },
        function(row) { return 500 - row.count / 2500 * 500; });
