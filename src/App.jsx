import React, { useRef, useState } from 'react'
import Header from './components/Header/Header'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import { useLocation } from './hooks/useLocation';
import { getCurrentWeather } from './api/weather';
import { useQuery } from 'react-query';
import { CSSTransition } from 'react-transition-group';
import Loading from './components/Loading/Loading';

const App = () => {
  const nodeRef = useRef()
  const { lat, long } = useLocation()
  const [loading, setLoading] = useState(true)
  const { data } = useQuery({
    queryKey: ['weather'],
    queryFn: () => getCurrentWeather(lat, long),
    enabled: !!long,
    onSuccess: () => {
      setTimeout(() => {
        setLoading(false)
        
      }, 1000);
    }
  })

  return (
    <div>
      <Header />
      <div className="container">

      {
        loading && <Loading />
      }

      <CSSTransition nodeRef={nodeRef} mountOnEnter unmountOnExit in={!loading} timeout={5000} classNames='current'>

        {
          loading ? <Loading /> : <CurrentWeather nodeRef={nodeRef} weather={data}/>
        }
        </CSSTransition>

      </div>
    </div>
  )
}

export default App