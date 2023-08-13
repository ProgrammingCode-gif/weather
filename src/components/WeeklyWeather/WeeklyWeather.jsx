import { useLoadingEl } from '../../hooks/useLoadingEl'
import WeeklyWeatherItem from '../WeeklyWeatherItem/WeeklyWeatherItem';
import styles from './WeeklyWeather.module.css'

const WeeklyWeather = ({ isWeekActive, setIsWeekActive, data, isLoading }) => {
    const { indicatorEl } = useLoadingEl(isLoading);

    return (
        <div className={styles.wrapper + ' ' + (isWeekActive ? styles.wrapperActive : '')}>
            <button 
                onClick={() => setIsWeekActive(!isWeekActive)} 
                className={styles.btn + ' ' + (isWeekActive ? 'active' : '')}
            >
                {isWeekActive ? 'Скрыть' : 'Прогноз на неделю'}
            </button>
            {
                isLoading && <div className={styles.loadingWrapper}>{indicatorEl}</div>
            }
            {
                data ?
                    <div className={styles.weekWrapper}>
                        {
                            data.forecast.forecastday.map(day => <WeeklyWeatherItem key={day.date_epoch} day={day}/>)
                        }
                    </div>
                    : ''
            }
        </div>
    )
}

export default WeeklyWeather