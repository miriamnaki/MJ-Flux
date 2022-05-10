import '../styles/globals.css';
import { Layout } from '../components';

// wrap state application in state context and supply all data
import { StateContext } from '../context/StateContext';

// import toaster for notifications
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster/>
        <Component {...pageProps} />
      </Layout>

    </StateContext>
  )
}

export default MyApp
