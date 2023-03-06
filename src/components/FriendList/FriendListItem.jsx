import PropTypes from 'prop-types'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
            <span className="status">{isOnline}</span>
         <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </div>
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}