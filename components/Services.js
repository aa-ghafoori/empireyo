import Button from './ui/Button';
import Image from 'next/image';

function Services() {
  return (
    <div className='p-6 py-14 border-b-[1px] border-[#676767] responsive text-lg leading-8 lg:grid lg:grid-cols-2'>
      <div className='px-6'>
        <h2 className='text-3xl font-semibold mt-12'>Trustable Services</h2>
        <p className='my-8'>
          Companies look for trustable services, and we are here to play the
          role. It is not just a matter of being another company offering
          digital solutions; we pride ourselves in offering unique strategies
          that have been tested and proven over time. We are loved by over
          twenty companies in five different countries and have proven to be
          trustable and easy to work with
        </p>
        <p>
          Our <strong>core values</strong> include:
        </p>
        <p className='my-8'>
          <span className='font-bold text-[#b08a31]'>Simplicity</span> – Our
          solutions will not break your head or bank as you try to figure things
          out. We keep it simple so that our clients can understand how their
          businesses are viewed in the market place.
        </p>
        <p>
          <span className='font-bold text-[#b08a31]'>Quality</span> – You get
          value for every coin you spend for the betterment of your brand. Our
          solutions are all rounded and trustable, and they have been proven to
          work for years.
        </p>
        <p className='my-8'>
          <span className='font-bold text-[#b08a31]'>Authenticity</span> – We do
          not just promise better digital performance; we make sure that it
          happens. We are mindful of your brand’s voice and seek to portray it
          in the best way so your potential customers can come to you as a
          trusted supplier.
        </p>
        <p>
          <span className='font-bold text-[#b08a31]'>Transparency</span> – Work
          with us, and you will not have to worry about hidden costs and
          unpredictable performance. We play fair from the beginning with the
          aim of cultivating long-term partners.
        </p>
        <p className='my-8'>
          <span className='font-bold text-[#b08a31]'>Innovative</span> – The
          digital space is all about evolution. What worked years ago may not
          work today. We are always ahead of the curve, making sure that we are
          at par with digital trends, so your business remains at the top as
          well.
        </p>
        <p>
          <span className='font-bold text-[#b08a31]'>Customer focus</span> – We
          focus on our clients and help them win big and expand as much as you
          can in the digital environment. We listen, we care, and we offer
          trustable solutions.
        </p>
        <div className='my-4 -ml-8 '>
          <Button href='/' bgColor='bg-white' textColor='text-[#d2aa4b]'>
            About Us
          </Button>
        </div>
      </div>
      <div className='relative w-full min-h-[400px]'>
        <Image
          src='/marina.jpg'
          layout='fill'
          objectFit='cover'
          className='object-center'
        />
      </div>
    </div>
  );
}

export default Services;
