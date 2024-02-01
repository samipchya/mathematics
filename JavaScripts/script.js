let inputBox1 = document.getElementById('equilateralTextArea');
let solveButton1 = document.getElementById('equilateralBtn');
let outputText1 = document.getElementById('equilateralOutputText');

function equilateralCalculations() {
    let inputValue1 = parseFloat(inputBox1.value);
    outputText1.textContent = "Solution: " + Math.sqrt(3) / 4 * inputValue1 ** 2;
}

let inputBox2_a = document.getElementById('isoscelesTextArea_a');
let inputBox2_b = document.getElementById('isoscelesTextArea_b');
let solveButton2 = document.getElementById('isoscelesBtn');
let outputText2 = document.getElementById('isoscelesOutputText');

function isoscelesCalculations() {
    let inputValue2_a = parseFloat(inputBox2_a.value);
    let inputValue2_b = parseFloat(inputBox2_b.value);
    outputText2.textContent = 'Solution: ' + 1 / 4 * inputValue2_b * Math.sqrt(4 * inputValue2_a ** 2 - inputValue2_b ** 2);
}

let inputBox3_a = document.getElementById('scaleneTextArea_a');
let inputBox3_b = document.getElementById('scaleneTextArea_b');
let inputBox3_c = document.getElementById('scaleneTextArea_c');
// let inputBox3_d = document.getElementById('scaleneTextArea_d');
let solveButton3 = document.getElementById('scaleneBtn');
let outputText3 = document.getElementById('scaleneOutputText');

function scaleneCalculations() {
    let inputValue3_a = parseFloat(inputBox3_a.value);
    let inputValue3_b = parseFloat(inputBox3_b.value);
    let inputValue3_c = parseFloat(inputBox3_c.value);
    let perimeter = inputValue3_a + inputValue3_b + inputValue3_c;
    let semiPerimeter = perimeter / 2;
    let s_a = semiPerimeter - inputValue3_a;
    let s_b = semiPerimeter - inputValue3_b;
    let s_c = semiPerimeter - inputValue3_c;
    let solutionScalene = Math.sqrt(semiPerimeter * s_a * s_b * s_c);
    outputText3.textContent = 'Solution: ' + solutionScalene;
}