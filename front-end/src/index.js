import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
<Map 
        center={[37.0902, -95.7129]}
        zoom={3} 
        scrollWheelZoom={true}
        whenCreated={map => setMap(map)}
        className="mapa">
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}//https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
            />
          
          
          </LayersControl.BaseLayer>
        </LayersControl>
      </Map>

      */