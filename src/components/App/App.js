import './App.css';
import '../../assets/fonts/Fonts.css';
import { Course } from '../Navigation/course/course';
import { Header } from '../Header/Header';
import { Banner } from '../Banner/Banner.js';
import { Navigation } from '../Navigation/Navigation.js';
import { Routes, json, useLocation } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Basket } from '../Header/Basket/Basket';
import { Footer } from '../Footer/Footer';
import { Delivery } from '../Footer/FooterNav/Delivery/Delivery';
import { About } from '../Footer/FooterNav/About/About';
import { Return } from '../Footer/FooterNav/Return/Return';
import { Sales } from '../Footer/FooterNav/Sales/Sales';
import { Trash } from '../Header/Basket/Trash/Trash';
import { useEffect, useState } from 'react';
import { Order } from '../Header/Basket/Trash/Order/Order';
import { Account } from '../Header/Auth/Account/Account';
import { ACCOUNT_ROUTE } from '../../common/Routes/Routes';
import { Preloader } from '../../common/Preloader/Preloader';

function App() {
  const { state } = useLocation();
  const [prediction, setPrediction] = useState({});
  const [isShow, setIsShow] = useState(false);
  const [isPreloader, setIsPreloader] = useState(false);

  useEffect(() => {
    setIsPreloader(true);

    setTimeout(() => {
      fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
      )
        .then((response) => response.json())
        .then((json) => {
          const weather = {
            city: 'Minsk',
            time: json.current_weather.time,
            temperature: json.current_weather.temperature,
            degree: json.hourly_units.temperature_2m,
          };
          setPrediction(weather);
        })
        .finally(() => setIsPreloader(false));
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isPreloader ? (
        <Preloader />
      ) : (
        <>
          <Header isShow={isShow} setIsShow={setIsShow} />
          {!state && <Banner />}
          <Navigation />
          <Routes>
            <Route path="/" element={<Course />} />
            <Route path="/:url" element={<Course />} />
            <Route path="/cart" element={<Trash />} />
            <Route path="/order" element={<Order />} />
            <Route path="/about" element={<About />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/return-product" element={<Return />} />
            <Route path="/sales" element={<Sales />} />
            <Route path={ACCOUNT_ROUTE} element={<Account />} />
          </Routes>
          <Footer
            prediction={prediction}
            isShow={isShow}
            setIsShow={setIsShow}
          />
        </>
      )}
    </div>
  );
}

export default App;
