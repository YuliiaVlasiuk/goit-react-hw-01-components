import PropTypes from 'prop-types';

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

FriendItem.propTypes={
  item:PropTypes.shape({
      name:PropTypes.string,
      avatar:PropTypes.string,
      isOnline:PropTypes.bool}).isRequired
  
  }