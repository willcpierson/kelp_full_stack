import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews';
import styles from './BusinessListingsItem.module.css'

const BusinessListingsItem = (props) => {
    const photoPath = props.business.photoURL ? props.business.photoURL : '';
    const allReviews = useSelector(getReviews(props.business.id));


    const firstReview = () => {
        if (allReviews[0]) {
            return (
                <p id={styles.firstReview}>{`"${allReviews[0].body}"`}</p>
            );
        } else {
            return (
                <p id={styles.firstReviewMissing}>No reviews yet... be the first! </p>
            )
        }
    }
    console.log(allReviews);

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
                        {/* <p id={styles.rating}>Rating Goes Here |Float Rating avg | # of reviews</p>
                        <br /> */}
                        <p id={styles.businessLocation}>{props.business.streetAddress}, {props.business.city}, {props.business.state}</p>
                        {/* <br />
                        <p id={styles.itemAttributes}> {props.business.businessType} | Price indicator $$$ | Area</p> */}
                        <br />
                        <p id={styles.firstReview}>{firstReview()}</p>
                    </li>
                </div>
            </Link>
        </>
    );
};

export default BusinessListingsItem