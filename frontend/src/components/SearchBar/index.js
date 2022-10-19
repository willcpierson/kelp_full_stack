import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ProfileButton from "../ProfileButton";
import BusinessListings from "../BusinessListings";
import styles from './SearchBar.module.css'


const SearchBar = () => {
    const sessionUser = useSelector(state => state.session.user);

    const navigate = useNavigate();
    const [food, setFood] = useState("");
    const [cityState, setCityState] = useState("");
    const [listings, setListings] = useState(null);
    const [search, setSearch] = useSearchParams("");
    const [type, setType] = useState("all");
    
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

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearch(food)
        setListings(<BusinessListings food={food} location={cityState} type={type}/>)
        return navigate('/') // Have to double click to see items; 1st click resets, 2nd generates

        // pass in and populate cityState and food as props in BusinessListings, render CHECK
            // Might need to use useSearchParams. Have down for food but not yet for cityState
        // use search values and fetch information from businesses controller backend
        // map over list of results and display as list items
        // navigate('/login?aa')
        
        
        // Specifically do NOT wipe search bar after search
    }

    const handleSpecificSubmit = (e) => {
      e.preventDefault()
      console.log(type)
      setListings(<BusinessListings food={food} location={cityState} type={type}/>)
      return navigate('/')
    
    }

    const handleClick = (e) => {
      e.preventDefault()
      return navigate('/')
    }

    return (
        <><div id={styles.searchBarDiv}>
            <form id={styles.searchform} onSubmit={handleSearchSubmit}>
                <h3 id={styles.kelplogo} onClick={handleClick}>Kelp</h3>
                <div>
                    <label>
                      <input type="text" name="search[food]" id={styles.searchFood} className={styles.searchbars} value={food} placeholder=" tacos, cheap dinner, Max's" onChange={(e) => setFood(e.target.value)}/>
                    </label>
                    <label>
                      <input type="text" name="search[location]" className={styles.searchbars} value={cityState} placeholder=" New York, NY" onChange={(e) => setCityState(e.target.value)}/>
                    </label>
                    <button type="submit" id={styles.search} value="Search">Search</button>
                </div>
                <aside>
                  {sessionLinks}
                </aside>
            </form>
            <form id={styles.subsearches} onSubmit={handleSpecificSubmit}>
                <button className={styles.subSearch} onClick={(e) => console.log(type) && setType('food')}>Restaurants</button>
                <button className={styles.subSearch} onClick={(e) => console.log(type) && setType('bar')}>Bar Services</button>
                <button className={styles.subSearch} onClick={(e) => console.log(type) && setType('auto')}>Auto Services</button>

            </form>
          </div>
            {listings}
      </>
    );
};

export default SearchBar