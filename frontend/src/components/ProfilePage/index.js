import SearchBar from "../SearchBar";
import { useSelector } from "react-redux";

const ProfilePage = () => {

    let sessionUser = useSelector(state => state.session.user)
    sessionUser = sessionUser ? sessionUser : undefined

    return (
        <>
        <SearchBar />
        <h2>Hello from ProfilePage, {sessionUser.firstName} {sessionUser.lastName[0]}.</h2>
        <h5>From New York, NY</h5>
        <h3>Favorite Businesses</h3>
        </>
    );
};

export default ProfilePage;