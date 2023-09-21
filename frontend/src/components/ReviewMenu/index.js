import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { destroyReview, updateReview } from '../../store/reviews';
import styles from './ReviewMenu.module.css';

const ReviewMenu = ({props}) => {

    console.log(props) // contains bussinessId, id (review) and userId, etc

    const dispatch = useDispatch();

    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(true);
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
            <ul>
                <li>
                    <button className={styles.deleteReview} onClick={(e) => dispatch(destroyReview(props.id))} key={props.id}> Delete </button>
                </li>
                <li>
                    Boop 
                </li>
                <li> 
                    Beep
                </li>
            </ul>
            )};
        </>
    );
};

export default ReviewMenu;