import '../styles/globals.css';
import React from 'react';
import Layout from '../Layout';
import styled from 'styled-components';
import Redux from '../Redux';

interface AppProps {
    Component?: any;
    pageProps?: any;
}

const App = styled.div`
    margin: 0 auto;
    min-height: 100vh;
`;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Redux>
            <App>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </App>
        </Redux>
    );
}

export default MyApp;
