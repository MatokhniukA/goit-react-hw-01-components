import PropTypes from 'prop-types'
import css from "./Statistics.module.css";

export const StatisticItem = ({label, percentage}) => {
    return (
        <div className={css.statItem}>
            <span className="label">{label} </span>
            <span className="percentage">{percentage}</span>
        </div>  
)
}

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}