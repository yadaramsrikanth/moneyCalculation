import './index.css'

const MoneyDetails = () => {
  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-symbol"
        />
        <div>
          <p className="money-text">Your Balance</p>
          <p className="money-details">Rs 0</p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-symbol"
        />
        <div>
          <p className="money-text">Your Income</p>
          <p className="money-details">Rs 0</p>
        </div>
      </div>

      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-symbol"
        />
        <div>
          <p className="money-text">Your Expenses</p>
          <p className="money-details">Rs 0</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
