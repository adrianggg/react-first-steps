import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsFavorite } from '../../redux/cardsReducer';
import { removeCard } from '../../redux/cardsReducer';
const Card = ({title,isFavorite,id}) => {
    const dispatch = useDispatch();
    const toggleIsFavorite = ()=>{
        dispatch(changeIsFavorite(id));
    }
    const remove = ()=>{
        dispatch(removeCard(id));
    }
    return (
        <li className={styles.card}>{title} <span><i onClick={toggleIsFavorite} className={clsx('fa', isFavorite ? 'fa-star' : 'fa-star-o')}></i>
         <i onClick={remove} className={clsx(styles.trash,'fa fa-trash')}></i></span> </li>
    );
};

export default Card;