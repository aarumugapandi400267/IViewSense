// const prompt = require('prompt-sync')({ sigint: true });
var Bills = [22,295,176,440,37,105,10,1100,86,52]
var tips=[]
var Total=[]
function tipCalc(Bill){
    let tip
    (Bill > 50 && Bill < 300)?tip=Bill*0.15:tip=Bill*0.2
    return tip
}
for(var i=0;i<Bills.length;i++){
    tips[i]=tipCalc(Bills[i])
}
function calcTotal(tips,Bills){
    for(var i=0;i<tips.length;i++){
        Total.push(tips[i]+Bills[i])
    }
}
function calcAvg(arr){
    let avg=0
    for(var i=0;i<arr.length;i++){
        avg+=arr[i]
    }
    return avg/=arr.length
}
console.log("Actual Bills..."+Bills);
calcTotal(tips,Bills)
console.log("Tips for the Bills..."+tips);
console.log("Totals for the Bills..."+Total);
console.log("Average of Total Bills..."+calcAvg(Total));