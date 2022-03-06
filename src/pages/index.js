import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Home({ data }) {
    const { results } = data;

    return (
        <div>
            <Head>
                <title>NextJS EPAM Webinar</title>
                <meta name="description" content="NextJS APP EPAM Webinar" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Home page - SSR</h1>

            <section className={styles.charatersWrapper}>
                {results.map((result) => (
                    <div key={result.id}>
                        <div className={styles.characterContainer}>
                            <Image
                                src={result.image}
                                alt={result.name}
                                width={250}
                                height={250}
                            />
                            <p className={styles.name}>{result.name}</p>
                            <span className={styles.gender}>
                                {result.gender}
                            </span>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export async function getServerSideProps() {
    const url = "https://rickandmortyapi.com/api/character";

    const response = await fetch(`${url}`);
    const data = await response.json();

    return {
        props: { data },
    };
}
