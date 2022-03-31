function operate(operator) {
    if (operator=='+') {
        result = (displayValue)+(storedValue);
        return result;
    } else if (operator=='-') {
        result = storedValue-displayValue;
        return result;
    } else if (operator=='*') {
        result = displayValue*storedValue;
        return result;
    } else if (operator=='/') {
        result = displayValue/storedValue;
        return result;
    }
}

let displayValue = 0;
let storedValue = 0;

const container = document.getElementById('container');
let display = document.createElement('div');

display.className = "calcDisplay"
display.textContent = displayValue;
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



let clearedStatus = true;
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



zeroButton.addEventListener('click', (event) => {
    if (displayValue.toString().length < 9) {
        if (clearedStatus == false) {
            displayValue = parseInt(`${displayValue}0`);
            display.textContent = displayValue;
        } else {
            displayValue = 0;
            display.textContent = displayValue;
        }
    }
  });
oneButton.addEventListener('click', (event) => {
    if (displayValue.toString().length < 9) {
        if (clearedStatus == false) {
            displayValue = parseInt(`${displayValue}1`);
            display.textContent = displayValue;
        } else {
            displayValue = 1;
            display.textContent = displayValue;
            clearedStatus = false;
        }
    }
    
  });
twoButton.addEventListener('click', (event) => {
    if (displayValue.toString().length < 9) {
        if (clearedStatus == false) {
            displayValue = parseInt(`${displayValue}2`);
            display.textContent = displayValue;
        } else {
            displayValue = 2;
            display.textContent = displayValue;
            clearedStatus = false;
        }
    }
  });
threeButton.addEventListener('click', (event) => {
    if (displayValue.toString().length < 9) {
        if (clearedStatus == false) {
            displayValue = parseInt(`${displayValue}3`);
            display.textContent = displayValue;
        } else {
            displayValue = 3;
            display.textContent = displayValue;
            clearedStatus = false;
        }
    }
  });
fourButton.addEventListener('click', (event) => {
    if (displayValue.toString().length < 9) {
        if (clearedStatus == false) {
            displayValue = parseInt(`${displayValue}4`);
            display.textContent = displayValue;
        } else {
            displayValue = 4;
            display.textContent = displayValue;
            clearedStatus = false;
        }
    };
  });
fiveButton.addEventListener('click', (event) => {
    if (displayValue.toString().length < 9) {
        if (clearedStatus == false) {
            displayValue = parseInt(`${displayValue}5`);
            display.textContent = displayValue;
        } else {
            displayValue = 5;
            display.textContent = displayValue;
            clearedStatus = false;
        }
    }
  });
sixButton.addEventListener('click', (event) => {
    if (displayValue.toString().length < 9) {
        if (clearedStatus == false) {
            displayValue = parseInt(`${displayValue}6`);
            display.textContent = displayValue;
        } else {
            displayValue = 6;
            display.textContent = displayValue;
            clearedStatus = false;
        }
    }
  });
sevenButton.addEventListener('click', (event) => {
    if (displayValue.toString().length < 9) {
        if (clearedStatus == false) {
            displayValue = parseInt(`${displayValue}7`);
            display.textContent = displayValue;
        } else {
            displayValue = 7;
            display.textContent = displayValue;
            clearedStatus = false;
        }
    }
  });
eightButton.addEventListener('click', (event) => {
    if (displayValue.toString().length < 9) {
        if (clearedStatus == false) {
            displayValue = parseInt(`${displayValue}8`);
            display.textContent = displayValue;
        } else {
            displayValue = 8;
            display.textContent = displayValue;
            clearedStatus = false;
        }
    }
  });
nineButton.addEventListener('click', (event) => {
    if (displayValue.toString().length < 9) {
        if (clearedStatus == false) {
            displayValue = parseInt(`${displayValue}9`);
            display.textContent = displayValue;
        } else {
            displayValue = 9;
            display.textContent = displayValue;
            clearedStatus = false;
        }
    };
  });

clearButton.addEventListener('click', (event) => {
        displayValue = 0;
        storedValue = 0;
        clearedStatus = true;
        display.textContent = displayValue;
  });

addButton.addEventListener('click', (event) => {
    operator = '+';
    if (clearedStatus == false) {
        storedValue = storedValue+displayValue
        displayValue = 0
        display.textContent = storedValue;
    } else {
        storedValue = displayValue;
        displayValue = 0;
    }
  });
subtractButton.addEventListener('click', (event) => {
    operator = '-';
    if (clearedStatus == false && storedValue != 0) {
        storedValue = storedValue - displayValue;
        displayValue = 0;
        display.textContent = storedValue;
    } else if (clearedStatus == false && storedValue == 0) {
        display.textContent = displayValue;
        storedValue = -1*displayValue;
        displayValue = 0;
        } else {
        storedValue = displayValue;
        displayValue = 0;
    }
  });
multiplyButton.addEventListener('click', (event) => {
    console.log('X');
  });
divideButton.addEventListener('click', (event) => {
    console.log('%');
  });
equalButton.addEventListener('click', (event) => {
    let computedValue = operate(operator);
    display.textContent = computedValue;
  });

