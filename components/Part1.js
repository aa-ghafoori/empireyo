import Button from './ui/Button';

function Part1() {
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(rgba(10, 10, 10, 0.827),rgba(10, 10, 10, 0.8)) ,url(./lotus-temple-.jpg)',
        width: '100%',
        height: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding: '96px 24px',
        color: 'white',
      }}
    >
      <div className=' responsive w-full lg:pt-10'>
        <h1 className='font-bold text-5xl '>
          The goal isn’t to build a platform. The goal is to build your
          business.
        </h1>
        <div className='py-10'>
          <p className='text-lg leading-8  '>
            Has your company embraced the digital world yet? If not, what are
            you waiting for? With amazing strategies, well researched digital
            campaigns plus branding and development services, Empireyo has every
            digital solution your company needs.
          </p>
          <p className='text-lg leading-8 py-6 '>
            It is time to do away with the analog way of running your business.
            Say goodbye to boring marketing campaigns and non-progressive
            branding ideas. Build your business from scratch as a digital giant.
            With Empireyo, it is not business as usual. We help you achieve
            quality, authenticity, simplicity, innovation, transparency, and
            customer focus.
          </p>
          <p className='text-lg leading-8  '>
            It is not a matter of what you can do for us but rather what we can
            do for you. <br />
            Let your business grow digitally with Empireyo.
          </p>
        </div>
        <Button href='/' bgColor='bg-[#d2aa4b]' textColor='text-white'>
          View Services
        </Button>
      </div>
    </div>
  );
}

export default Part1;
