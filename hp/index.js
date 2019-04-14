function fetchAndParseData() {
    return fetch('HP_network_clean.json')
    .then(function(response) {
        return response.json();
    })
    .catch(function() {
        alert('Error fetching data');
    });
}

function setupTooltip() {

    d3.select("body .tooltip").remove();

    const tooltip =  d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("display", "none");

    return tooltip;
}

function hideTooltip(tooltip) {
    tooltip.style("display", "none");
}

function switchCurrentNode() {

}

function updateToolTip(tooltip, d) {
    tooltip.selectAll("*").remove();

    tooltip
    .append("div")
    .attr("class", "backdrop");

    tooltip.append("div")
    .attr("class", "tooltip-body");

    tooltip
    .style("display", "block")
    .append("div")
    .attr("class", "profile-picture")
    .style("background-image", "url(" + d.link_image + ")");

    tooltip
    .selectAll(".tooltip-body")
    .append("label")
    .attr("class", "profile-name")
    .text("Name: ");

    tooltip
    .selectAll(".tooltip-body")
    .append("span")
    .text(d.label);

    tooltip
    .selectAll(".tooltip-body")
    .append("br");

    tooltip
    .selectAll(".tooltip-body")
    .append("br");

    tooltip
    .selectAll(".tooltip-body")
    .append("label")
    .text("Connections:");

    tooltip
    .selectAll(".tooltip-body")
    .append("br")

    tooltip
    .selectAll(".tooltip-body")
    .selectAll("connections")
    .data(d.connection_link)
    .enter()
    .append("span")
    .attr("class", "connection")
    .text(function(d) {return d;});

    tooltip
    .style("left", d.x)
    .style("top", d.y)
    .style("transform", "translate(-50%, -100%)");

}

function highlightSubGraph(data, nodes, edges, index) {
    
    var subgraphEdges = edges.nodes().filter(function(edge) {
        return index == edge.dataset.source || index == edge.dataset.target;
    });

    const fill = $(this).attr("fill");

    $(edges.nodes()).css("display", "none");
    $(subgraphEdges).css("display", "initial");
    $(subgraphEdges).css("stroke", fill);
}

function restoreGraph(nodes, edges) {
    edges.style("display", "initial");
    edges.style("stroke", function(d) {
        return d.originalColor;
    });
}

function drawGraph(data) {

    console.log(data);
    
    var width = $("#graph-container").width(),
        height = $("#graph-container").height(),
        color = d3.scaleOrdinal(d3.schemeCategory10),
        tooltipTimer;

    
    for(var i = 0; i < data.nodes.length; i++) {
        data.nodes[i].x = Math.random() * width;
        data.nodes[i].y = Math.random() * height;
        data.nodes[i].originalColor = "#808080";
    }

    for(var i = 0; i < data.edges.length; i++) {
        data.edges[i].originalColor = "#848484";
    }

    var tooltip = setupTooltip();

    tooltip.on("mouseenter", function() {
        if(tooltipTimer) {
            clearTimeout(tooltipTimer);
        }
    });

    tooltip.on("mouseleave", function() {
        hideTooltip(tooltip);
    });

    var forceSimulation = d3.forceSimulation(data.nodes)
                        .force("charge", d3.forceManyBody().strength(-20))
                        .force("center", d3.forceCenter(width / 2, height / 2));
    
    var svg = d3.select("#graph-container")
                .append('svg')
                .attr('height', "100%")
                .attr('width', "100%");

    // clear the current state
    svg.selectAll("*").remove();

    var edges = svg.append("g")
                .attr("class", "edges")
                .selectAll("edges")
                .data(data.edges)
                .enter()
                .append("line")
                .attr("class", "edge")
                .attr("x1", function(d) {
                    return data.nodes[d.source].x;
                }).attr("y1", function(d) {
                    return data.nodes[d.source].y;
                }).attr("x2", function(d) {
                    return data.nodes[d.target].x;
                }).attr("y2", function(d) {
                    return data.nodes[d.target].y;
                }).attr("stroke", function(d) {
                    return d.originalColor;
                }).attr("data-source", function(d) {
                    return d.source;
                }).attr("data-target", function(d) {
                    return d.target;
                });
                
    var nodes = svg.append("g")
                .attr("class", "vertices")
                .selectAll("vertices")
                .data(data.nodes)
                .enter()
                .append("circle")
                .attr("class", "vertex")
                .attr("r", 5)
                .attr("data-id", function(d) {
                    return d.id;
                })
                .attr("data-link", function(d) {
                    return d.link;
                })
                .attr("cx", function(d) {
                    return d.x;
                })
                .attr("cy", function(d) {
                    return d.y;
                }).attr("fill", function(d) {
                    return color(Math.ceil(Math.random() * (10)));
                    // return d.originalColor;
                }).on("click", function(e) {

                }).on("mouseover", function(e) {
                    updateToolTip(tooltip, e);
                }).on("mouseout", function(e) {
                    if(tooltipTimer) {
                        clearTimeout(tooltipTimer);
                    } 
                    tooltipTimer = setTimeout(hideTooltip.bind(null, tooltip), 200);
                }).on("click", function(d, index) {
                    d3.event.stopPropagation();
                    highlightSubGraph.call(this, data, nodes, edges, index);
                });
                
    
    var node_labels = svg.append("g")
                .attr("class", "labels")
                .selectAll("labels")
                .data(data.nodes)
                .enter()
                .append("text")
                .text(function(d) {
                    return d.label;
                }).attr("font-size", 15)
                .attr("dx", 15)
                .attr("dy", 4);
    
    
    forceSimulation.nodes(nodes).on("tick", function() {
        nodes.attr("cx", function(d) {
            return d.x;
        }).attr("cy", function(d) {
            return d.y;
        });

        node_labels.attr("x", function(d) {
            return d.x;
        }).attr("y", function(d) {
            return d.y;
        })
    });

    $("body").off("click").on("click", restoreGraph.bind(null, nodes, edges));

    tooltip.on("click", function(e) {
        d3.event.stopPropagation();
    });

    $(".tooltip").on("click", ".connection", function(e) {
        var targetLink = $(e.currentTarget).text().trim(),
            data_node = data.nodes.filter(function(node) {
                return node.link === targetLink;
            })[0];
        
        if(!data_node)
            return;

        restoreGraph(nodes, edges);
        highlightSubGraph(data, nodes, edges, data_node.index);
        updateToolTip(tooltip, data_node);
    });
}


function main() {
    fetchAndParseData()
    .then(drawGraph);
}

$(document).ready(main);

