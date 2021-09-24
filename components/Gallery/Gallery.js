import GalleryItem from './GalleryItem';
import {
  PhotographIcon,
  PlayIcon,
  PuzzleIcon,
  ServerIcon,
  TemplateIcon,
} from '@heroicons/react/outline';

function Gallery() {
  return (
    <div className='lg:flex justify-center p-6 m-auto max-w-md sm:max-w-screen-sm md:max-w-screen-md lg:max-w-full'>
      <GalleryItem
        alt='strategy'
        src='/strategy-emp.jpg'
        title='Strategy'
        description='Digital strategy building and brand management'
        Icon={PuzzleIcon}
      />
      <GalleryItem
        alt='design'
        src='/design-emp.jpg'
        title='Branding & Design'
        description='Branding and design, using updated UI/UX strategies and product designs'
        Icon={TemplateIcon}
      />
      <GalleryItem
        alt='development'
        src='/develop-emp.jpg'
        title='Development'
        description='Website and mobile development plus e-commerce site developments'
        Icon={ServerIcon}
      />
      <GalleryItem
        alt='content'
        src='/content-emp.jpg'
        title='Social & Content'
        description='Building your social and online content to suit your targeted audience'
        Icon={PhotographIcon}
      />
      <GalleryItem
        alt='advertising'
        src='/ads-emp.jpg'
        title='Advertising'
        description='Online advertising using Google and SEO strategies to expand your visibility'
        Icon={PlayIcon}
      />
    </div>
  );
}

export default Gallery;
