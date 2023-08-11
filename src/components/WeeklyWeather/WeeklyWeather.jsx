import styles from './WeeklyWeather.module.css'

const WeeklyWeather = () => {

    return (
        <div className={styles.wrapper}>
            <button className={styles.btn}>Прогноз на неделю</button>
        </div>
    )
}

export default WeeklyWeather