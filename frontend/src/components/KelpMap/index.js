import styles from './KelpMap.module.css';
import { Wrapper } from '@googlemaps/react-wrapper';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const KelpMap = ( {businesses} ) => {

    const API_KEY = process.env.REACT_APP_GOOGLEMAPS_API_KEY;

    const containerStyle = {
        width: '455px',
        height: '500px'
      };
      
      const center = {
        lat: 40.735361,
        lng: -73.993242
      };

      if (!Array.isArray(businesses)) {
        businesses = [ businesses ]
      }

      const placeAllMarkers = businesses.map((business) => {
        return <Marker position={ {lat: business.lat, lng: business.lng} }/>
      });

    return (
        <>
            <LoadScript googleMapsApiKey={API_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={11.75}
                >
                    {placeAllMarkers}
                </GoogleMap>
            </LoadScript>
        </>
    );
};

export default KelpMap;