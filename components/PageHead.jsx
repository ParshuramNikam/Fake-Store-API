import Head from 'next/head'

const PageHead = ({title}) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Fake store rest api for your ecommerce or shopping website prototype" />
            <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
            <title>{title}</title>

            <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
            {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" /> */}
            {/* <meta name="msapplication-TileColor" content="#802c6e" /> */}
            {/* <meta name="theme-color" content="#ffffff" /> */}
            <meta property="og:locale" content="fa_IR" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Fake Store API" />
            <meta property="og:description" content="Fake store rest api for your ecommerce or shopping website prototype" />
            <meta property="og:url" content="fakestoreapi.com" />
            <meta property="og:site_name" content="Fake Store API" />
        </Head>
    )
}

export default PageHead;
