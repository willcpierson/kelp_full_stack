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
                </div>
        </div>
    );
};

export default Carousel;