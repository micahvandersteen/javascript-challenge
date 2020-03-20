
// creating variable to reference full sighting list table body
var tbody = d3.select("tbody");

// forEach loop that:
// adds one table row for each sighting object (1)
// adds a cell for each [key:value] pair in each sighting object (2)
function buildFullTable () {
data.forEach((sighting) => {
    
    // 1
    var row = tbody.append("tr"); 
    
    // 2
    Object.entries(sighting).forEach(([key, value]) => {
        
        var cell = row.append("td");
        
        cell.text(value);
    });
});
}
buildFullTable();

// assigning data to descriptive variable
var sightings = data;

// referencing filter button with id 'filter-btn'
var button = d3.select("#filter-btn");

// creating function to handle when the filter button is clicked
// this is a filter function with event listener
button.on("click" , function() {
    // Getting a reference to the input element on the page with the id of 'datetime'
    var inputElement = d3.select("#datetime");
    
    // getting value of input element
    var inputDate = inputElement.property("value");
    
     // clears the data of the current table        
    tbody.html("");
    
    var filteredSightings = sightings.filter(sighting => sighting.datetime === inputDate);
    
    // recreating table of the filtered sightings 
    filteredSightings.forEach((sighting) => {
        
    // 1
    var row = tbody.append("tr"); 

    // 2
    Object.entries(sighting).forEach(([key, value]) => {
        
        var cell = row.append("td");

        cell.text(value);
    });
});
    if (inputDate == "" || inputDate == null) {
        buildFullTable();
      }
});






