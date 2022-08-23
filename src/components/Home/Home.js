
import Hero from '../Hero/Hero';
import Lists from '../Lists/Lists';
import { useDispatch } from 'react-redux';
import { changeSearchValue } from '../../redux/store';
const Home = ()=>{
    const dispatch = useDispatch();
    dispatch(changeSearchValue(''));
    return(
    <>
        <Hero />
        <Lists />
    </>
    )
}

export default Home;