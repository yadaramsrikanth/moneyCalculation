import './index.css'

const TransactionItem = props => {
  const {eachTransactionItem} = props
  const {id, title, amount, type} = eachTransactionItem
  return (
    <li className="table-row">
      <p className="table-text">{title}</p>
      <p className="table-text">Rs {amount}</p>
      <p className="table-text">{type}</p>
    </li>
  )
}

export default TransactionItem
