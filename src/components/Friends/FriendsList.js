import { FriendItem } from "components/FriendsItem/FriendItem";
import { SectionFriendListUl, SectionFriendListLi } from "./FriendsList.styled";

export const FriendList = ({ items }) => {
  return (
    <SectionFriendListUl >
      {items.map(item => (
        <SectionFriendListLi
          key={item.id}
        >
          <FriendItem item={item} />
        </SectionFriendListLi>
      ))}
    </SectionFriendListUl >
  );
};
