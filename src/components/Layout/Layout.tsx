import Header from "../Header.tsx";
import {Outlet, useNavigation} from "react-router";
import LoadingFallback from "../LoadingFallback.tsx";
import styles from '../../styles/Layout.module.css';

export default function Layout() {
    const navigation = useNavigation();

    return (
        <div className={styles.wrapper}>
            <Header/>
            <main className={styles.content}>
                <div className={styles.middle}>
                    {navigation.state === "loading" ? <LoadingFallback/> : <Outlet/>}
                </div>
            </main>
            <footer className={styles.footer}>
                <div className={styles.middle}>
                    News portal #1 © {new Date().getFullYear()}
                </div>
            </footer>
        </div>
    );
}