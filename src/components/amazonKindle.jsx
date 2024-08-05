import { AutoPlaySlider, CTA  } from "@/components";
import kindle from "media/Home/kindle.png";
import Image from "next/image";
export default async function  amazonKindle() {
    const booksImages = await getBookstop();
  return (
   
    <section >
    <div className="py-[90px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-5 items-center">
          <div className="col-span-12 md:col-span-8 ">
            <h5 className="font-sans text-[25px] md:text-[20px] 2xl:text-[25px] capitalize font-semibold text-[#f90]">Stop worrying about publishing books!</h5>
            <h3 className="font-mono text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[40px] capitalize font-semibold mt-3 leading-snug">Let Our Best  Amazon Kindle Direct Publishing (KDP) Service Providers Handle All Your Publishing Troubles!</h3>
            <div className="mt-5">
              <AutoPlaySlider >
                {
                  booksImages.map((books, i) => (
                    <div key={i} className="grow-0 shrink-0 basis-[85%] sm:basis-[20%] md:basis-[25%] lg:basis-[20%] min-w-0 pl-4 ">
                      <Image src={books.featured_image_url} width={300} height={80} alt="Book Writing Experts" className=" border-4  border-t-[#0e2033] border-l-[#0e2033] border-r-[#f90] border-b-[#f90]" />
                    </div>
                  ))
                }

              </AutoPlaySlider>
              <div className='flex gap-5 '>
                <CTA text="lets Discusss" className=' capitalize bg-transparent text-[#0e2033] border-[#0e2033] border-2' />
                <CTA text="(855) 500 0057" className='capitalize' />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="relative">
              <Image src={kindle} alt="book" className="hidden md:block" />
              <video tabIndex={0} loop autoPlay muted playsInline aria-label="Video Player" className="relative md:absolute   md:top-[34px] md:left-[46px] lg:top-[44px] lg:left-[61px] xl:top-[54px] xl:left-[74px] 2xl:top-[64px] 2xl:left-[88px] right-0 bottom-0 md:w-[144px] md:h-[193px] lg:w-[189px] lg:h-[256px] xl:w-[232px] xl:h-[314px] 2xl:h-[370px] 2xl:w-[273px] object-fill ">
                <source src='https://player.vimeo.com/progressive_redirect/playback/950057618/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2f66c3a010fb9e04ad78b5c128befb1500e0bd02d8fd397b7c074615bd7e4f21' type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
  )
}


async function getBookstop() {
    const res = await fetch('https://inhouse.cryscampus.com/wordpress/bwe/wp-json/wp/v2/publishbooks?orderby=date&order=asc');
    const data = await res.json();
  
    // Fetch featured images
    const postsWithImages = await Promise.all(
      data.map(async (post) => {
        if (post.featured_media) {
          const mediaRes = await fetch(`https://inhouse.cryscampus.com/wordpress/bwe/wp-json/wp/v2/media/${post.featured_media}`);
          const mediaData = await mediaRes.json();
          return { ...post, featured_image_url: mediaData.source_url };
        } else {
          return { ...post, featured_image_url: '/path/to/default/image.jpg' }; // Use your default image path
        }
      })
    );
  
    return postsWithImages;
  
  }

  