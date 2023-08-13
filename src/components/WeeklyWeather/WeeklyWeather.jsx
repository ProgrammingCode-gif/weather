import { useLoadingEl } from '../../hooks/useLoadingEl'
import styles from './WeeklyWeather.module.css'

const WeeklyWeather = ({isWeekActive, setIsWeekActive, data, isLoading}) => {
    const { indicatorEl } = useLoadingEl(isLoading);

    return (
        <div className={styles.wrapper}>
            <button onClick={() => setIsWeekActive(!isWeekActive)} className={styles.btn}>
                {isWeekActive? 'Скрыть' : 'Прогноз на неделю'}
            </button>
            {
                isLoading && 'loading'
            }
        </div>
    )
}

export default WeeklyWeather