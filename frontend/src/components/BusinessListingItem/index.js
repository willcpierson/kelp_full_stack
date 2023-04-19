import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews';
import styles from './BusinessListingsItem.module.css'

const BusinessListingsItem = (props) => {
    const photoPath = props.business.photoURL ? props.business.photoURL : '';
    const allReviews = useSelector(getReviews(props.business.id));

    const firstReview = () => {
        if (allReviews[0]) {
            if (allReviews[0].body.split('').length > 250) {
                let shortenedReview = allReviews[0].body.slice(0, 251) + '...'
                return (
                    <div id={styles.listingContent}>
                        <svg id={styles.reviewIcon}>
                            <path d="M5 14.309a.749.749 0 01-.75-.75v-2.45a3.768 3.768 0 01-3-3.667V5.44A3.754 3.754 0 015 1.69h6a3.754 3.754 0 013.75 3.75v2A3.755 3.755 0 0111 11.19H8.924l-3.437 2.938a.75.75 0 01-.487.18zM5 3.191a2.253 2.253 0 00-2.25 2.25v2a2.259 2.259 0 002.215 2.25.792.792 0 01.785.75v1.49l2.41-2.06a.749.749 0 01.487-.18H11a2.253 2.253 0 002.25-2.25v-2A2.253 2.253 0 0011 3.19H5z"></path>
                        </svg>
                        <div id={styles.firstReviewBox}>
                        <p id={styles.firstReview}>{`"${shortenedReview}"`} <a id={styles.moreReview}>more</a></p>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div id={styles.firstReviewBox}>
                        <svg id={styles.reviewIcon}>
                            <path d="M5 14.309a.749.749 0 01-.75-.75v-2.45a3.768 3.768 0 01-3-3.667V5.44A3.754 3.754 0 015 1.69h6a3.754 3.754 0 013.75 3.75v2A3.755 3.755 0 0111 11.19H8.924l-3.437 2.938a.75.75 0 01-.487.18zM5 3.191a2.253 2.253 0 00-2.25 2.25v2a2.259 2.259 0 002.215 2.25.792.792 0 01.785.75v1.49l2.41-2.06a.749.749 0 01.487-.18H11a2.253 2.253 0 002.25-2.25v-2A2.253 2.253 0 0011 3.19H5z"></path>
                        </svg>
                        <p id={styles.firstReview}>{`"${allReviews[0].body}"`} <a id={styles.moreReview}>more</a></p>
                    </div>
                );
            }
        } else {
            return (
                <p id={styles.firstReviewMissing}>No reviews yet... be the first! </p>
            );
        };
    };

    return (
        <>
            <Link id={styles.businessLink} to={`/business/${props.business.id}`} >
                <aside>
                <img id={styles.businessPreview} src={photoPath}/>
                </aside>
                <div id={styles.itemBox}>
                    <h2 id={styles.businessName}> {props.business.name}</h2>
                    <br />
                    <p id={styles.businessLocation}>{props.business.streetAddress}, {props.business.city}, {props.business.state}</p>
                    <br />
                    {firstReview()}
                </div>
            </Link>
        </>
    );
};

export default BusinessListingsItem