import styles from './BusinessListingsItem.module.css'


const BusinessListingsItem = (props) => {
    console.log(props)

    // change street_address to streetAddress on translation
    return (
        <>
            <div id={styles.itemBox}>
                <li>
                    <h2>{props.business.name}</h2>
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