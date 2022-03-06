import Link from "next/link";

import styles from "./Menu.module.css";

const Menu = () => {
    return (
        <ul className={styles.menuWrapper}>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/images">
                    <a>Images</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/dynamic">
                    <a>Dynamic</a>
                </Link>
            </li>
        </ul>
    );
};

export default Menu;
