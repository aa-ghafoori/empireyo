import Gallery from '../components/Gallery';
import Gallery2 from '../components/Gallery2/Gallery2';
import Part1 from '../components/Part1';
import Part2 from '../components/Part2';
import Part3 from '../components/Part3';
import Services from '../components/Services';
import Video from '../components/Video';
import { useStateValue } from '../context/StateProvider';

export default function Home() {
  const [state, dispatch] = useStateValue();
  return (
    <div
      className={`${
        state.navClicked
          ? 'overflow-hidden cursor-pointer transform transition scale-75 -translate-x-1/2'
          : 'transform'
      }`}
    >
      <Part1 />
      <Part2 />
      <Gallery />
      <Services />
      <Video />
      <Gallery2 />
      <Part3 />
    </div>
  );
}
