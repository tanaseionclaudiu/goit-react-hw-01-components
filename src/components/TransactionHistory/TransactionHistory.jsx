import styles from './TransactionsHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
<table className={styles['transaction-history']}>
  <thead>
    <tr cellpadding="10" cellspacing="10">
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
{   items.map( (transaction) => {
        return (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        )
    })
}
</tbody>
</table>
  );
};
  
