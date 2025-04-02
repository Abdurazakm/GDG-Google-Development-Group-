let mass = parseFloat(prompt("Enter your mass in kg:"));
let height = parseFloat(prompt("Enter your height in meters:"));

let bmi = mass / (height * height);
alert("Your BMI is: " + bmi.toFixed(2));
