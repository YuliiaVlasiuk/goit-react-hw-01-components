export const Profile=({item:{username,avatar,tag,location,stats}})=>{
    
 return (
<div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.view}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>

 )

}



// import { BsFillAlarmFill } from "react-icons/bs";
// import PropTypes from 'prop-types';
// import { Image } from "./Recipe.stiled";

// export const Recipe=({item:{username,avatar,tag}})=>{

// return <div>
//   <Image src={avatar} alt={username} width="240p"/>
//   <h2>{username}</h2>
// <BsFillAlarmFill/>

//  <div>
//     <span>{tag} tag</span>
//  </div>

// </div>


// }


// Recipe.propTypes={
// item:PropTypes.shape({
//     username:PropTypes.string,
//     avatar:PropTypes.string,
//     tag:PropTypes.string}).isRequired

// }

// import PropTypes from 'prop-types';