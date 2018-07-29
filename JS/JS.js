// the variable objective stores all the properties of the td on this page
// this is defined as a constant as it won't change for the original value of objective
function colorChange(){
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
}
// Following code allows user to make edits to the table data fields
// nb. these are removed if page refreshed

function closeInput(elm) {
    var tableEdit = elm.parentNode;
    var value = elm.value;
    tableEdit.removeChild(elm);
    tableEdit.innerHTML = value;
}

function addInput(elm) {
    if (elm.getElementsByTagName('input').length > 0) return;

    var value = elm.innerHTML;
    elm.innerHTML = '';

    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('value', value);
    input.setAttribute('onBlur', 'closeInput(this)');
    elm.appendChild(input);
    input.focus();
}

// HERE A BUTTON WILL ADD A NEW ROW
function addRow() {
    let table = document.getElementById("objectiveTable");
    // the -1 allows it to be the last item to be added in the table
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.outerHTML = "<th>First</th>";
    cell2.outerHTML = "<td  dir='ltr'  class='tLine' nowrap ondblclick='addInput(this)'>New Student</td>";
    cell3.className = "red";
    cell4.className = "red";
    cell5.className = "red";
    //need to re-run colorChange so that the array is updated with the new items that are inserted
    colorChange()
}

// run the color change on the load of the page
colorChange()