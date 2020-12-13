import Document, { Head, Main, NextScript } from 'next/document';
// import {} from 'next'
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

export default class MyDocument extends Document<any> {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>
                    <title>Stas | Test Assignment</title>
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
