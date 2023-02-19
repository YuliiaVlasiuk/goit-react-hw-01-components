import { Transaction } from 'components/Transaction/Transaction';

export const TransactionHistory = ({ items }) => {
  return (
    <table
      className="transaction-history"
      style={{
        borderCollapse: 'collapse',
      }}
    >
      <thead
        style={{
          color: 'white',
          backgroundColor: '#5BA6B7',
        }}
      >
        <tr>
          <th
            style={{
              border: '1px solid #2a2a2a',
              width: '150px',
            }}
          >
            Type
          </th>
          <th
            style={{
              border: '1px solid #2a2a2a',
              width: '150px',
            }}
          >
            Amount
          </th>
          <th
            style={{
              border: '1px solid #2a2a2a',
              width: '150px',
            }}
          >
            Currency
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <Transaction item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};
