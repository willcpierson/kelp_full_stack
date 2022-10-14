import { Navigate, useNavigate } from 'react-router-dom';
import styles from './BusinessListingsItem.module.css'


const BusinessListingsItem = (props) => {
    const navigate = useNavigate()

    const handleClick = (e) => {
     navigate(`/business`)
    }

    // change street_address to streetAddress on translation
    return (
        <>
            <div id={styles.itemBox}>
                <li>
                    <h2 onClick={handleClick} >{props.business.name}</h2>
                    <br />
                    {props.business.description}
                    <br />
                    <p>Rating Goes Here |Float Rating avg | # of reviews</p>
                    <br />
                    <p>Type of food | Price indicator $$$ | Area</p>
                    <br />
                    {props.business.street_address}, {props.business.city}, {props.business.state}
                </li>
                <br />
                <p>Open until 10:30 PM</p>
                <br />
                <p>Highest Liked Review Goes Here</p>
                <br />
            </div>
        </>
    );
};

export default BusinessListingsItem