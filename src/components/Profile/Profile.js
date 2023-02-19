export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <div
      className="profile"
      style={{
        width: '400px',
        border: '1px solid grey',
        borderRadius: '4px',
        padding: '10px',
      }}
    >
      <div className="description">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
          style={{
            backgroundSize: 'cover',
            width: '200px',
          }}
        />
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

      <ul
        className="stats"
        style={{
          display: 'flex',
          gap: '5px',
          justifyContent: 'space-between',
          padding: '10px',
        }}
      >
        <li
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
