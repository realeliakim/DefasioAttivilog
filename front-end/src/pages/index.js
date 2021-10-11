import React, { useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import api from '../services/api';

import Historico from '../components/Modal/historico';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import '../styles/global.css';

function Main(){

  const [ showHistorico, setShowHistorico ] = useState(false);


  useEffect(() => {
      getMapa()
  }, []);


  async function getMapa(){
    const mapa = document.getElementById('map').id;
    
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      const position = [longitude, latitude];

      const mapboxToken = 'pk.eyJ1IjoicmVhbGVsaWFraW0iLCJhIjoiY2t1aGw2aTB0MmY3OTJ2bnplZGpwamduOSJ9.Cdkug1l28-8iLDGs70UczQ';

      mapboxgl.accessToken = mapboxToken;
        const map = new mapboxgl.Map({
          container: mapa,
          style: 'mapbox://styles/mapbox/streets-v9',
          zoom: 9,
          width: '100vw',
          center: position
      });

      const marker = new mapboxgl.Marker();
      marker.setLngLat(position)
            .addTo(map);

      map.addControl(new MapboxGeocoder({
        accessToken: mapboxToken,
        mapboxgl: mapboxgl
      }));

      const directions = new MapboxDirections({
        accessToken: mapboxToken,
        unit: 'metric',
        profile: 'mapbox/driving-traffic',
        controls: {
          profileSwitcher: false
        },
        placeholderOrigin: 'Origem',
        placeholderDestination: 'Parada',
      });
      map.addControl(directions, 'top-left');

      directions.on('route', function(el){

        var from = directions.getOrigin();
        var oriLat = from.geometry.coordinates[0];
        var oriLng = from.geometry.coordinates[1];

        const origem = oriLat+','+oriLng;
        
        var to = directions.getDestination();
        var desLat = to.geometry.coordinates[0];
        var desLng = to.geometry.coordinates[1];

        const destino = desLat+','+desLng;

        var sumario = document.getElementsByClassName('mapbox-directions-route-summary');
        sumario = sumario[0].innerText;
        var result = sumario.split(' ');
        var km = result[0];
        var tempo = result[1];
        api.post('historico', {
          origem: origem,
          destino: destino,
          km: km,
          tempo: tempo
        })
        .then(res => {
          console.log(res.data);
        })
      });

      map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      }));

    }, (err) => { 
      }, { timeout: 10000});
  }

  async function handleHistorico(){
    setShowHistorico(!showHistorico);
  }

  return (
    <div id="container">
      <div id="map">
        <div id="historico">
          <button onClick={handleHistorico}>Ver histórico</button>
        </div>
      </div>

      {showHistorico && (
        <Historico
          close={handleHistorico}
        />
      )}
    </div>  
  );
}

export default Main;