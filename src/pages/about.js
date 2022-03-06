import Head from "next/head";

import styles from "../styles/About.module.css";

const About = () => {
    return (
        <>
            <Head>
                <title>About page - NextJS EPAM Webinar</title>
                <meta
                    name="description"
                    content="About page for NextJS Epam Webinar"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>About page</h1>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus sint perspiciatis, tempora quo, facilis quibusdam nemo
                cum in autem quas odio culpa fugit quidem, veniam aut ad totam
                fuga accusantium! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Assumenda aliquid itaque dolorem voluptates.
                Laborum earum saepe dolorum voluptates, consectetur quos ipsa in
                cupiditate deserunt officia repudiandae soluta voluptas
                explicabo iusto.
            </p>
        </>
    );
};

export default About;
