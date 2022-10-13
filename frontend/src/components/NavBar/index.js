import SearchBar from "../SearchBar";
import ProfileButton from "../ProfileButton";
import styles from './NavBar.module.css'

const NavBar = () => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
      sessionLinks = (
        <ProfileButton user={sessionUser} />
      );
    } else {
      sessionLinks = (
        <>
            <nav>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </nav>
        </>
      );
    }

    return (
        <>
            <nav>
                <SearchBar />
                {sessionLinks}
            </nav>
        </>
    );
};

export default NavBar;