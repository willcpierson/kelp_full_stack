import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ProfileButton from "../ProfileButton";
import BusinessListings from "../BusinessListings";
import styles from './SearchBar.module.css'


const SearchBar = () => {
    const sessionUser = useSelector(state => state.session.user);
    console.log(sessionUser)

    const navigate = useNavigate();
    const [food, setFood] = useState("")
    const [cityState, setCityState] = useState("")
    const [listings, setListings] = useState(null)
    const [search, setSearch] = useSearchParams("")
    
    let sessionLinks;
    if (sessionUser) {
      sessionLinks = (
        <ProfileButton user={sessionUser} />
      );
    } else {
      sessionLinks = (
        <>
          <NavLink id={styles.login} to="/login">Log In</NavLink>
          <NavLink id={styles.signup} to="/signup">Sign Up</NavLink>
        </>
      );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(food)
        setListings(<BusinessListings food={food} location={cityState}/>)
        let results = (``)

        // pass in and populate cityState and food as props in BusinessListings, render CHECK
            // Might need to use useSearchParams. Have down for food but not yet for cityState
        // use search values and fetch information from businesses controller backend
        // map over list of results and display as list items
        // navigate('/login?aa')
        
        
        // Specifically do NOT wipe search bar after search
    }

    return (
        <>
            <form id={styles.searchform} onSubmit={handleSubmit}>
                <NavLink id={styles.kelplogo} exact='true' to="/">Kelp</NavLink>
                <div>
                    <label>
                      <input type="text" name="search[food]" id={styles.searchFood} className={styles.searchbars} value={food} placeholder=" tacos, cheap dinner, Max's" onChange={(e) => setFood(e.target.value)}/>
                    </label>
                    <label>
                      <input type="text" name="search[location]" className={styles.searchbars} value={cityState} placeholder=" New York, NY" onChange={(e) => setCityState(e.target.value)}/>
                    </label>
                    <button type="submit" id={styles.search} value="Search">Search</button>
                </div>
                <p>GitHub</p>
                <p>LinkedIn</p>
                {sessionLinks}
            </form>
            <form id={styles.subsearches}>
                <button>Restaurants</button>
                <button>Home Services</button>
                <button>Auto Services</button>

            </form>
            {listings}
      </>
    );
};

export default SearchBar