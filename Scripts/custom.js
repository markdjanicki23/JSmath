let num1 = Number(document.getElementById("userNum1").value);
let num2 = Number(document.getElementById("userNum2").value);
let num3 = Number(document.getElementById("userNum3").value);
let num4 = Number(document.getElementById("userNum4").value);
let num5 = Number(document.getElementById("userNum5").value);

function getLeast() {
    let newLeast = Math.min(num1, num2, num3, num4, num5);
    document.getElementById("result").innerHTML = "the smallest of these numbers is " + `<b>${newLeast}</b>`
}

function getGreatest() {
    let newGreatest = Math.max(num1, num2, num3, num4, num5);
    document.getElementById("result").innerHTML = "the largest of these numbers is " + `<b>${newGreatest}</b>`
}

function getMean() {
    let countMean = [num1, num2, num3, num4, num5];
    let length = countMean.length;
    let newMean = (num1 + num2 + num3 + num4 + num5) / length;
    document.getElementById("result").innerHTML = "the mean of these numbers is " + `<b>${newMean}</b>`
}

function getSum() {
    let newSum = (num1 + num2 + num3 + num4 + num5);
    document.getElementById("result").innerHTML = "the sum of these numbers is " + `<b>${newSum}</b>`;
}

function getProduct() {
    let newProduct = (num1 * num2 * num3 * num4 * num5);
    document.getElementById("result").innerHTML = "the product of these numbers is " + `<b>${newProduct}</b>`;
}