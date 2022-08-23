import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { changeIsFavorite } from '../../redux/store';
const Card = ({title,isFavorite,id}) => {
    // console.log(isFavorite);
    console.log(id);
    const dispatch = useDispatch();
    const toggleIsFavorite = ()=>{
        dispatch(changeIsFavorite(id));
    }
    return (
        <li className={styles.card}>{title} <i onClick={toggleIsFavorite} className={clsx('fa', isFavorite ? 'fa-star' : 'fa-star-o')}></i></li>
    );
};

export default Card;