import PropTypes from 'prop-types'
import { List, ListItem, Avatar, Container, Label, Name } from "./Profile.styled";

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
// export const Profile = ({ username, tag, location, avatar, stats } ) => {
  return (
  <Container className="profile">
    <div className="description">
     <Avatar
      src={avatar}
      alt={username}
      className="avatar"
    />
     <Name className="name">{username}</Name>
     <p className="tag">{tag}</p>
     <p className="location">{location}</p>
   </div>

  <List>
    <ListItem>
      <Label className="label">Followers</Label>
        <span className="quantity">{stats.followers}</span>
    </ListItem>
    <ListItem>
      <Label className="label">Views</Label>
      <span className="quantity">{stats.views}</span>
    </ListItem>
    <ListItem>
      <Label className="label">Likes</Label>
      <span className="quantity">{stats.likes}</span>
    </ListItem>
  </List>
</Container>)
}

// propTypes for {destructured props}

// Profile.propTypes = {
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     stats: PropTypes.shape({
//         followers: PropTypes.number,
//         views: PropTypes.number,
//         likes: PropTypes.number,
//     }).isRequired,
// }

// propTypes for object user with {destructured props}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }).isRequired,
  }).isRequired
}