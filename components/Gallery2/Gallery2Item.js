import Image from 'next/image';
function Gallery2Item({ src }) {
  return (
    <div>
      <Image src={src} layout='responsive' height={100} width={200} className='object-cover object-center' />
    </div>
  );
}

export default Gallery2Item;
