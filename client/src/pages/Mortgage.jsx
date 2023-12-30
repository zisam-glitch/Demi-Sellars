import React, { useState } from "react";

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = () => {
    const loanAmountWithDeposit = loanAmount - deposit;
    const monthlyInterestRate = interestRate / 100 / 12;
    const months = loanTerm * 12;
    const factor = Math.pow(1 + monthlyInterestRate, months);
    const monthlyPayment =
      (loanAmountWithDeposit * monthlyInterestRate * factor) / (factor - 1);
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div className='container max-w-screen'>
      <h1 className='lg:text-4xl text-3xl font-semibold text-darkblue leading-snug text-center py-14'>
        Mortgage Calculator By Demi Sellers
      </h1>
      <div className='px-14 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-8'>
        <div className='grid grid-cols-1 gap-4'>
          <div className='   '>
            <label htmlFor='loanAmount'>Loan Amount ($):</label>
            <input
              type='number'
              id='loanAmount'
              className='outline outline-1 rounded p-3 w-full mt-2'
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>
          <div className='   '>
            <label htmlFor='interestRate'>Interest Rate (%):</label>
            <input
              type='number'
              id='interestRate'
              className=' outline outline-1 rounded p-3 w-full mt-2'
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
          <div className='   '>
            <label htmlFor='loanTerm'>Loan Term (years):</label>
            <input
              type='number'
              id='loanTerm'
              className=' outline outline-1 rounded p-3 w-full mt-2'
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
            />
          </div>
          <div className=' '>
            <label htmlFor='deposit'>Deposit ($):</label>
            <input
              type='number'
              id='deposit'
              className=' outline outline-1 rounded p-3 w-full mt-2'
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
            />
          </div>
          <button
            className=' bg-lightblue text-white p-3 rounded'
            onClick={calculateMonthlyPayment}
          >
            Calculate
          </button>
        </div>

        <div className='mt-4 flex flex-col items-center justify-center gap-2 bg-purple p-10 rounded-lg '>
          <div className='flex gap-2'>
            <h2 className='text-2xl text-center font-semibold my-2'>
              Monthly Payment:
            </h2>

            <p className='text-2xl text-darkblue text-center font-bold my-2'>
              £{monthlyPayment}
            </p>
          </div>
          <div className='flex gap-2'>
            <h2 className='text-2xl text-center font-semibold my-2'>
              Total Payment:
            </h2>

            <p className='text-2xl text-darkblue text-center font-bold my-2'>
              £{(monthlyPayment * loanTerm * 12).toFixed(2)}
            </p>
          </div>
          <div className='flex gap-2'>
            <h2 className='text-2xl text-center font-semibold my-2'>
              {" "}
              Total Interest:
            </h2>

            <p className='text-2xl text-darkblue text-center font-bold my-2'>
              £{(monthlyPayment * loanTerm * 12 - loanAmount).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <MortgageCalculator />
    </div>
  );
}

export default App;
