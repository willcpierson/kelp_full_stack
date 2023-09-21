import { NavLink, useNavigate, useSearchParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchFavorites } from "../../store/favorites";
import { fetchReviews } from "../../store/reviews";
import { fetchUsers } from "../../store/users";
import ProfileButton from "../ProfileButton";
import BusinessListings from "../BusinessListings";
import styles from './SearchBar.module.css';
import { fetchBusinesses } from "../../store/businesses";


const SearchBar = () => {
    console.log(window.location.pathname);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [food, setFood] = useState("");
    const [cityState, setCityState] = useState("");
    const [listings, setListings] = useState(null);
    const [search, setSearch] = useSearchParams("");
    const [type, setType] = useState("all");
    const [transparent, setTransparent] = useState(true);
    
    useEffect(() => {
      dispatch(fetchFavorites());
      dispatch(fetchBusinesses());
      dispatch(fetchReviews());
      dispatch(fetchUsers());
    }, []);

    const loginBorder = () => {
      if (window.location.pathname !== '/') {
        return {
          border: "2px solid black",
          color: "black"
        };
      };
    };

    let sessionLinks;
    if (sessionUser) {
      sessionLinks = (
        <ProfileButton user={sessionUser} />
      );
    } else {
      sessionLinks = (
        <>
          <NavLink id={styles.login} style={loginBorder()} to="/login">Log In</NavLink>
          <NavLink id={styles.signup} to="/signup">Sign Up</NavLink>
        </>
      );
    };

    const fixedFunction = () => {
      if (window.location.pathname == '/') {
        return {position: "absolute"};
      } else {
        return {
          position: "sticky",
          background: "white",
        };
      };
    };

    const searchBarBorder = () => {
        if (window.location.pathname == '/') {
          console.log('no changes to searchbar');
        } else {
          return {
            border: "1.5px solid black",
            borderRight: "none",
            borderRadiusTopLeft: "5px",
            borderRadiusBottomLeft: "5px",
            height: "42.5px"
          };
        };
    };

    const subSearchColor = () => {
      if (window.location.pathname !== '/') {
        return {
          fill: "black",
          color: "black"
        };
      };
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearch(food);
        setListings(<BusinessListings food={food} location={cityState} type={type}/>);
        return navigate('/');
    }

    const handleSpecificSubmit = (e) => {
      e.preventDefault();
      setTransparent(false);
      setListings(<BusinessListings food={food} location={cityState} type={type}/>);
      return navigate('/listings');
    }

    const handleTempSearchSumbit = (e) => {
      e.preventDefault();
    }

    const handleClick = (e) => {
      e.preventDefault()
      return navigate('/')
    }

    return (
        <>
          <div id={styles.searchBarDiv} style={fixedFunction()}>
            <form id={styles.searchform} onSubmit={handleTempSearchSumbit}>
                <h3 id={styles.kelplogo} onClick={handleClick}>Kelp</h3>
                <div id={styles.allOfSearchBar}>
                      <input type="text" name="search[food]" id={styles.searchFood} className={styles.searchbars} style={searchBarBorder()} value={food} placeholder="Search bar coming soon, click buttons below to search!" onChange={(e) => setFood(e.target.value)}/>
                    {/* <label>
                      <input type="text" name="search[location]" className={styles.searchbars} value={cityState} placeholder=" New York, NY" onChange={(e) => setCityState(e.target.value)}/>
                    </label> */}
                    <button type="submit" id={styles.search} value="Search">
                      <svg id={styles.searchIcon}>
                        <path d="M21.853 20.355l-3.444-3.443a9.428 9.428 0 10-16.761-6.171 9.428 9.428 0 0015.348 7.586l3.443 3.442a1 1 0 101.414-1.414zM5.82 16.245a7.429 7.429 0 115.253 2.175 7.38 7.38 0 01-5.253-2.176z"></path>
                      </svg>
                    </button>
                </div>
                <aside id={styles.sessionLinks}>
                  {sessionLinks}
                </aside>
            </form>
            <form id={styles.subsearches} onSubmit={handleSpecificSubmit}>
                <Link to={ { pathname: '/listings/food' } } food={food} location={cityState} className={styles.subSearch} style={subSearchColor()}>Seafood
                <svg className={styles.downArrow}>
                <path className={styles.pathDownArrow} style={subSearchColor()} d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
                  </svg>
                  </Link>
                <Link to={ { pathname: '/listings/aquarium' } } food={food} location={cityState} className={styles.subSearch} style={subSearchColor()}>
                  Aquariums
                  <svg className={styles.downArrow}>
                  <path className={styles.pathDownArrow} style={subSearchColor()} d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
                  </svg>
                </Link>
                <Link to={ { pathname: '/listings/pier' } } food={food} location={cityState} className={styles.subSearch} style={subSearchColor()}>
                  Piers
                  <svg className={styles.downArrow}>
                  <path className={styles.pathDownArrow} style={subSearchColor()} d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
                  </svg>
                </Link>

            </form>
            {listings}
          </div>
      </>
    );
};

export default SearchBar