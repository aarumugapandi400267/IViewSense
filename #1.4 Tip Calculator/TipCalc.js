const prompt = require('prompt-sync')({ sigint: true });

var Bill = parseInt(prompt("Actual Bill..."));

(Bill > 50 && Bill < 300) ? console.log("Ok") : console.log("Poda");

