import PropTypes from 'prop-types'
import { StatisticList } from "./StatisticList";
import css from "./Statistics.module.css";

export const Statistics = (props) => {
    return (
        <section className={css.statistics}>
            {props.title &&
                <h2 className={css.title}>{props.title}
                </h2>}
            <StatisticList stats={props.stats}
            />
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
}

