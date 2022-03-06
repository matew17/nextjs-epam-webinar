import Head from "next/head";
import { useRouter } from "next/router";

const DynamicById = () => {
    const router = useRouter();
    const { id } = router.query;

    const goBack = () => {
        router.back();
    };

    return (
        <>
            <Head>
                <title>Dynamic by id pages - NextJS EPAM Webinar</title>
                <meta
                    name="description"
                    content="Dynamic by id pages for NextJS Epam Webinar"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Dynamic Routes by ID</h1>

            <button type="button" onClick={goBack}>
                -- Go Back --
            </button>

            <p>ID : {id}</p>
        </>
    );
};

export default DynamicById;
