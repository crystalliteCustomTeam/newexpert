import HomeBanner from 'media/Home/home-banner.jpg'
import underline from 'media/Home/underline2.webp'
import award1 from 'media/Home/award-mini1.png'
import award2 from 'media/Home/award-mini2.png'
import award3 from 'media/Home/award-mini3.png'
import award4 from 'media/Home/award-mini4.png'
import award5 from 'media/Home/award-mini5.png'
import Image from 'next/image'
import { CTA } from '.'


export default function Hero() {
  return (
    <section>
      <div className='xs:h-[70vh] md:h-[80vh]  2xl:h-[700px]  flex items-center relative '>
        <Image src={HomeBanner} alt={process.env.NEXT_PUBLIC_WEBSITE_ALT_TAGS} fill={true} className='-z-10 object-cover object-right ' priority={true} unoptimized={true} />
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-black xs:opacity-80 opacity-70 xl:opacity-60 ' ></div>
        <div className="container z-10 ">
          <div className='grid grid-cols-12  items-center'>
            <div className='h-full  col-span-12 md:col-span-12 lg:col-span-7 xl:col-span-6 md:mx-[10%]'>
              <div className='mb-8 '>
                <h1 className='font-semibold md:text-center lg:text-left xs:text-[34px] sm:text-[40px] md:text-[40px] lg:text-[45px] xl:text-[45px] 2xl:text-[55px] text-white capitalize leading-tight font-mono'>Your <span className='text-[#f90] font-bold'>ONE-STOP </span> Book Editing And Publishing Service Provider!</h1>

                <p className='text-white text-[16px]  md:text-center lg:text-left   xl:text-[17px] font-light leading-relaxed 2xl:text-[18px] mt-5'>We understand being an author is a challenging yet respectable profession, but not everybody is lucky enough to become one.</p>
              </div>
              <div className='flex gap-5 md:justify-center lg:justify-start '>
                <CTA text="lets Discusss" className=' capitalize bg-transparent border-[#f90] border-2 ' />
                <CTA text="(855) 500 0057" className='capitalize' />
              </div>
              <div className='mt-10 '>
                <div className='grid grid-cols-5 gap-2  '>
                  <Image src={award1} alt={process.env.NEXT_PUBLIC_WEBSITE_ALT_TAGS} quality={95} className='sm:w-[80%]  w-[85%] lg:w-[90%]' />
                  <Image src={award2} alt={process.env.NEXT_PUBLIC_WEBSITE_ALT_TAGS} quality={95} className='sm:w-[80%]  w-[85%] lg:w-[90%]' />
                  <Image src={award3} alt={process.env.NEXT_PUBLIC_WEBSITE_ALT_TAGS} quality={95} className='sm:w-[80%]  w-[85%] lg:w-[90%]' />
                  <Image src={award4} alt={process.env.NEXT_PUBLIC_WEBSITE_ALT_TAGS} quality={95} className='sm:w-[80%]  w-[85%] lg:w-[90%]' />
                  <Image src={award5} alt={process.env.NEXT_PUBLIC_WEBSITE_ALT_TAGS} quality={95} className='sm:w-[80%]  w-[85%] lg:w-[90%]' />
                </div>
              </div>
              {/* <div className='mt-6'>
                <p className='text-white text-[11px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] leading-[24px]  font-light  flex'>Rated 9 out of 10 <span className=" mx-3 hidden md:flex">
                  <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6.4-4.6-6.4 4.6 2.4-7.4-6-4.6h7.6z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6.4-4.6-6.4 4.6 2.4-7.4-6-4.6h7.6z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6.4-4.6-6.4 4.6 2.4-7.4-6-4.6h7.6z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6.4-4.6-6.4 4.6 2.4-7.4-6-4.6h7.6z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6.4-4.6-6.4 4.6 2.4-7.4-6-4.6h7.6z" />
                  </svg>
                </span>
                  based on more than 3,540 satisfied customers.</p>
              </div> */}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
