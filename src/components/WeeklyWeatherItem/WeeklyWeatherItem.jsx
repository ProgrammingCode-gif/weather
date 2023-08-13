import React from 'react'
import styles from './WeeklyWeatherItem.module.css'

const WeeklyWeatherItem = ({day}) => {
  return (
    <div className={styles.wrapper}>
        {day.avgtemp_c}
        <img src={day.condition.icon} alt="" />
    </div>
  )
}

export default WeeklyWeatherItem