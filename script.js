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
display.textContent = '123456789'
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
            cell.id = `button${col1Names[x]}`;
        } else if (i == 1) {
            cell.innerText = col2Names[x];
            cell.id = `button${col2Names[x]}`;
        } else if (i == 2) {
            cell.innerText = col3Names[x];
            cell.id = `button${col3Names[x]}`;
        } else {
            cell.innerText = col4Names[x];
            cell.id = `button${col4Names[x]}`;
            cell.style.backgroundColor = "orange";
        }
        row.appendChild(cell)
    }
    container.appendChild(row);
}


let currentValue = 0;
let clearButton = document.querySelector('#buttonAC');
let zeroButton = document.querySelector('#button0');
let oneButton = document.querySelector('#button1');
let twoButton = document.querySelector('#button2');
let threeButton = document.querySelector('#button3');
let fourButton = document.querySelector('#button4');
let fiveButton = document.querySelector('#button5');
let sixButton = document.querySelector('#button6');
let sevenButton = document.querySelector('#button7');
let eightButton = document.querySelector('#button8');
let nineButton = document.querySelector('#button9');
let addButton = document.querySelector('#button\\+');
let subtractButton = document.querySelector('#button\\-');
let multiplyButton = document.querySelector('#buttonX');
let divideButton = document.querySelector('#button\\%');
let equalButton = document.querySelector('#button\\=');

clearButton.addEventListener('click', (event) => {
    console.log('All Clear!');
  });
zeroButton.addEventListener('click', (event) => {
    console.log('0');
  });
oneButton.addEventListener('click', (event) => {
    console.log('1');
  });
twoButton.addEventListener('click', (event) => {
    console.log('2');
  });
threeButton.addEventListener('click', (event) => {
    console.log('3');
  });
fourButton.addEventListener('click', (event) => {
    console.log('4');
  });
fiveButton.addEventListener('click', (event) => {
    console.log('5');
  });
sixButton.addEventListener('click', (event) => {
    console.log('6');
  });
sevenButton.addEventListener('click', (event) => {
    console.log('7');
  });
eightButton.addEventListener('click', (event) => {
    console.log('8');
  });
nineButton.addEventListener('click', (event) => {
    console.log('9');
  });
addButton.addEventListener('click', (event) => {
    console.log('+');
  });
subtractButton.addEventListener('click', (event) => {
    console.log('-');
  });
multiplyButton.addEventListener('click', (event) => {
    console.log('X');
  });
divideButton.addEventListener('click', (event) => {
    console.log('%');
  });
equalButton.addEventListener('click', (event) => {
    console.log('=');
  });

