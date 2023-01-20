import SearchBar from "../SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBusinesses, getFavoriteBusinesses } from "../../store/businesses";
import BusinessListingsItem from "../BusinessListingItem";
import { fetchFavorites, getFavorites } from "../../store/favorites";
import styles from "./ProfilePage.module.css"

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
        dispatch(fetchBusinesses())
        dispatch(fetchFavorites())
    }, [])

    if (!businesses) return null;

    const mappedBusinesses = businesses.map((business) => {
        return <BusinessListingsItem business={business} key={business.id} />
    });

    
    const favoriteBusinesses = () => {
        if (mappedBusinesses.length <= 0) {
            return <p id={styles.noFavorites}>You don't have any favorite businesses yet :/</p>
        } else {
            return mappedBusinesses
        }
    }

    return (
        <>
        <SearchBar />
        <h3 id={styles.mainHeader}> {sessionUser.firstName}'s Favorite Businesses</h3>
        <div>
            <ul>
                {favoriteBusinesses()}
            </ul>
        </div>
        </>
    );
};

export default ProfilePage;