//Global variables
var prevCalc = 0;
var calc = "";


//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num--;
            document.frmCalc.txtnumber.value = num;
        }
}

// Implemented basic calling functions for each operation
function subtract() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Subtract";
    }
}

function multiply() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Multiply";
    }
}

function divide() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Divide";
    }
}

function power() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Power";
    }
}

function power2() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        var result = Math.pow(num, 2);
        document.frmCalc.txtNumber.value = result;
    }
}

function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num++;
        document.frmCalc.txtNumber.value = num;
    }
}

function sqrt() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        var result = Math.sqrt(num);
        document.frmCalc.txtNumber.value = result;
    }
}

function floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        var result = Math.floor(num);
        document.frmCalc.txtNumber.value = result;
    }
}

function round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        var result = Math.round(num);
        document.frmCalc.txtNumber.value = result;
    }
}

//The following function is called when "Add" button is clicked. 
//Note that it also changes the values of the global variables.       
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}

//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
// function calculate() {
//     var num = parseFloat(document.frmCalc.txtNumber.value);
//         if (!(isNaN(num))) {
//             if (calc == "Add"){
//                 var total = previousCalc + num;
//                 document.frmCalc.txtNumber.value = total;
//             }
        
// }}

// function clear() {
// 	document.frmCalc.txtNumber.value = "";
// 	prevCalc = 0;
// 	calc = "";
// }

// Modified calculate function to handle all operations
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        switch(calc) {
            case "Add":
                var total = prevCalc + num;
                break;
            case "Subtract":
                var total = prevCalc - num;
                break;
            case "Multiply":
                var total = prevCalc * num;
                break;
            case "Divide":
                var total = prevCalc / num;
                break;
            case "Power":
                var total = Math.pow(prevCalc, num);
                break;
        }
        document.frmCalc.txtNumber.value = total;
    }
}