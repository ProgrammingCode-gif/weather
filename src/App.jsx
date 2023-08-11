import React, { useRef, useState } from 'react'
import Header from './components/Header/Header'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import { CSSTransition } from 'react-transition-group';
import { useWeather } from './hooks/useWeather';
import { Puff, useLoading } from '@agney/react-loading';
import WeeklyWeather from './components/WeeklyWeather/WeeklyWeather';
import { useQuery } from 'react-query';
import { getWeeklyWeather } from './api/weather';

const App = () => {
  const nodeRef = useRef()
  const {loading, data: currentData} = useWeather()
  const [isWeekActive, setIsWeekActive] = useState(false)
  const { data, isLoading } = useQuery({
    queryKey: ['weeklyWeather'],
    queryFn: () => getWeeklyWeather(0, 0),
    enabled: !!isWeekActive,
    onSuccess: () => {
      console.log('week');
    }
})

  if (data) {
    console.log(data);
  }
  const {indicatorEl} = useLoading({
    loading,
    indicator: <Puff width="100" />
  })
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
            <WeeklyWeather isWeekActive={isWeekActive} setIsWeekActive={setIsWeekActive} />
          </div>
        }

      </CSSTransition>


      </div>
    </div>
  )
}

export default App