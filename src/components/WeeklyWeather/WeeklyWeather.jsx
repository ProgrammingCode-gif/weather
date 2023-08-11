import styles from './WeeklyWeather.module.css'

const WeeklyWeather = ({isWeekActive, setIsWeekActive}) => {

    return (
        <div className={styles.wrapper}>
            <button onClick={() => setIsWeekActive(!isWeekActive)} className={styles.btn}>
                {isWeekActive? 'Скрыть' : 'Прогноз на неделю'}
            </button>
        </div>
    )
}

export default WeeklyWeather