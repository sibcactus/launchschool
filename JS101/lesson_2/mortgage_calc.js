const rl = require('readline-sync');

function calcMonthlyPayment(loanAmount, mInterestRate, loanMonths) {
  let mPayment;
  if (mInterestRate !== 0) {
    mPayment =
      loanAmount *
      (mInterestRate / (1 - Math.pow(1 + mInterestRate, (-loanMonths))));
  } else {
    mPayment = loanAmount / loanMonths;
  }
  return mPayment.toFixed(2);
}

function getUserInput(prompt, isCorrectInput) { //isCorrectInput() should return true if input is correct
  let input = Number(rl.prompt({prompt: prompt}));
  if (!isCorrectInput(input)) {
    console.log("Error: wrong input");
    return getUserInput(prompt, isCorrectInput);
  } else {
    return input;
  }
}

function calculate() {
  const loanAmount =
    getUserInput("Please, enter the loan amount with dot as a separator > ",
      input => (!Number.isNaN(input) && input >= 0)
    );

  const interestRateMonthly =
    getUserInput("Please, enter  the annual percentage rate with dot as a separator > ",
      input => (!Number.isNaN(input) && input >= 0)
    ) / 1200;

  const loanMonths = parseInt(
    getUserInput("Please, enter your loan term in full months > ",
      input => (!Number.isNaN(input) && input > 0 && Number.isInteger(input))
    ), 10);

  return calcMonthlyPayment(loanAmount, interestRateMonthly, loanMonths);
}

while (true) {
  console.log("Welcome to Mortgage Calculator!");
  console.log(`Your monthly payment is $${calculate()}`);
  let keyIn = rl.keyIn("Press C to exit or any other button to continue > ");
  if (keyIn.toLowerCase() === 'c') break;
}
