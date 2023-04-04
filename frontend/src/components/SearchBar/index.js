import { NavLink, useNavigate, useSearchParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchFavorites } from "../../store/favorites";
import { fetchReviews } from "../../store/reviews";
import { fetchUsers } from "../../store/users";
import ProfileButton from "../ProfileButton";
import BusinessListings from "../BusinessListings";
import styles from './SearchBar.module.css'
import { fetchBusinesses } from "../../store/businesses";


const SearchBar = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [food, setFood] = useState("");
    const [cityState, setCityState] = useState("");
    const [listings, setListings] = useState(null);
    const [search, setSearch] = useSearchParams("");
    const [type, setType] = useState("all");
    
    useEffect(() => {
      dispatch(fetchFavorites());
      dispatch(fetchBusinesses());
      dispatch(fetchReviews());
      dispatch(fetchUsers());
    }, []);

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
      setListings(<BusinessListings food={food} location={cityState} type={type}/>)
      return navigate('/listings')
    }

    const handleTempSearchSumbit = (e) => {
      e.preventDefault()
    }

    const handleClick = (e) => {
      e.preventDefault()
      return navigate('/')
    }

    return (
        <>
          <div id={styles.searchBarDiv}>
            <form id={styles.searchform} onSubmit={handleTempSearchSumbit}>
                <h3 id={styles.kelplogo} onClick={handleClick}>Kelp</h3>
                <div id={styles.allOfSearchBar}>
                    <label>
                      <input type="text" name="search[food]" id={styles.searchFood} className={styles.searchbars} value={food} placeholder="Search functionality coming soon" onChange={(e) => setFood(e.target.value)}/>
                    </label>
                    {/* <label>
                      <input type="text" name="search[location]" className={styles.searchbars} value={cityState} placeholder=" New York, NY" onChange={(e) => setCityState(e.target.value)}/>
                    </label> */}
                    <button type="submit" id={styles.search} value="Search">Search</button>
                </div>
                <aside id={styles.sessionLinks}>
                  {sessionLinks}
                </aside>
            </form>
            <form id={styles.subsearches} onSubmit={handleSpecificSubmit}>
                <Link to={ { pathname: '/listings/food' } } food={food} location={cityState} className={styles.subSearch}>Seafood</Link>
                <svg className={styles.downArrow}>
                  <path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
                  </svg>
                <Link to={ { pathname: '/listings/aquarium' } } food={food} location={cityState} className={styles.subSearch}>
                  Aquariums
                  <svg className={styles.downArrow}>
                  <path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
                  </svg>
                </Link>
                <Link to={ { pathname: '/listings/pier' } } food={food} location={cityState} className={styles.subSearch}>
                  Piers
                  <svg className={styles.downArrow}>
                  <path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
                  </svg>
                </Link>

            </form>
            {listings}
          </div>
      </>
    );
};

export default SearchBar