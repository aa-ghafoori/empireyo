import Image from 'next/image';
import Button from './ui/Button';
function Part2() {
  return (
    <div className='flex flex-col lg:flex-row lg:items-stretch justify-center items-center p-6 border-b-[1px] border-[#676767] sm:max-w-screen-sm md:max-w-screen-md m-auto '>
      <div className='relative flex w-full h-80 lg:flex-1 lg:h-auto lg:mx-6 my-10 '>
        <Image src='/Building-emp.jpg' layout='fill' objectFit='cover' />
      </div>
      <div className='text-black pt-10 flex-1 lg:m-10'>
        <h2 className='font-bold text-3xl'>Impressive digital solutions.</h2>
        <p className='text-lg leading-8 pt-6'>
          Yet another day goes by, and you have not seen your company on a
          simple Google listing. What is the first thing you think about? You
          must be selling something that people want to buy, right? Well, we are
          here to show you that you are not in the wrong business; you are just
          not using social media and Google as you ought to.
        </p>
        <p className='text-lg leading-8 py-6'>
          But we have been in the business for years. What could possibly be
          wrong? It is easy to think that you are not to blame, which is quite
          right. The problem is not you; it is your digital strategy. Empireyo
          welcomes you to a world of digital possibilities by helping you come
          up with the right digital plan and adequately use Google tools to make
          your business shine longer than your competitors.
        </p>
        <Button href='/' bgColor='bg-white' textColor='text-[#d2aa4b]'>
          View Services
        </Button>
      </div>
    </div>
  );
}

export default Part2;
