import Head from "next/head";
import Link from "next/link";

import styles from "../../styles/Dynamic.module.css";

const Index = () => {
    return (
        <>
            <Head>
                <title>Dynamic pages - NextJS EPAM Webinar</title>
                <meta
                    name="description"
                    content="Dynamic pages for NextJS Epam Webinar"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Dynamic Routes</h1>

            <ul className={styles.menu}>
                <li>
                    <Link href="/dynamic/1">
                        <a>Dynamic ID 1</a>
                    </Link>
                </li>

                <li>
                    <Link href="/dynamic/2">
                        <a>Dynamic ID 2</a>
                    </Link>
                </li>

                <li>
                    <Link href="/dynamic/3">
                        <a>Dynamic ID 3</a>
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default Index;
