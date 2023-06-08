import styles from './KelpMap.module.css';
import { Wrapper } from '@googlemaps/react-wrapper';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const KelpMap = () => {

    const API_KEY = process.env.GOOGLEMAPS_API_KEY

    const containerStyle = {
        width: '455px',
        height: '500px'
      };
      
      const center = {
        lat: 40.7831,
        lng: -73.9712
      };

    return (
        <>
            <LoadScript googleMapsApiKey={API_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={11}
                >
                </GoogleMap>
            </LoadScript>
        </>
    );
};

export default KelpMap;