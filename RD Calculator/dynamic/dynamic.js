function calculateRD() {
    const principalAmount = parseFloat(document.getElementById("principalAmount").value);
    const monthlyContribution = parseFloat(document.getElementById("monthlyContribution").value);
    const annualInterestRate = parseFloat(document.getElementById("annualInterestRate").value);
    const numberOfMonths = parseInt(document.getElementById("numberOfMonths").value);

    const monthlyInterestRate = (annualInterestRate / 12) / 100;

    // Calculate the maturity amount
    let maturityAmount = principalAmount; // Set initial value to the principal
    for (let i = 1; i <= numberOfMonths; i++) {
        maturityAmount += maturityAmount * monthlyInterestRate; // Apply interest
        maturityAmount += monthlyContribution; // Add monthly contribution
    }

    document.getElementsByClassName("out")[0].innerHTML = `${maturityAmount.toFixed(2)} INR`;
}
