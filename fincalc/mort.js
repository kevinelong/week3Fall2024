/*
The division of principal and interest in mortgage payments is determined by the loan's amortization schedule, which outlines how each payment is applied over the life of the loan. Here’s a breakdown of how it works:

1. Understanding the Components

    Principal: This is the original amount of the loan that you borrow.
    Interest: This is the cost of borrowing the principal, expressed as a percentage (the interest rate).

2. Monthly Payment Calculation

The monthly mortgage payment can be calculated using the formula:

M=Pr(1+r)n(1+r)n−1

Where:
- M = monthly payment
- P = principal loan amount
- r = monthly interest rate (annual rate divided by 12)
- n = number of payments (loan term in months)
*/
function calculateMonthlyPayment(principalLoanAmountInK, yearlyInterestRate, termInYears) {

    const monthlyInterestRate = yearlyInterestRate / 12;
    const numberOfPayments = termInYears * 12;

    const P = principalLoanAmountInK * 1000;
    const r = monthlyInterestRate / 100; // (annual rate divided by 12)
    const n = numberOfPayments; //(loan term in months)

    const M = P * r * ((1 + r) ** n) / (((1 + r) ** n) - 1);
    const monthlyPayment = M;
    return monthlyPayment
}

console.log(calculateMonthlyPayment(200, 4, 30))
/*
3. Amortization Process

    Initial Payments: At the beginning of the loan term, a larger portion of your monthly payment goes toward paying interest. This is because interest is calculated on the remaining balance of the loan, which is highest at the start.
    Later Payments: As you continue to make payments, the principal balance decreases, which means the interest portion of each payment also decreases. Consequently, more of your payment goes toward paying down the principal.

4. Example Calculation

Let’s say you have a $200,000 mortgage at a 4% annual interest rate for 30 years:

    Monthly interest rate r=0.0412=0.003333

Total number of payments n=30×12=360

Using the formula, the monthly payment M

would be approximately $954.83.

    First Payment Breakdown:
        Interest for the first month: 200,000×0.003333≈666.67

Principal for the first month: 954.83−666.67≈288.16

Second Payment Breakdown:

    New principal balance after first payment: 200,000−288.16≈199,711.84

Interest for the second month: 199,711.84×0.003333≈665.71
Principal for the second month: 954.83−665.71≈289.12

5. Amortization Schedule

    This process continues for the entire term of the loan, with the interest portion decreasing and the principal portion increasing. An amortization schedule can be created to show the breakdown for every payment over the life of the loan.

Summary

In summary, the division of principal and interest in mortgage payments is calculated using the loan's amortization schedule, with the interest portion being higher at the beginning and gradually decreasing as the principal is paid down. This results in a larger portion of each payment going toward the principal over time.
*/