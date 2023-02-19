import { SectionProfile, Image, Stats, StatsItem } from './Profile.styled';

export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <SectionProfile className="profile">
      <div className="description">
        <Image src={avatar} alt="User avatar" className="avatar" />
        <p
          className="name"
          style={{
            fontSize: '20px',
          }}
        >
          {username}
        </p>
        <p
          className="tag"
          style={{
            color: 'gray',
          }}
        >
          {tag}
        </p>
        <p
          className="location"
          style={{
            color: 'grey',
          }}
        >
          {location}
        </p>
      </div>
      <Stats className="stats">
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </StatsItem>
      </Stats>
    </SectionProfile>
  );
};
