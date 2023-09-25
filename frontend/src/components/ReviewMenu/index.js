import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { destroyReview, updateReview } from '../../store/reviews';
import styles from './ReviewMenu.module.css';

const ReviewMenu = ({props}) => {

    console.log(props) // contains bussinessId, id (review) and userId, etc
    const businessParam = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(true);
    };

    const handleUpdateClick = (review) => {
        navigate(`/business/${businessParam.id}/review/edit/${review.id}`, {
            state: {
                businessId: businessParam.id,
                review: review,
            }
        });
    };

    useEffect(() => {
        if (!showMenu) return;
    
        const closeMenu = (e) => {
          e.preventDefault();
          setShowMenu(false);
        };
    
        document.addEventListener('click', closeMenu);
      
        return () => document.removeEventListener("click", closeMenu);
      }, [showMenu]);

    return (
        <>
            <svg className={styles.reviewMenu} onClick={handleMenuClick}>
                <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-16 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            {showMenu && (
                <div id={styles.buttons}>
                    <button className={styles.deleteReview} onClick={(e) => dispatch(destroyReview(props.id))} key={props.id}> Delete </button>
                    <button className={styles.editReview} onClick={(e) => handleUpdateClick(props)} key={props.id}>Edit</button> 
                </div>
            )}
        </>
    );
};

export default ReviewMenu;