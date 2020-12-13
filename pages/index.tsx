import Head from 'next/head';
import React from 'react';
import FeedPosts from '../components/FeedPosts';

const Home = () => {
    return (
        <>
            <Head>
                <title>Stas | Test Assignment</title>
            </Head>
            <FeedPosts />
        </>
    );
};

export default Home;
