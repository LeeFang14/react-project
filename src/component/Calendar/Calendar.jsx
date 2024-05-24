import PropTypes from 'prop-types';
import styles from './Calendar.module.scss';

export default function Calendar({ fakeTodayData }) {
  const {
    component_container,
    calendar_context,
    week,
    date_context,
    date,
    schedule_btn,
    schedule_list,
    divider,
    schedule_item,
  } = styles;

  return (
    <div className={component_container}>
      <div className={calendar_context}>
        <div className={week}>{fakeTodayData.week}</div>
        <div className={date_context}>
          <button className={schedule_btn} type='button'>
            <i className='fa-solid fa-plus fa-fw'></i>
          </button>
          <div className={date}>
            <span>{fakeTodayData.lunarCalendar}</span>
            <span>{`${fakeTodayData.month}/${fakeTodayData.day}`}</span>
          </div>
        </div>
      </div>
      <div className={schedule_list}>
        <div className={divider}></div>
        {fakeTodayData.schedule.map((schedule) => (
          <div className={schedule_item} key={schedule.id}>
            <div className={date}>
              <span>{`${fakeTodayData.year}/${fakeTodayData.month}/${fakeTodayData.day}`}</span>
              <span>{schedule.scheduleTime}</span>
            </div>
            <p>{schedule.scheduleText}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Calendar.propTypes = {
  fakeTodayData: PropTypes.shape({
    year: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    week: PropTypes.string.isRequired,
    lunarCalendar: PropTypes.string.isRequired,
    schedule: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        scheduleTime: PropTypes.string.isRequired,
        scheduleText: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
