export const Transaction = ({ item }) => {
  return (
    <tr>
      <td
        style={{
          border: '1px solid #2a2a2a',
          width: '150px',
        }}
      >
        {' '}
        {item.type}
      </td>
      <td
        style={{
          border: '1px solid #2a2a2a',
          width: '150px',
        }}
      >
        {' '}
        {item.amount}
      </td>
      <td
        style={{
          border: '1px solid #2a2a2a',
          width: '150px',
        }}
      >
        {' '}
        {item.currency}
      </td>
    </tr>
  );
};
