import { ColorIsActive } from './FriendItem.styled';

export const FriendItem = ({ item: { name, avatar, isOnline } }) => {
  return (
    <div
      style={{
        width: '400px',
        border: '2px solid grey',
        borderRadius: '4px',
        display: 'flex',
        boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.1) ',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <ColorIsActive isActive={isOnline} />
      <img
        src={avatar}
        alt={name}
        style={{
          width: '60px',
          height: '60px',
          border: '1px solid grey',
          borderRadius: '5px',
        }}
      />
      <p>{name}</p>
    </div>
  );
};
