import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Images.module.css";

const Images = () => {
    const images = [
        {
            url: "/images/goku.webp",
            with: 500,
            height: 700,
        },
        {
            url: "/images/kamina.png",
            with: 500,
            height: 700,
        },
        {
            url: "/images/kenshin.jpeg",
            with: 500,
            height: 800,
        },
        {
            url: "/images/shiriu.jpeg",
            with: 500,
            height: 700,
        },
        {
            url: "/images/tangiro.jpeg",
            with: 500,
            height: 700,
        },
        {
            url: "/images/toshinori-AllMight.jpeg",
            with: 500,
            height: 700,
        },
    ];

    return (
        <div className={styles.container}>
            <Head>
                <title>Images Page - NextJS Epam Webinar</title>
                <meta
                    name="description"
                    content="NextJS Epam Webinar - Images page"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Images optimization</h1>

            <section className={styles.imagesWrapper}>
                {images.map((image, index) => (
                    <div key={index} className={styles.image}>
                        <Image
                            src={image.url}
                            width={image.with}
                            height={image.height}
                        />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Images;
