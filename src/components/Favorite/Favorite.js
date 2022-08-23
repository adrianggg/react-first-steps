import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getAllFavorite } from '../../redux/cardsReducer';
import Card from '../Card/Card';
import Container from '../Container/Container';
const Favorite = ()=>{
    const cards = useSelector(getAllFavorite);
    return (
        <Container>
            <PageTitle>Favorite</PageTitle>
        <section className={styles.columns}>
            <article className={styles.column}>
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id}/>)}
                </ul>
            </article>
        </section>
        </Container>  
    )
}
export default Favorite;