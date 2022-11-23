import SearchBar from "../SearchBar";
import { useSelector } from "react-redux";
import { getFavoriteBusinesses } from "../../store/businesses";

const ProfilePage = () => {

    let sessionUser = useSelector(state => state.session.user);
    sessionUser = sessionUser ? sessionUser : undefined;
    const userFavoriteId = sessionUser.id;
    const businessTestIdArray = [2, 1];
    const businesses = useSelector(getFavoriteBusinesses(businessTestIdArray));

    const showFavoriteBusinesses = () => {
        
    }



    return (
        <>
        <SearchBar />
        <h2>Hello from ProfilePage, {sessionUser.firstName} {sessionUser.lastName[0]}.</h2>
        <h5>From New York, NY</h5>
        <h3>Favorite Businesses</h3>
        <div>
            <ul>
                <li>{businesses}</li>
            </ul>
        </div>
        </>
    );
};

export default ProfilePage;