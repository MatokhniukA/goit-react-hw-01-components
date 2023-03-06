import PropTypes from 'prop-types'
import css from './FriendList.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={css.friendItem}>
            <span className={isOnline
                ? css.onLine
                : css.offLine}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.friendName}>{name}</p>
        </div>
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}