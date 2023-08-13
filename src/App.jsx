import React, { useRef } from 'react'
import Header from './components/Header/Header'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import { CSSTransition } from 'react-transition-group';
import { useWeather } from './hooks/useWeather';
import WeeklyWeather from './components/WeeklyWeather/WeeklyWeather';
import { useWeeklyWeather } from './hooks/useWeeklyWeather';
import { useLoadingEl } from './hooks/useLoadingEl';

const App = () => {
  const nodeRef = useRef()
  const {loading, data: currentData} = useWeather()
  const {data, isLoading, isWeekActive, setIsWeekActive } = useWeeklyWeather()
  const {indicatorEl} = useLoadingEl(loading);

  return (
    <div>
      <Header />
      <img src="/icons/blob1.svg" className='bg-icon' alt="" />
      <img src="/icons/blob1.svg" className='bg-icon' alt="" />
      <img src="/icons/blob.svg" className='bg-icon' alt="" />
      <img src="/icons/blob.svg" className='bg-icon' alt="" />
      <img src="/icons/blob2.svg" className='bg-icon' alt="" />
      <div className="container">

      {
        loading &&
        <div className="loading-box">{indicatorEl}</div>
      }

      <CSSTransition
        nodeRef={nodeRef}
        mountOnEnter
        unmountOnExit
        in={!loading}
        timeout={5000}
        classNames='current'
      >

        {
          <div ref={nodeRef} className="">
            <CurrentWeather weather={currentData}/>
            <WeeklyWeather isLoading={isLoading} data={data} isWeekActive={isWeekActive} setIsWeekActive={setIsWeekActive} />
          </div>
        }

      </CSSTransition>


      </div>
    </div>
  )
}

export default App