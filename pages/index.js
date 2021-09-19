import { Fragment } from 'react';
import Gallery from '../components/Gallery';
import Gallery2 from '../components/Gallery2/Gallery2';
import Header from '../components/Header/Header';
import Nav from '../components/Header/Nav';
import Part1 from '../components/Part1';
import Part2 from '../components/Part2';
import Part3 from '../components/Part3';
import Services from '../components/Services';
import Video from '../components/Video';
import { useStateValue } from '../context/StateProvider';
import styles from './index.module.css';
import * as actionTypes from '../context/actionTypes';

export default function Home() {
  const [state, dispatch] = useStateValue();
  const navClickHandler = () => {
    state.navClicked && dispatch({ type: actionTypes.NAV_CLICKED2 });
  };

  return (
    <Fragment>
      <div
        onClick={navClickHandler}
        className={state.navClicked ? styles.navClicked : styles.navNotClicked}
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
      <Nav  />
    </Fragment>
  );
}
