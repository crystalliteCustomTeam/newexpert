import { AutoScrollSlider, CTA } from "@/components";
import Image from "next/image";

export default async function Portfolio() {
    const booksImages = await getBookstop();
    const booksImagesDec = await getBooksbottom();
    return (
        <section className="py-[90px] bg-[#0e2033]">
            <div>
                <div className="container">
                    <div className="grid grid-cols-12 gap-5 items-center">
                        <div className="mb-5 md:mb-0 col-span-12 md:col-span-6 xl:col-span-5">
                            <h2 className="text-white font-mono font-semibold xs:text-[25px] sm:text-[33px] md:text-[22px] lg:text-[29px] xl:text-[35px] mb-5">We Have Supported Countless Writers Get <span className='text-[#f90] font-extrabold  '>Best Selling Books Published </span>Under Their Name <span className='text-[#f90] font-extrabold  '>.</span></h2>
                            <p className="text-white text-[16px] md:text-[12px] lg:text-[16px] leading-loose ">Our experienced publishing service providers remove the hurdles of publishing books. From printing and publishing to distribution and marketing books on a global level, we take the writers through all.</p>
                            <div className='flex gap-5 mt-5'>
                                <CTA text="lets Discusss" className=' capitalize bg-transparent border-[#f90] text-[14px] lg:text-[15px] border-2 px-5 lg:px-10' />
                                <CTA text="(855) 500 0057" className='  capitalize !md:text-[14px]  !px-5 lg:px-10' />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 xl:col-span-7">
                            <div className="mb-4">
                                <AutoScrollSlider >
                                    {
                                        booksImages.map((books, i) => (
                                            <div key={i} className="grow-0 shrink-0 basis-[28%] lg:basis-[26%] xl:basis-[23%] min-w-0 pl-4 ">
                                                <Image src={books.featured_image_url} width={300} height={80} alt="Book Writing Experts" />
                                            </div>
                                        ))
                                    }

                                </AutoScrollSlider>
                            </div>
                            <div>
                                <AutoScrollSlider direction="rtl" >
                                    {
                                        booksImagesDec.map((books, i) => (
                                            <div key={i} className="grow-0 shrink-0 basis-[28%] lg:basis-[26%] xl:basis-[23%]  min-w-0 pl-4 ">
                                                <Image src={books.featured_image_url} width={300} height={80} alt="Book Writing Experts" />
                                            </div>
                                        ))
                                    }

                                </AutoScrollSlider>
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

async function getBooksbottom() {
    const res = await fetch('https://inhouse.cryscampus.com/wordpress/bwe/wp-json/wp/v2/publishbooks?orderby=date&order=desc');
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