import styles from './NavBar.module.scss';
import {NavLink } from 'react-router-dom';
const NavBar = () =>{

    return (
        <nav>
            <i className={styles.icon + ' fa fa-tasks'}></i>

            <ul className={styles.navList}>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/Favorite">Favorite</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/About">About</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavBar;