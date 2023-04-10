import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.css';

import Map from './components/Map';
import Background from './components/Background';
import InfoBox from './components/InfoBox';
import Loading from './components/Loading';

const App = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ info, setInfo ] = useState({});
  const [ ipAddress, setIpAddress ] = useState('');
  
  useEffect(() => {
    setIsLoading(true);
    getClientIP();
    getGeoAPI();
    setIsLoading(false);
  }, []);

  const getClientIP = async () => {
    await axios.get('https://api64.ipify.org?format=json')
      .then(res => {
        setIpAddress(res.data.ip);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const getGeoAPI = async () => {
    await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_84ua8QcoqvHGG4hfXYYgKHttxhd6a&ipAddress=${ipAddress}`)
      .then(res => {
        const data = res.data;
        const newInfo = {
          ip: data.ip,
          isp: data.isp,
          timezone: data.location.timezone,
          location: `${data.location.city}, ${data.location.region} ${data.location.postalCode}`,
          lat: data.location.lat,
          lng: data.location.lng
        }
        setInfo(newInfo);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleChange = (e) => {
    setIpAddress(e.target.value);
  }

  const handleSearch = () => {
    setIsLoading(true);
    getGeoAPI();
    setIsLoading(false);
  }

  return (
    <div>
      {
        isLoading && <Loading />
      }
      <Background 
        value={ipAddress}
        onChange={handleChange}
        onSearchClick={handleSearch}
      />
      <InfoBox 
        geoInfo={info}
      />
      <Map 
        latitude={info.lat}
        longitude={info.lng}
      />
    </div>
  );
}

export default App;
