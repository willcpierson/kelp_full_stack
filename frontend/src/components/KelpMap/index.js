import styles from './KelpMap.module.css';
import { Wrapper } from '@googlemaps/react-wrapper';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const KelpMap = (props) => {

    const API_KEY = process.env.REACT_APP_GOOGLEMAPS_API_KEY;

    const containerStyle = {
        width: '455px',
        height: '500px'
      };
      
      const center = {
        lat: 40.7831,
        lng: -73.9712
      };

      const placeAllMarkers = () => {

      }

      console.log(props.business);

    return (
        <>
            <LoadScript googleMapsApiKey={API_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={11}
                >
                    <Marker  position={ { lat: 40.7831, lng: -73.9712 } }/>
                </GoogleMap>
            </LoadScript>
        </>
    );
};

export default KelpMap;