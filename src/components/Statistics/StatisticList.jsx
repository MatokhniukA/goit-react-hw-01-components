import PropTypes from 'prop-types'
import { StatisticItem } from './StatisticItem'

export const StatisticList = ({stats}) => {
    return (
        <ul className='stat-list'>
            {stats.map(stat => (
                <li key={stat.id}>
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