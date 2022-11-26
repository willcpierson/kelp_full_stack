import SearchBar from "../SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBusinesses, getFavoriteBusinesses } from "../../store/businesses";
import BusinessListingsItem from "../BusinessListingItem";

const ProfilePage = () => {

    const dispatch = useDispatch();
    let sessionUser = useSelector(state => state.session.user);
    sessionUser = sessionUser ? sessionUser : undefined;
    const userFavoriteId = sessionUser.id;
    const businessTestIdArray = [2, 1];
    const businesses = useSelector(getFavoriteBusinesses(businessTestIdArray));
    console.log(businesses)

    useEffect(() => {
        console.log('this hits') // not hitting lol
        dispatch(fetchBusinesses())
    }, [])

    const mappedBusinesses = businesses.map((business) => {
        return <li>{business.name}</li>
    });



    return (
        <>
        <SearchBar />
        <h2>Hello from ProfilePage, {sessionUser.firstName} {sessionUser.lastName[0]}.</h2>
        <h5>From New York, NY</h5>
        <h3>Favorite Businesses</h3>
        <div>
            <ul>
                {mappedBusinesses}
            </ul>
        </div>
        </>
    );
};

export default ProfilePage;