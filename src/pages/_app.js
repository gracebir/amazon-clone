import '../styles/global.css';
import { store } from '../app/store';
import { Provider } from 'react-redux';
import { Provider as AuthProvider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  )
}

export default MyApp
