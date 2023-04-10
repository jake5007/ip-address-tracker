import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const markerIcon = new L.Icon({
    iconUrl: '/assets/icon-location.svg',
    iconSize: null,
    iconAnchor: null,
    popupAnchor: [0, -10]
});

const Map = ({ latitude = 51.505, longitude = -0.09 }) => {
    return (
        <MapContainer 
            key={JSON.stringify([latitude, longitude])}
            className='map'
            center={[latitude, longitude]} 
            zoom={15} 
            maxZoom={18}
            minZoom={3}
            zoomControl={false}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                icon={ markerIcon }
                position={[latitude, longitude]}>
                <Popup>
                {latitude}, <br /> {longitude}
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map;