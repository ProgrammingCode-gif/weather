import { useLoadingEl } from '../../hooks/useLoadingEl'
import WeeklyWeatherItem from '../WeeklyWeatherItem/WeeklyWeatherItem';
import styles from './WeeklyWeather.module.css'
import { CSSTransition } from 'react-transition-group';

const WeeklyWeather = ({ isWeekActive, setIsWeekActive, data, isLoading }) => {
    const { indicatorEl } = useLoadingEl(isLoading);

    return (
        <div className={styles.wrapper}>
            <button onClick={() => setIsWeekActive(!isWeekActive)} className={styles.btn}>
                {isWeekActive ? 'Скрыть' : 'Прогноз на неделю'}
            </button>
            {
                isLoading && indicatorEl
            }
            {
                data && isWeekActive ?
                    <div className={styles.weekWrapper}>
                        {
                            data.forecast.forecastday.map(day => <WeeklyWeatherItem key={day.date_epoch} day={day.day}/>)
                        }
                    </div>
                    : ''
            }
        </div>
    )
}

export default WeeklyWeather