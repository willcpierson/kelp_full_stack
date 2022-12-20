import SearchBar from "../SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBusinesses, getFavoriteBusinesses } from "../../store/businesses";
import BusinessListingsItem from "../BusinessListingItem";
import { fetchFavorites, getFavorites } from "../../store/favorites";

const ProfilePage = () => {

    const dispatch = useDispatch();
    let sessionUser = useSelector(state => state.session.user);
    sessionUser = sessionUser ? sessionUser : undefined;
    const favorites = useSelector(getFavorites)

    const currentUserFavorites = () => { 
        let array = [];
        favorites.forEach((favorite) => {
            if (favorite.userId === sessionUser.id) {
                array.push(favorite.businessId)
            };
        });
        return array
    }
    const businesses = useSelector(getFavoriteBusinesses(currentUserFavorites()));

    useEffect(() => {
        console.log('this hits') // not hitting lol
        dispatch(fetchBusinesses())
        dispatch(fetchFavorites())
    }, [])

    if (!businesses) return null; // fix this to check each value for an undefined

    const mappedBusinesses = businesses.map((business) => {
        return <BusinessListingsItem business={business} key={business.id} />
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