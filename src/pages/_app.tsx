import NextNProgress from 'nextjs-progressbar'

import { Provider as AuthProvider } from 'next-auth/client'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from 'hooks/use-cart'

import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'
import { WishlistProvider } from 'hooks/use-wishlist'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <WishlistProvider>
              <Head>
                <title>Won Games</title>
                <link rel="shortcut icon" href="/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta
                  name="description"
                  content="The coolest e-commerce for games that I know"
                />
              </Head>
              <GlobalStyles />
              <NextNProgress
                color="#F231A5"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
              />
              <Component {...pageProps} />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App
