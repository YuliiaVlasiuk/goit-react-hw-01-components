import PropTypes from 'prop-types';
import { Transaction } from 'components/Transaction/Transaction';

import { Th } from './TransactionHistory,styled';

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
          <Th> Type </Th>
          <Th> Amount </Th>
          <Th> Currency </Th>
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


TransactionHistory.propTypes={
  items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string.isRequired})).isRequired
  }