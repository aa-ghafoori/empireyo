import { Fragment } from 'react';
import { useStateValue } from '../context/StateProvider';
import Head from 'next/head';
import * as actionTypes from '../context/actionTypes';
import Gallery from '../components/Gallery/Gallery';
import Gallery2 from '../components/Gallery2/Gallery2';
import Header from '../components/Header/Header';
import Nav from '../components/Header/Nav';
import Part1 from '../components/Part1';
import Part2 from '../components/Part2';
import Part3 from '../components/Part3';
import Services from '../components/Services';
import Video from '../components/Video';

export default function Home() {
  const [state, dispatch] = useStateValue();
  const navClickHandler = () => {
    state.navClicked && dispatch({ type: actionTypes.NAV_CLICKED2 });
  };

  return (
    <Fragment>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <title>EMPIREYO | We make digital easy, beautiful and smart</title>
        <meta
          name='description'
          content='Empireyo provides smart strategies, well researched digital campaigns, branding and development services, we have every digital solution your company needs.'
        />
      </Head>
      <div
        onClick={navClickHandler}
        className={
          state.navClicked
            ? 'cursor-pointer overflow-hidden w-full h-screen transform -translate-x-1/3 scale-75 transition-transform duration-700 ease-in-out'
            : 'w-full'
        }
      >
        <Header />
        <Part1 />
        <Part2 />
        <Gallery />
        <Services />
        <Video />
        <Gallery2 />
        <Part3 />
      </div>
      <Nav />
    </Fragment>
  );
}
