// src/App.js
import React, { useState } from 'react';

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = () => {
    const loanAmountWithDeposit = loanAmount - deposit;
    const monthlyInterestRate = (interestRate / 100) / 12;
    const months = loanTerm * 12;
    const factor = Math.pow(1 + monthlyInterestRate, months);
    const monthlyPayment = (loanAmountWithDeposit * monthlyInterestRate * factor) / (factor - 1);
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Mortgage Calculator</h1>
      <div className="flex">
        <div className="w-1/4 mr-4">
          <label htmlFor="loanAmount">Loan Amount ($):</label>
          <input
            type="number"
            id="loanAmount"
            className="w-full p-2 border"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>
        <div className="w-1/4 mr-4">
          <label htmlFor="interestRate">Interest Rate (%):</label>
          <input
            type="number"
            id="interestRate"
            className="w-full p-2 border"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
        <div className="w-1/4 mr-4">
          <label htmlFor="loanTerm">Loan Term (years):</label>
          <input
            type="number"
            id="loanTerm"
            className="w-full p-2 border"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </div>
        <div className="w-1/4">
          <label htmlFor="deposit">Deposit ($):</label>
          <input
            type="number"
            id="deposit"
            className="w-full p-2 border"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
          />
        </div>
      </div>
      <button
        className="mt-4 bg-blue-500 text-white p-2 rounded"
        onClick={calculateMonthlyPayment}
      >
        Calculate
      </button>
      {monthlyPayment > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Monthly Payment:</h2>
          <p>${monthlyPayment}</p>
          <p>Total Payment: ${(monthlyPayment * loanTerm * 12).toFixed(2)}</p>
          <p>Total Interest: ${(monthlyPayment * loanTerm * 12 - loanAmount).toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MortgageCalculator />
    </div>
  );
}

export default App;
