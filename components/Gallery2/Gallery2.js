import Gallery2Item from './Gallery2Item';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from '../../public/people-walking-near-buildings-during-night-time-1827234-1-1024x682.jpg';
import Image2 from '../../public/green-trees-under-blue-sky-4054999-768x1024.jpg';
import Image3 from '../../public/marina-bay-sans-singapore-2804038-Copy-1024x914.jpg';
import Image4 from '../../public/aerial-architectural-design-architecture-buildings-373912-min-1024x682.jpg';
import Image5 from '../../public/skyline-photography-of-buildings-3052361-min.jpg';
import Image6 from '../../public/city-skyline-during-night-time-3617467-min-819x1024.jpg';
import Image7 from '../../public/arches-architecture-building-daylight-460680-min-1024x682.jpg';
import Image8 from '../../public/gray-and-black-buildings-3214995-min-683x1024.jpg';
import Image9 from '../../public/photo.jpg';
import timeImage from '../../public/time.jpg';

function Gallery2() {
  return (
    <div className='pt-20 pb-5 px-6 grid justify-items-center'>
      <h2 className='text-2xl w-[50vw] text-center mb-20 font-extrabold'>
        “Design creates culture. Culture shapes values. Values determine the
        future.”
      </h2>
      <Carousel
        showThumbs={false}
        emulateTouch
        centerMode
        showStatus={false}
        className='w-full'
      >
        <div>
          <Gallery2Item src={timeImage} />
        </div>
        <div>
          <Gallery2Item src={Image1} />
        </div>
        <div>
          <Gallery2Item src={Image2} />
        </div>
        <div>
          <Gallery2Item src={Image3} />
        </div>
        <div>
          <Gallery2Item src={Image4} />
        </div>
        <div>
          <Gallery2Item src={Image5} />
        </div>
        <div>
          <Gallery2Item src={Image6} />
        </div>
        <div>
          <Gallery2Item src={Image7} />
        </div>
        <div>
          <Gallery2Item src={Image8} />
        </div>
        <div>
          <Gallery2Item src={Image9} />
        </div>
      </Carousel>
    </div>
  );
}

export default Gallery2;
