import Header from '../components/Header/Header';
import '../styles/globals.css';
import { StateProvider, useStateValue } from '../context/StateProvider';
import reducer, { initialState } from '../context/reducer';
import Nav from '../components/Header/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <Header />
      <Component {...pageProps} />
      <Nav />
    </StateProvider>
  );
}

export default MyApp;
