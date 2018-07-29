// the variable objective stores all the properties of the td on this page
// this is defined as a constant as it won't change for the original value of objective
const objective = document.querySelectorAll("td");

// a for loop is sued to cycle through all of the values within objective and listens for a click action on a table data cell
    for (var i = 0; i < objective.length; i++) {
        objective[i].addEventListener("click", function() {
        
        // this is used to look out for specific action performed on one of the cells (nb its like writing objective [i] also)
        // if a cell is clicked its colour is checked and then changed
        if (this.className == "red") {
            this.className = "yellow"; 
        } else if (this.className == "yellow") {
            this.className = "green";
        } else if (this.className == "green") {
            this.className = "red";
        }
    });
}