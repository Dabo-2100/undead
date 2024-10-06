import React, { useRef, useState } from 'react'

export default function App() {
  const amountInput = useRef();
  const [balance, setBalance] = useState(0);
  const [trasnactions, setTransactions] = useState([
  ]);
  const deposit = () => {
    let amount = +amountInput.current.value;
    setTransactions([...trasnactions, {
      before: balance,
      type: "Deposit",
      amount: amount,
      after: balance + amount
    }])
    setBalance(balance + amount)
    amountInput.current.value = ""
  }
  const withdraw = () => {
    let amount = +amountInput.current.value;
    if (amount <= balance) {
      setTransactions([...trasnactions, {
        before: balance,
        type: "Withdraw",
        amount: amount,
        after: balance - amount
      }])
      setBalance(balance - amount)

      amountInput.current.value = ""
    }
    // (amount >= balance) && (setTransactions([...trasnactions, {
    //   before: balance,
    //   type: "Withdraw",
    //   amount: amount,
    //   after: balance - amount
    // }]),
    // setBalance(balance - amount))
  }
  return (
    <div className='App col-12 d-flex flex-wrap'>
      <h1 className='col-12 bg-success p-3'>
        balance is : {balance}
      </h1>
      <div className='d-flex bg-info col-12 p-3'>
        <input ref={amountInput} className='form-control' placeholder='Amount' />
        <button className='btn btn-success' onClick={deposit}>Deposit</button>
        <button className='btn btn-danger' onClick={withdraw}>Withdraw</button>
      </div>
      <table className='table table-dark table-bordered'>
        <thead>
          <tr>
            <th>-</th>
            <th>Before Balance</th>
            <th>Transaction Type</th>
            <th>Transaction Amount</th>
            <th>After Balance</th>
          </tr>
        </thead>
        <tbody>
          {
            trasnactions.map((el, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>{el.before}</th>
                  <th><p className={`btn btn-${el.type == "Deposit" ? "success" : "danger"}`}>{el.type}</p></th>
                  <th>{el.type == "Deposit" ? "+" : "-"}{el.amount}</th>
                  <th>{el.after}</th>
                  <th>
                    {
                      (trasnactions.length -1 == index) && (
                        <button>
                          Del
                        </button>
                      )
                      
                    }
                  </th>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
