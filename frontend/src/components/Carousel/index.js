import { Link } from 'react-router-dom';
import styles from './Carousel.module.css';

const Carousel = () => {

    const backgroundImages = [
        'https://www.visitphilly.com/wp-content/uploads/2017/12/AdventureAquarium_tunnel-J_Fusco-for-vp-2200x1237px.jpg',
        'https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2NlYW58ZW58MHx8MHx8&w=1000&q=80',
        'https://oceanfdn.org/wp-content/uploads/2010/08/SargassoSea-1-1200x600.jpg'
    ];

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.currentBackgroundImage} style={{ backgroundImage: `url(${backgroundImages[0]})` }} />
                <div className={styles.textContainer}>
                    <h2 className={styles.heroText}>
                        Explore fantastical aquariums
                    </h2>
                    <Link id={styles.findAquariumsButton} to={ { pathname: '/listings/aquarium' } }>
                        <svg id={styles.searchIcon}>
                            <path d="M21.853 20.355l-3.444-3.443a9.428 9.428 0 10-16.761-6.171 9.428 9.428 0 0015.348 7.586l3.443 3.442a1 1 0 101.414-1.414zM5.82 16.245a7.429 7.429 0 115.253 2.175 7.38 7.38 0 01-5.253-2.176z"></path>
                        </svg>
                        <p id={styles.buttonText}>Aquariums</p>
                    </Link>
                </div>
        </div>
    );
};

export default Carousel;