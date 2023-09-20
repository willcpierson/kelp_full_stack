import styles from './ReviewMenu.module.css';



const ReviewMenu = () => {


    //Put ... icon in here, then on click return following

    const handleMenuClick = () => {
        return (
            <div id={styles.menuDiv}>

            </div>
        );
    };

    return (
        
            <svg className={styles.reviewMenu} onClick={handleMenuClick}>
                <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-16 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
    );
};

export default ReviewMenu;