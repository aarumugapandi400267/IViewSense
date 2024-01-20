function calcBMI(weight, height) {
    return weight / height ** 2;
}
var Mark = {
    name: "Mark Miller",
    weight: 78,
    height: 1.69
};
Mark.BMI = calcBMI(Mark.weight, Mark.height).toFixed(2);
  
var John = {
    name: "John Smith",
    weight: 92,
    height: 1.95
};
John.BMI = calcBMI(John.weight, John.height).toFixed(2);
  
(John.BMI>Mark.BMI)?console.log(`John's BMI(${John.BMI}) is Greater than Mark's BMI(${Mark.BMI})`)
:console.log(`Mark's BMI(${Mark.BMI}) is Greater than John's BMI(${John.BMI})`)