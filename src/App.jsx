import React, { useState } from 'react'
import Header from './components/Header/Header'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import { useLocation } from './hooks/useLocation';
import { getCurrentWeather } from './api/weather';
import { useQuery } from 'react-query';
import { getImage } from './utils/getImage';

const App = () => {
  const { lat, long } = useLocation()
  const [loading, setLoading] = useState(true)
  const { data } = useQuery({
    queryKey: ['weather'],
    queryFn: () => getCurrentWeather(lat, long),
    enabled: !!long,
    onSuccess: () => {
      setLoading(false)
    }
  })

  return (
    <div>
      <Header />
      <div className="container">
        {
          loading ? 'loading...' : <CurrentWeather weather={data} />
        }
      </div>
    </div>
  )
}

export default App