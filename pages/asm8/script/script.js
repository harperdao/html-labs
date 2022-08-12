function addValue(){
    // get the operands value
    var firstParam = document.getElementById("first_param").value;
    var secondParam = document.getElementById("second_param").value;
    // parse to integer. You can use: parseInt(input, 10);
    firstParam = parseInt(firstParam);
    secondParam = parseInt(secondParam);
    // perform operation
    var result = firstParam + secondParam;
    // creating the text output
    var textResult = firstParam + " + " + secondParam + " = " + result;
    // change the text area
    document.mycalculator.output.value = textResult;
}


function mulValue(){
    // get the operands value
    var firstParam = document.getElementById("first_param").value;
    var secondParam = document.getElementById("second_param").value;
    // parse to integer. You can use: parseInt(input, 10);
    firstParam = parseInt(firstParam);
    secondParam = parseInt(secondParam);
    // perform operation
    var result = firstParam * secondParam;
    // creating the text output
    var textResult = firstParam + " x " + secondParam + " = " + result;
    // change the text area
    document.mycalculator.output.value = textResult;
}

function divValue(){
    // get the operands value
    var firstParam = document.getElementById("first_param").value;
    var secondParam = document.getElementById("second_param").value;
    // parse to integer. You can use: parseInt(input, 10);
    firstParam = parseInt(firstParam);
    secondParam = parseInt(secondParam);
    // perform operation
    var result = firstParam / secondParam;
    result = result.toFixed(2);
    // creating the text output
    var textResult = firstParam + " : " + secondParam + " = " + result;
    // change the text area
    document.mycalculator.output.value = textResult;
}
