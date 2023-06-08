import styles from './KelpMap.module.css';
import { Wrapper } from '@googlemaps/react-wrapper';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const KelpMap = () => {

    const containerStyle = {
        width: '500px',
        height: '800px'
      };
      
      const center = {
        lat: -3.745,
        lng: -38.523
      };

    return (
        <>
            <LoadScript googleMapsApiKey="KEY GOES HERE">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                </GoogleMap>
            </LoadScript>
        </>
    );
};

export default KelpMap;