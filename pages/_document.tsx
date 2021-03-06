import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render (): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Mitr:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
