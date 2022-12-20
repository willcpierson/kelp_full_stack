import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import { fetchBusiness, getBusiness, getSpecificBusinesses } from "../../store/businesses";
import { createReview, fetchReviews, getReviews, getReview, destroyReview,  updateReview } from "../../store/reviews";
import { fetchFavorites, createFavorite, getFavorites } from "../../store/favorites";
import { fetchUsers, getUsers } from "../../store/users";
import * as sessionActions from '../../store/session'
import { useParams, useNavigate } from "react-router-dom";
import EditReview from "../EditReview/EditReview";
import styles from './BusinessItemShow.module.css'




const BusinessItemShow = () => {

    let sessionUser = useSelector(state => state.session.user);
    sessionUser = sessionUser ? sessionUser : undefined;
    const allUsers = useSelector(getUsers);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const businessParam = useParams();
    const [reviewBody, setReviewBody] = useState('');
    const business = useSelector(getBusiness(businessParam.id));
    // const favorites = useSelector(getFavorites())
    const reviews = useSelector(getReviews(businessParam.id));
    const [reviewCount, setReviewCount] = useState(0);
    const [reviewsArray, setReviewsArray] = useState([]);

    useEffect(() => {
        if (!business) {
            dispatch(fetchBusiness(businessParam.id))
        }
        // if (!favorites) {
        //     dispatch(fetchFavorites())
        // }
    }, [businessParam.id])

    useEffect(() => {
        dispatch(fetchUsers()).then(() => dispatch(fetchReviews()))
    }, [dispatch] )

    const handleUpdateClick = (review) => {
        navigate(`/business/${businessParam.id}/review/edit/${review.id}`, {
            state: {
                businessId: businessParam.id,
                review: review,
            }
        });
    };

    if (!business) return null;
    // if (!favorites) return null;

    const mappedReviews = reviews.map((review) => {
        let reviewUserName = ''

        allUsers.forEach((user) => {
            if (user.id === review.userId) {
                reviewUserName = (`${user.first_name} ${user.last_name}`)
            };
        })
        let deleteAndUpdateButtons = ''
        if (sessionUser && review.userId === sessionUser.id) {
            deleteAndUpdateButtons = ( 
            <>
                <button className={styles.deleteReview} onClick={(e) => dispatch(destroyReview(review.id))} key={review.id}> Delete </button>
                <button className={styles.editReview} key={review.id} onClick={(e) => handleUpdateClick(review)}> Update </button>
                {/* onClick={(e) => dispatch(updateReview(review))} key={review.id} // FOR ABOVE: test passing in an object that includes the review id AND review body, instead of just review.id*/} 
            </>
            )
        }
        
        return (
            <div key={review.id} className={styles.singleReview}>
                <svg className={styles.reviewMenu}>
                <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-16 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
                <p className={styles.reviewerName}>{reviewUserName}</p>
                <p className={styles.cityState}> New York, NY </p>
                <br />
                <p> Rating: 4/5 | {review.created_at} </p>
                <br />
                <p review={review} className={styles.paragraph}> {review.body} </p>
                {deleteAndUpdateButtons}
            </div>
        )
    });

    // setReviewsArray(mappedReviews)

    const handleSubmit = (e) => {
        const reviewObject = {body: reviewBody, user_id: sessionUser.id, business_id: businessParam.id}
        dispatch(createReview(reviewObject))
        setReviewBody('')
    } 

    const handleFavoriteSubmit =(e) => {
        e.preventDefault();
        console.log('favorite button clicked!')
        console.log(businessParam.id)
        const favoriteObject = {business_id: businessParam.id}
        dispatch(createFavorite(favoriteObject))
    }

    return (
        <>  
            <SearchBar id={styles.showSearchBar}/>
            <div id={styles.businessImageHolder}>
                <img id={styles.businessImage} src={business.photoURL} alt=""/>
            </div>
            <br />
            <div className={styles.nameRating}>
                <h2 id={styles.businessName}>{business.name}</h2>
                <p id={styles.businessRating}> {business.rating}
                    <svg className={styles.ratingStars}>
                        <path fill="rgba(255,100,61,1)" opacity="1" d="M6.4 0H16V32H6.4C2.86538 32 0 29.1346 0 25.6V6.4C0 2.86538 2.86538 0 6.4 0Z"></path>
                        <path fill="rgba(255,100,61,1)" opacity="1" d="M25.6 0C29.1346 0 32 2.86538 32 6.4V25.6C32 29.1346 29.1346 32 25.6 32H16V0H25.6Z"></path>
                        <path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M16 21.3978L20.1518 23.5378C20.3804 23.6557 20.6409 23.697 20.8949 23.6555C21.5489 23.5488 21.9926 22.932 21.8859 22.2779L21.1336 17.668L24.4519 14.3807C24.6346 14.1997 24.7544 13.9647 24.7934 13.7104C24.894 13.0553 24.4445 12.4427 23.7895 12.3421L19.1727 11.6331L17.0717 7.4614C16.956 7.23163 16.7695 7.04513 16.5397 6.92941C15.9478 6.63131 15.2263 6.86949 14.9282 7.4614L12.8272 11.6331L8.21047 12.3421C7.95619 12.3812 7.72118 12.5009 7.54013 12.6837C7.0737 13.1545 7.07727 13.9143 7.54809 14.3807L10.8664 17.668L10.114 22.2779C10.0726 22.5318 10.1139 22.7923 10.2317 23.021C10.5354 23.6101 11.2591 23.8415 11.8482 23.5378L16 21.3978V21.3978Z"></path>
                    </svg>
                    <svg className={styles.ratingStars}>
                        <path fill="rgba(255,100,61,1)" opacity="1" d="M6.4 0H16V32H6.4C2.86538 32 0 29.1346 0 25.6V6.4C0 2.86538 2.86538 0 6.4 0Z"></path>
                        <path fill="rgba(255,100,61,1)" opacity="1" d="M25.6 0C29.1346 0 32 2.86538 32 6.4V25.6C32 29.1346 29.1346 32 25.6 32H16V0H25.6Z"></path>
                        <path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M16 21.3978L20.1518 23.5378C20.3804 23.6557 20.6409 23.697 20.8949 23.6555C21.5489 23.5488 21.9926 22.932 21.8859 22.2779L21.1336 17.668L24.4519 14.3807C24.6346 14.1997 24.7544 13.9647 24.7934 13.7104C24.894 13.0553 24.4445 12.4427 23.7895 12.3421L19.1727 11.6331L17.0717 7.4614C16.956 7.23163 16.7695 7.04513 16.5397 6.92941C15.9478 6.63131 15.2263 6.86949 14.9282 7.4614L12.8272 11.6331L8.21047 12.3421C7.95619 12.3812 7.72118 12.5009 7.54013 12.6837C7.0737 13.1545 7.07727 13.9143 7.54809 14.3807L10.8664 17.668L10.114 22.2779C10.0726 22.5318 10.1139 22.7923 10.2317 23.021C10.5354 23.6101 11.2591 23.8415 11.8482 23.5378L16 21.3978V21.3978Z"></path>
                    </svg>
                    <svg className={styles.ratingStars}>
                        <path fill="rgba(255,100,61,1)" opacity="1" d="M6.4 0H16V32H6.4C2.86538 32 0 29.1346 0 25.6V6.4C0 2.86538 2.86538 0 6.4 0Z"></path>
                        <path fill="rgba(255,100,61,1)" opacity="1" d="M25.6 0C29.1346 0 32 2.86538 32 6.4V25.6C32 29.1346 29.1346 32 25.6 32H16V0H25.6Z"></path>
                        <path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M16 21.3978L20.1518 23.5378C20.3804 23.6557 20.6409 23.697 20.8949 23.6555C21.5489 23.5488 21.9926 22.932 21.8859 22.2779L21.1336 17.668L24.4519 14.3807C24.6346 14.1997 24.7544 13.9647 24.7934 13.7104C24.894 13.0553 24.4445 12.4427 23.7895 12.3421L19.1727 11.6331L17.0717 7.4614C16.956 7.23163 16.7695 7.04513 16.5397 6.92941C15.9478 6.63131 15.2263 6.86949 14.9282 7.4614L12.8272 11.6331L8.21047 12.3421C7.95619 12.3812 7.72118 12.5009 7.54013 12.6837C7.0737 13.1545 7.07727 13.9143 7.54809 14.3807L10.8664 17.668L10.114 22.2779C10.0726 22.5318 10.1139 22.7923 10.2317 23.021C10.5354 23.6101 11.2591 23.8415 11.8482 23.5378L16 21.3978V21.3978Z"></path>
                    </svg>
                    <svg className={styles.ratingStars}>
                        <path fill="rgba(255,100,61,1)" opacity="1" d="M6.4 0H16V32H6.4C2.86538 32 0 29.1346 0 25.6V6.4C0 2.86538 2.86538 0 6.4 0Z"></path>
                        <path fill="rgba(255,100,61,1)" opacity="1" d="M25.6 0C29.1346 0 32 2.86538 32 6.4V25.6C32 29.1346 29.1346 32 25.6 32H16V0H25.6Z"></path>
                        <path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M16 21.3978L20.1518 23.5378C20.3804 23.6557 20.6409 23.697 20.8949 23.6555C21.5489 23.5488 21.9926 22.932 21.8859 22.2779L21.1336 17.668L24.4519 14.3807C24.6346 14.1997 24.7544 13.9647 24.7934 13.7104C24.894 13.0553 24.4445 12.4427 23.7895 12.3421L19.1727 11.6331L17.0717 7.4614C16.956 7.23163 16.7695 7.04513 16.5397 6.92941C15.9478 6.63131 15.2263 6.86949 14.9282 7.4614L12.8272 11.6331L8.21047 12.3421C7.95619 12.3812 7.72118 12.5009 7.54013 12.6837C7.0737 13.1545 7.07727 13.9143 7.54809 14.3807L10.8664 17.668L10.114 22.2779C10.0726 22.5318 10.1139 22.7923 10.2317 23.021C10.5354 23.6101 11.2591 23.8415 11.8482 23.5378L16 21.3978V21.3978Z"></path>
                    </svg>
                    <svg className={styles.ratingStars}>
                        <path fill="rgba(255,100,61,1)" opacity="1" d="M6.4 0H16V32H6.4C2.86538 32 0 29.1346 0 25.6V6.4C0 2.86538 2.86538 0 6.4 0Z"></path>
                        <path fill="rgba(255,100,61,1)" opacity="1" d="M25.6 0C29.1346 0 32 2.86538 32 6.4V25.6C32 29.1346 29.1346 32 25.6 32H16V0H25.6Z"></path>
                        <path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M16 21.3978L20.1518 23.5378C20.3804 23.6557 20.6409 23.697 20.8949 23.6555C21.5489 23.5488 21.9926 22.932 21.8859 22.2779L21.1336 17.668L24.4519 14.3807C24.6346 14.1997 24.7544 13.9647 24.7934 13.7104C24.894 13.0553 24.4445 12.4427 23.7895 12.3421L19.1727 11.6331L17.0717 7.4614C16.956 7.23163 16.7695 7.04513 16.5397 6.92941C15.9478 6.63131 15.2263 6.86949 14.9282 7.4614L12.8272 11.6331L8.21047 12.3421C7.95619 12.3812 7.72118 12.5009 7.54013 12.6837C7.0737 13.1545 7.07727 13.9143 7.54809 14.3807L10.8664 17.668L10.114 22.2779C10.0726 22.5318 10.1139 22.7923 10.2317 23.021C10.5354 23.6101 11.2591 23.8415 11.8482 23.5378L16 21.3978V21.3978Z"></path>
                    </svg>
                    <p id={styles.numOfReviews}>
                        {mappedReviews.length} reviews
                    </p>
                </p>
            </div>
            <br />
            <div id={styles.reviewAndFavoriteButtons}>
                <form  onSubmit={handleSubmit} className={styles.buttonForm}>
                    <textarea rows="3" className={styles.submitReview} type="text" value={reviewBody} onChange={(e) => setReviewBody(e.target.value)}/>
                    <input className={styles.submitReviewForm} type="submit" value='Submit Review'/>
                </form>
                <form onSubmit={handleFavoriteSubmit} className={styles.buttonForm}>
                <input className={styles.submitFavoriteForm} type="submit" value='Add To Favorites'/>
                </form>
            </div>
            <div className={styles.reviews}>
                <h3 id={styles.reviewHeader}>Recommended Reviews</h3>
                {mappedReviews}
            </div>
            

        </>
    );
};

export default BusinessItemShow;