import styles from './Footer.module.css'


const Footer = () => {

    return (
        <div id={styles.footerBackground}>
            <p className={styles.technologyName}>JavaScript</p>
            <p className={styles.technologyName}>HTML</p>
            <p className={styles.technologyName}>CSS</p>
            <p className={styles.technologyName}>React</p>
            <p className={styles.technologyName}>Redux</p>
            <p className={styles.technologyName}>SQL</p>
            <p className={styles.technologyName}>Ruby</p>
            <p className={styles.technologyName}>Ruby on Rails</p>
            <p className={styles.technologyName}>Google Maps API</p>
        </div>
    );
};

export default Footer;