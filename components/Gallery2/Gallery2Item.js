import Image from 'next/image';
function Gallery2Item({ src, alt }) {
  return (
    <div className='px-2 sm:px-3 lg:px-6'>
      <Image
        alt={alt}
        src={src}
        layout='responsive'
        height={100}
        width={200}
        className='object-cover object-center'
      />
    </div>
  );
}

export default Gallery2Item;
