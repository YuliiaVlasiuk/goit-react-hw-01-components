import PropTypes from 'prop-types';

import { Td } from './Transaction.styled';

export const Transaction = ({ item }) => {
  return (
    <tr>
      <Td> {item.type}</Td>
      <Td> {item.amount}</Td>
      <Td> {item.currency}</Td>
    </tr>
  );
};


Transaction.propTypes={
  item:PropTypes.shape(
    {type:PropTypes.string.isRequired,
     amount:PropTypes.string.isRequired,
     currency:PropTypes.string.isRequired}).isRequired}
    
    
    // item:PropTypes.arrayOf(PropTypes.shape(
    //   {type:PropTypes.string.isRequired,
    //    amount:PropTypes.string.isRequired,
    //   currency:PropTypes.string.isRequired}))}