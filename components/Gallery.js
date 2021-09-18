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
    <div className=''>
      <GalleryItem
        src='/strategy-emp.jpg'
        title='Strategy'
        description='Digital strategy building and brand management'
        Icon={PuzzleIcon}
      />
      <GalleryItem
        src='/design-emp.jpg'
        title='Branding & Design'
        description='Branding and design, using updated UI/UX strategies and product designs'
        Icon={TemplateIcon}
      />
      <GalleryItem
        src='/develop-emp.jpg'
        title='Development'
        description='Website and mobile development plus e-commerce site developments'
        Icon={ServerIcon}
      />
      <GalleryItem
        src='/content-emp.jpg'
        title='Social & Content'
        description='Building your social and online content to suit your targeted audience'
        Icon={PhotographIcon}
      />
      <GalleryItem
        src='/ads-emp.jpg'
        title='Advertising'
        description='Online advertising using Google and SEO strategies to expand your visibility'
        Icon={PlayIcon}
      />
    </div>
  );
}

export default Gallery;
