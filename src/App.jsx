import React, { useRef } from 'react'
import Header from './components/Header/Header'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useWeather } from './hooks/useWeather';
import { Puff, useLoading } from '@agney/react-loading';

const App = () => {
  const nodeRef = useRef()
  const {loading, data} = useWeather()
  const {indicatorEl} = useLoading({
    loading,
    indicator: <Puff width="100" />
  })
  return (
    <div>
      <Header />
      <img src="/icons/blob1.svg" className='bg-icon' width={100} alt="" />
      <img src="/icons/blob1.svg" className='bg-icon' width={100} alt="" />
      <img src="/icons/blob.svg" className='bg-icon' width={600} alt="" />
      <img src="/icons/blob.svg" className='bg-icon' width={600} alt="" />
      <img src="/icons/blob2.svg" className='bg-icon' width={600} alt="" />
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
          <CurrentWeather nodeRef={nodeRef} weather={data}/>
        }

      </CSSTransition>

      </div>
    </div>
  )
}

export default App