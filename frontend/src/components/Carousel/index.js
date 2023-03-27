import styles from './Carousel.module.css'
import { useState, useEffect } from 'react';



const Carousel = () => {

    const backgroundImages = []

    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((imageIndex + 1) % backgroundImages.length);
        }, 15000);
        return () => clearInterval(interval);
      }, [imageIndex]);

    return (
        <>

        </>
    );
};

export default Carousel;