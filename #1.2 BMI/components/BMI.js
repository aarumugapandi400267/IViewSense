function calculate() {
    var markWeight = parseFloat(document.getElementById('markWeight').value);
    var markHeight = parseFloat(document.getElementById('markHeight').value);

    var johnWeight = parseFloat(document.getElementById('johnWeight').value);
    var johnHeight = parseFloat(document.getElementById('johnHeight').value);

    var markBMI = bmi(markHeight, markWeight).toFixed(2);
    var johnBMI = bmi(johnHeight, johnWeight).toFixed(2);

    if (markBMI > johnBMI) {
        console.log(`Mark's BMI(${markBMI}) is greater than John's BMI(${johnBMI})`);
        document.getElementById('output').innerHTML=`Mark's BMI(${markBMI}) is greater than John's BMI(${johnBMI})`
    } else {
        console.log(`John's BMI(${johnBMI}) is greater than Mark's BMI(${markBMI})`);
        document.getElementById('output').innerHTML=`John's BMI(${johnBMI}) is greater than Mark's BMI(${markBMI})`
    }
}

function bmi(height, weight) {
    var bmi = weight / (height ** 2);
    return bmi;
}