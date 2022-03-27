function operate(operator,x,y) {
    if (operator=='+') {
        result = x+y;
        return result;
    } else if (operator=='-') {
        result = x-y;
        return result;
    } else if (operator=='*') {
        result = x*y;
        return result;
    } else if (operator=='/') {
        result = x/y;
        return result;
    }
}

const container = document.getElementById('container');
let display = document.createElement('div');

display.className = "calcDisplay"
container.appendChild(display);
let numRows = 4
let numCells = 4
let col1Names = ["7","4","1","AC"];
let col2Names = ["8","5","2","0"];
let col3Names = ["9","6","3","="];
let col4Names = ["%","X","-","+"];

for (i=0;i<numRows;i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (x=0;x<numCells;x++) {
        let cell = document.createElement('div');
        cell.className = "calcButton";
        cell.style.backgroundColor = "grey";
        if (i == 0) {
            cell.innerText = col1Names[x];
        } else if (i == 1) {
            cell.innerText = col2Names[x];
        } else if (i == 2) {
            cell.innerText = col3Names[x];
        } else {
            cell.innerText = col4Names[x];
            cell.style.backgroundColor = "orange";
        }
        row.appendChild(cell)
    }
    container.appendChild(row);
}
