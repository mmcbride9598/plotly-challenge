var data;



d3.json("samples.json").then((incomingData) => {
    data = incomingData;
    console.log(data);
dropDown(data.names)
        data.sort(function(a,b){
            return parseFloat(b.sample_values - parseFloat(a.sample_values));
        });

        data = data.reverse();

        var OTUlabels = data.map(row => row.otu_ids);

        var Sampledata = data.map(row => row.sample_values)

        var trace1 = {
            x: OTUlabels,
            y: Sampledata,
            type: "bar",
        };

        var chartData = [trace1];

        var layout = {
            title: "OTU Sample Results",
            xaxis: { title: "OTU Labels"},
            yaxis: { title: "Sample Data"}
            };


        Plotly.newPlot("bar-plot", chartData, layout);
});

function button(idnumber) {
    console.log("button" + idnumber)
    chart(idnumber)
    metadata(idnumber)
}

function chart(id) {
    // console.log("chart:" + id)
     
}

function metadata(idnumber) {
    console.log("metadata:" + idnumber)

}

function dropDown(names) {
    console.log(names)
    var selector = d3.select("#selDataset")
    names.forEach(element => {
        selector.append("option").text(element)
    
    });
    button(names[0])
}

//.filter & .map, 
// metadata: object.entries
// d3.select(SELECTEDHTML).html("") for metadata section