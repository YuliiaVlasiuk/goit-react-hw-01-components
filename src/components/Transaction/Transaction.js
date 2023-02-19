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
