import styles from './NavBar.module.scss';
const NavBar = () =>{

    return (
        <nav>
            <i className={styles.icon + ' fa fa-tasks'}></i>

            <ul className={styles.navList}>
                <li><a href="/">Home</a> </li>
                <li><a href="/favorite">Favorite</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;