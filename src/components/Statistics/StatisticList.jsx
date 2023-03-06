import PropTypes from 'prop-types'
import { StatisticItem } from './StatisticItem'
import css from "./Statistics.module.css";

export const StatisticList = ({stats}) => {
    return (
        <ul className={css.statList}>
            {stats.map(stat => (
                <li key={stat.id} >
                    <StatisticItem
                        label={stat.label}
                        percentage={stat.percentage}
                    />
                </li>
            ))}
        </ul>
    )
}

StatisticList.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired
}