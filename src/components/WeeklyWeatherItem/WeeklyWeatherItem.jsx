import React from 'react'
import styles from './WeeklyWeatherItem.module.css'

const WeeklyWeatherItem = ({ day }) => {
  return (
    <div className={styles.wrapper}>
        <p className={styles.date}>{day.date}</p>
        <img className={styles.icon} src={day.day.condition.icon} alt="" />
        <p className={styles.temp}>{Math.round(day.day.avgtemp_c)}°С</p>
    </div>
  )
}

export default WeeklyWeatherItem