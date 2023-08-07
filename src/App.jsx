import React, { useRef } from 'react'
import Header from './components/Header/Header'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import { CSSTransition } from 'react-transition-group';
import Loading from './components/Loading/Loading';
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
          loading ? <Loading /> : <CurrentWeather nodeRef={nodeRef} weather={data}/>
        }

      </CSSTransition>

      </div>
    </div>
  )
}

export default App