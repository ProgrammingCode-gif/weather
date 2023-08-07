import styles from './CurrentWeather.module.css'
import { CiTempHigh } from 'react-icons/ci'
import { LiaWindSolid } from 'react-icons/lia'
import { GiBinoculars } from 'react-icons/gi'
import { TiWeatherWindy } from 'react-icons/ti'
import { useMemo } from 'react'
import { getImage } from '../../utils/getImage'

const CurrentWeather = ({ weather }) => {
    const {current, location} = useMemo(() => {
        const current = weather.current
        const location = weather.location
        return {current, location}
    }, [weather])

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>{location.country}/{location.name}</h3>
            <div className={styles.content}>

                <div className={styles.contentLeft}>
                    <img className={styles.icon} src={getImage(current.condition.text)} alt="" />
                    <p>Сегодня: {Math.round(current.temp_c)}°С</p>
                </div>

                <div className={styles.contentRight}>
                    <div className={styles.contentRightItem}>
                        <LiaWindSolid size={40} color='rgb(94, 199, 169)' />
                        <p>Ветер: 4.2 км/ч</p>
                    </div>
                    <div className={styles.contentRightItem}>
                        <GiBinoculars size={40} color='rgb(85, 85, 224)' />
                        <p>Видимость: {Math.round(current.vis_km)} км</p>
                    </div>
                    <div className={styles.contentRightItem}>
                        <TiWeatherWindy size={40} color='rgb(228, 120, 57)' />
                        <p>Давление: {Math.round(current.pressure_mb)} мм</p>
                    </div>
                    <div className={styles.contentRightItem}>
                        <CiTempHigh size={40} color='rgb(224, 85, 85)' />
                        <p>Ощущается: {Math.round(current.feelslike_c)}°С</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather