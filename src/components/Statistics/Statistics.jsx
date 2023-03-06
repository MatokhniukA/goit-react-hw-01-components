import PropTypes from 'prop-types'
import { StatisticList } from "./StatisticList";

export const Statistics = (props) => {
    return (
        <section className="statistics">
            {props.title &&
                <h2 className="title">{props.title}
                </h2>}
            <StatisticList stats={props.stats}
            />
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
}

