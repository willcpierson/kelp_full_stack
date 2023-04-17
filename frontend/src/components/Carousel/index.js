import styles from './Carousel.module.css'
import { useState, useEffect } from 'react';



const Carousel = () => {

    const backgroundImages = [
        'https://www.visitphilly.com/wp-content/uploads/2017/12/AdventureAquarium_tunnel-J_Fusco-for-vp-2200x1237px.jpg',
        'https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2NlYW58ZW58MHx8MHx8&w=1000&q=80',
        'https://oceanfdn.org/wp-content/uploads/2010/08/SargassoSea-1-1200x600.jpg'
    ];

    // const [imageIndex, setImageIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setImageIndex((imageIndex + 1) % backgroundImages.length);
    //       console.log(`loading ${imageIndex}...`)
    //     }, 9000);
    //     return () => clearInterval(interval);
    //   }, [imageIndex]);

    // const setFollowingDivImage = () => {
    //     console.log('loading following image...')
    //     if (imageIndex === 2) {
    //         return 0;
    //     } else {
    //         return imageIndex + 1;
    //     };
    // };

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.currentBackgroundImage} style={{ backgroundImage: `url(${backgroundImages[0]})` }} />
            <div className={styles.textContainer}>
                    <h2 className={styles.heroText}>
                        Explore fantastical aquariums
                    </h2>
                </div>
            {/* <div className={styles.followingBackgroundImage} style={{ backgroundImage: `url(${backgroundImages[1]})` }}/>
            <div className={styles.followingBackgroundImage} style={{ backgroundImage: `url(${backgroundImages[2]})` }}/> */}
        </div>
    );
};

export default Carousel;