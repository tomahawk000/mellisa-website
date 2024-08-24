import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log('MyApp rendering with props:', { Component, pageProps });
  return <Component {...pageProps} />
}

export default MyApp
