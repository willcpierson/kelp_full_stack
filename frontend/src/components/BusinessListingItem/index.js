import { Link } from 'react-router-dom';
import styles from './BusinessListingsItem.module.css'


const BusinessListingsItem = (props) => {
    
    const photoPath = props.business.photoURL ? props.business.photoURL : ''

    // change street_address to streetAddress on translation
    return (
        <>
            <Link id={styles.businessLink} to={`/business/${props.business.id}`} >
                <aside>
                <img id={styles.businessPreview} src={photoPath}/>
                </aside>
                <div id={styles.itemBox}>
                    <li id={styles.businessList}>
                        <h2 id={styles.businessName}> {props.business.name}</h2>
                        <br />
                        <p id={styles.rating}>Rating Goes Here |Float Rating avg | # of reviews</p>
                        <br />
                        <p id={styles.businessLocation}>{props.business.street_address}, {props.business.city}, {props.business.state}</p>
                        <br />
                        <p id={styles.itemAttributes}> {props.business.business_type} | Price indicator $$$ | Area</p>
                    </li>
                    
                    <br />
                    <p id={styles.times}>Open until 10:30 PM</p>
                    <br />
                    <p id={styles.highestReview}>Highest Liked Review Goes Here</p>
                    <br />
                </div>
            </Link>
        </>
    );
};

export default BusinessListingsItem