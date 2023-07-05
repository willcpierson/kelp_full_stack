import styles from './HomePageBusinessItem.module.css'
import { getBusiness,fetchBusiness } from '../../store/businesses';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const HomePageBusinessItem = (props) => {
    
    const dispatch = useDispatch();
    const business = useSelector(getBusiness(props.business));

    useEffect(() => {
        if (!business) {
            dispatch(fetchBusiness(props.business))
        }
    }, []);


    return (
        <div className={styles.homePageBusinessItemContainer}>
                <h2>Business Item {props.business}</h2>
                <p>{business.name}</p>
        </div>
    );
};

export default HomePageBusinessItem;