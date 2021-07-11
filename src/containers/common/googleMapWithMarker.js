import React from 'react';
import {GoogleMap, Marker, LoadScript, InfoBox} from '@react-google-maps/api';
import {GOOGLE_MAP_API_KEY} from '../../constants';

/*
* Props shape
* {
* containerClassName: String,
* width: String, ('100px')
* height: String,
* zoom: int,
* mapCenter: {lat: float, lng: float }, (lat: 38.72, lng: -38.72)
* markerData: [{lat: float, lng: float }],
* onMarkerClick: func,
* showInfobox: bool,
* infoboxPosition: {lat: float, lng: float }
*
* Children used for displaying infobox
* }
* */

const GoogleMapWithMarker = (props) => {
    const containerStyle = {
        width: props.width,
        height: props.height
    };

    const center = {
        lat: 33.772,
        lng: -117.214
    };


    return (
        // Important! Always set the container height explicitly
        <div style={{height: '100vh', width: '100%'}}>
            <LoadScript
                googleMapsApiKey={GOOGLE_MAP_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={props.mapCenter}
                    zoom={props.zoom}
                    mapContainerClassName={props.containerClassName}
                >
                    {props.showInfobox && <InfoBox
                        position={props.infoboxPosition}
                    >
                        {props.children}
                    </InfoBox>}
                    {
                        props.markerData.map(marker => <Marker
                            onClick={() => props.onMarkerClick(marker.lat, marker.lng)}
                            position={marker}
                        />)
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default GoogleMapWithMarker;
