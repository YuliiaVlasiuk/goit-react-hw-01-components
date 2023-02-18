import { FriendItem } from "components/FriendsItem/FriendItem";

export const FriendList = ({ items }) => {
  return (
    <ul
      style={{
        width: '400px',
        marginTop: '20px',
        listStyle: 'none',
      }}
    >
      {items.map(item => (
        <li
          key={item.id}
          style={{
            display: 'flex',
            height: '80px',
            marginBottom: '10px',
          }}
        >
          <FriendItem item={item} />
        </li>
      ))}
    </ul>
  );
};
