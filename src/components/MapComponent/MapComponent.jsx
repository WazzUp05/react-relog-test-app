import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';

// Данные
// import apps from '../../data/NeRelog_apps2000.json';
// import apps from '../../data/NeRelog_apps5000.json';
// import clients from '../../data/NeRelog_clients2000.json';
// import clients from '../../data/NeRelog_clients5000.json';

const PopupItem = ({ id, company, price, clients }) => {
    const companyName = clients.find(item => item.id === company)?.name || '';

    return (
        <div className="popup">
            <p className="id">
                <b>ID:</b> {id}
            </p>
            <p className="name">
                <b>Компания:</b> {companyName}
            </p>
            <p className="price">
                <b>Цена:</b> {price}тг.
            </p>
        </div>
    );
};

const MapComponent = ({ apps, clients }) => {
    const [map, setMap] = useState({ lat: 43.238949, long: 76.889709, zoom: 10 });

    let center = [map.lat, map.long];

    return (
        <div>
            <MapContainer zoom={map.zoom} center={center}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MarkerClusterGroup>
                    {apps.map(list => (
                        <Marker key={list.id} position={[list.coords.lat, list.coords.long]}>
                            <Popup>
                                <PopupItem clients={clients} id={list.id} company={list.client_id} price={list.price} />
                            </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
