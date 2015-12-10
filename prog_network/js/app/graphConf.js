
//Function to build the svg graph. Set the visual configs of graph here

function drawGraph(graph){
d3.select("svg").remove();
var width = 800,
    height = 600;  

var color = d3.scale.category20();

var force = d3.layout.force()
    .charge(-300)
    .linkDistance(120)
    .size([width, height]);

var svg = d3.select("graph").append("svg")
    .attr("width", width)
    .attr("id","graphSVG")
    .attr("height", height);

force
      .nodes(graph.nodes)
      .links(graph.links)
      .start();

  var link = svg.selectAll(".link")
      .data(graph.links)
    .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", function(d) { return Math.sqrt(d.value); });

  var gnodes = svg.selectAll('g.gnode')
     .data(graph.nodes)
     .enter()
     .append('g')
     .classed('gnode', true);
    
  var node = gnodes.append("circle")
      .attr("class", "node")
      .attr("r", 5)
      .attr("id",function(){ return "circle-"+graph.nodes[d3.select(this).datum().index].id_discogs;})
      .style("stroke", function(d) { if(d.group==1) return "#09f"; if(d.group==2) return "#85ED85"; })
      .call(force.drag);

  d3.selectAll("circle.node").on("click", function(){
        index=d3.select(this).datum().index;
        artist_id=graph.nodes[d3.select(this).datum().index].id_discogs;
        if(artist_id!=0)
          $('body').scope().showArtistData(artist_id,undefined);
        else
          swal("Sorry", "You are already in this artist", "warning");
        });

  var labels = gnodes.append("text")
      .attr("id",function(d) { return d.id_discogs})
      .text(function(d) { return "\u00A0 \u00A0 \u00A0"+d.name; })
      .on("click",function(){
        index=d3.select(this).datum().index;
        artist_id=graph.nodes[index].id_discogs;
        if(index!=0)
          $('body').scope().showArtistData(artist_id,undefined);
        else
          swal("Sorry", "You are already in this artist", "warning");
      });
   $("text").attr("dominant-baseline","before-edge");
  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    gnodes.attr("transform", function(d) { 
        return 'translate(' + [d.x, d.y] + ')'; 
    });
            
  });  
}
