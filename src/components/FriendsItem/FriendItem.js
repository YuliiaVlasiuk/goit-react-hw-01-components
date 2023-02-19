import { ColorIsActive, Image, FriendItemSection } from './FriendItem.styled';

export const FriendItem = ({ item: { name, avatar, isOnline } }) => {
  return (
    <FriendItemSection>
      <ColorIsActive isActive={isOnline} />
      <Image
        src={avatar}
        alt={name}
        />
      <p>{name}</p>
    </FriendItemSection>
  );
};
