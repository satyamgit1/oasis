


function myFunction() {
    if (document.getElementById("num2-el").value == "Celsius") {
        convertc();

    }
    else if (document.getElementById("num2-el").value == "Fahrenheit") {
        convertf();
    }
    else {
        convertk();
    }
}

function convertc() {
    let num1 = document.getElementById("degree").value;
    let res1 = parseFloat(num1) * 9 / 5 + 32;
    document.getElementById('res1-el').textContent = "Fahrenheit:" + Math.round(res1 * 100) / 100;
    let res2 = parseFloat(num1) + 273.15;
    document.getElementById('res2-el').textContent = "Kelvin:" + Math.round(res2 * 100) / 100;
}

function convertf() {
    let num1 = document.getElementById("degree").value;
    let res1 = 5 * (parseFloat(num1) - 32) / 9;
    document.getElementById('res1-el').textContent = "Celsius:" + Math.round(res1 * 100) / 100;;
    let res2 = parseFloat(res1) + 273.15;
    document.getElementById('res2-el').textContent = "Kelvin:" + Math.round(res2 * 100) / 100;;
}
function convertk() {
    let num1 = document.getElementById("degree").value;
    let res1 = parseFloat(num1) - 273.15;
    document.getElementById('res1-el').textContent = "Celsius:" + Math.round(res1 * 100) / 100;;
    let res2 = parseFloat(res1) * 9 / 5 + 32;
    document.getElementById('res2-el').textContent = "Fahrenheit:" + Math.round(res2 * 100) / 100;;
}
