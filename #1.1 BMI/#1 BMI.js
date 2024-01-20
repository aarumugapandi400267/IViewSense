var MarkHeight=1.69
var MarkWeight=78

var JohnHeight=1.95
var JohnWeight=92

var markHigherBMI

function BMI(Height,Weight) {
    let BMI=Weight/Height**2
    return BMI
}

var MarkBMI=BMI(MarkHeight,MarkWeight).toFixed(2)
var JohnBMI=BMI(JohnHeight,JohnWeight).toFixed(2)

function isMarkHigherBMI(MarksBMI,JohnsBMI){
    if(MarksBMI>JohnsBMI) markHigherBMI=true
    else markHigherBMI=false
    console.log(markHigherBMI)
}
isMarkHigherBMI(MarkBMI,JohnBMI)