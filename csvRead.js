d3.csv("A229RX0.csv", function(data) { 
    data.forEach(function(d) {
    d.YEAR = +d.YEAR;
    d["A229RX0"] = +d["A229RX0"];
  });
  console.log(data[0]);
});

/*
d3.csv("A229RX0.csv", function(d) {
  return {
    year : +d.YEAR,
    per capita income : +d.A229RX0,
    population : +d.population,
    land_area : +d["land area"]
  };
}, function(data) {
  console.log(data[0]);
});
*/
