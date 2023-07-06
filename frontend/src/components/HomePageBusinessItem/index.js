import styles from './HomePageBusinessItem.module.css'
import { getBusiness,fetchBusiness } from '../../store/businesses';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const HomePageBusinessItem = (props) => {
    
    const dispatch = useDispatch();
    const business = useSelector(getBusiness(props.business));
    const photoPath = props.business.photoURL ? props.business.photoURL : '';

    useEffect(() => {
        if (!business) {
            dispatch(fetchBusiness(props.business))
        }
    }, []);

    if (!business) {
        return <p>Loading...</p>
    } else {
        return (
            <Link className={styles.homePageBusinessItemContainer} to={`/business/${props.business}`}>
                <aside>
                    <img id={styles.businessPhoto} src={business.photoURL}/>
                </aside>
                <h2>Business Item {props.business}</h2>
                <p>{business.name}</p>
                <p>ID Number: {props.business}</p>
            </Link>
        );
    };
};

export default HomePageBusinessItem;