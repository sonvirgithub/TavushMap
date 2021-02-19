import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './YandexMap.css'
import { Route, useHistory } from 'react-router-dom';

const YandexMap = () =>  {

    const mapData = {
        center: [55.751574, 37.573856],
        zoom: 5,
      };
      
      const coordinates = [
        [55.684758, 37.738521],
        [57.684758, 39.738521]
      ];

      const onMapClick = () => {
           console.log("click");
      }

      const history = useHistory()

      async function log_out() {


        const headers = {}
        headers["Content-Type"] = "application/json"
        const res = await fetch('/logout', {
             method:
                  "GET",
             headers
        })

        if (res.status == 200) {
           
             history.push("/login")
             // console.log(await res.json());

        } else {
             console.log("data chka")

        }
       // window.location.reload()
   }
      
      return (
        <div className='btn_logout'> 
        <div>
        <YMaps >
          <Map onClick={onMapClick} defaultState={mapData}>
            {coordinates.map(coordinate => 
            <Placemark geometry={coordinate}   
            properties={{
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
              }}
             />)}
          </Map>
        </YMaps>
        </div>
        <div>
        <button onClick={log_out}>Logout</button>
        </div>
        </div>
      );
}

export default YandexMap;

