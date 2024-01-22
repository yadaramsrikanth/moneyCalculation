import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.setState
    const typeOptions = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: optionId,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
    }))
  }

  onChangeName = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  render() {
    const {transactionsList} = this.state
    return (
      <div className="app-container">
        <div className="header-container">
          <h1 className="heading">Hi,Richard</h1>
          <p className="header-content">
            Welcome back to your
            <span className="money-manager-text"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails />
        <div className="transaction-history-container">
          <form className="transaction-form" onSubmit={this.onAddTransaction}>
            <h1 className="transaction-heading">Add Transaction</h1>
            <label htmlFor="title" className="label-element">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              className="input-element"
              placeholder="TITLE"
              onChange={this.onChangeName}
            />
            <label htmlFor="amount" className="label-element">
              AMOUNT
            </label>
            <input
              type="text"
              id="amount"
              className="input-element"
              placeholder="AMOUNT"
              onChange={this.onChangeAmount}
            />
            <label className="label-element" htmlFor="select">
              TYPE
            </label>
            <select
              id="select"
              className="input-element"
              onChange={this.onChangeOptionId}
            >
              {transactionTypeOptions.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button type="submit">Add</button>
          </form>
          <div className="history-transactions">
            <h1 className="transaction-heading">History</h1>
            <div className="transactions-table-container">
              <ul className="transaction-table">
                <li className="table-header">
                  <p className="table-header-cell">Title</p>
                  <p className="table-header-cell">Amount</p>
                  <p className="table-header-cell">Type</p>
                </li>
                {transactionsList.map(eachTransactionItem => (
                  <TransactionItem eachTransactionItem={eachTransactionItem} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
