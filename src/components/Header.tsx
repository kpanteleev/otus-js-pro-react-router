import {Link, NavLink} from "react-router";
import {useSelector} from "react-redux";
import type {RootState} from "../store";
import layoutStyles from '../styles/Layout.module.css';
import headerStyles from '../styles/Header.module.css';

export default function Header() {
    const {favoritesPosts} = useSelector((state: RootState) => state.favorites);
    const favoritesCount = favoritesPosts?.length ?? 0;

    return (
        <header className={layoutStyles.header}>
            <div className={layoutStyles.middle}>
                <div className={headerStyles.headerMenu}>
                    <div className={headerStyles.logo}><Link to="/">News portal #1</Link></div>
                    <nav className={headerStyles.navBar}>
                        <NavLink to="/favorites">Favorites {favoritesCount > 0 && (
                            <span className={headerStyles.countBadge}>{favoritesCount}</span>)}</NavLink>
                        <NavLink to="/about">About us</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}