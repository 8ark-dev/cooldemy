import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyComponent extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="NextJS Events" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body className="font-sans">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyComponent;