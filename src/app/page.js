import { AutoPlaySlider, AutoScrollSlider, Button, CTA, Hero, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components";
import Image from "next/image";
import lines from "media/Home/lines.png";
import kindle from "media/Home/kindle.png";
import whychoose from "media/Home/world.png";
import secondfold from 'media/Home/bookProcess.webp';
import { Input } from "@/components/ui/input";
import face1 from 'media/Faces/f1.png';
import face2 from 'media/Faces/f2.png';
import face3 from 'media/Faces/f3.png';
import face4 from 'media/Faces/f4.png';
import face5 from 'media/Faces/f5.png';
import face6 from 'media/Faces/f6.png';
import face7 from 'media/Faces/f7.png';
import face8 from 'media/Faces/f8.png';
import face9 from 'media/Faces/f9.png';
import face10 from 'media/Faces/f10.png';
import face11 from 'media/Faces/f11.png';
import face12 from 'media/Faces/f12.png';
import face13 from 'media/Faces/f13.png';
import face14 from 'media/Faces/f14.png';
import face15 from 'media/Faces/f15.png';
import face16 from 'media/Faces/f16.png';
import face17 from 'media/Faces/f17.png';
import face18 from 'media/Faces/f18.png';
import face19 from 'media/Faces/f19.png';
import face20 from 'media/Faces/f20.png';
import face21 from 'media/Faces/f21.png';



import Link from "next/link";

export default async function Home() {
  const booksImages = await getBookstop();
  const booksImagesDec = await getBooksbottom();

  return (
    <>
      <Hero />
      {/* SECOND FOLD  */}
      <section className="pt-[90px]">
        <div>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-12 lg:col-span-5 xl:col-span-4 ">

                <Image src={secondfold} alt="new" className="max-w-[80%] mx-auto
                   object-contain" />
              </div>
              <div className=" lg:col-span-7 xl:col-span-8  ">
                <h2 className="font-mono font-semibold xs:text-[35px] text-[45px] xl:text-[45px] 2xl:text-[50px] leading-tight capitalize">Professional <span className='text-[#f90] font-bold'>Book Writers</span><br className="hidden xl:block" /> are here to help you! </h2>
                <p className="mt-5 xs:text-justify xs:text-[15px] lg:text-[14px] xl:text-[16px] leading-loose">At our core, we believe in the power of every story. Our dedicated book writers bring your ideas to life with meticulous care and craftsmanship. Achieving excellence requires unwavering commitment and hard work, qualities ingrained in our team. To craft compelling narratives, we rely on gathering the essential details from our manuscript writing project brief—the foundational step toward your success.</p>

                <div className="border-2  relative rounded-md bg-white-100 shadow-lg mt-10 p-5 bg-[#0e2033]">
                  <h2 className="font-mono font-semibold xs:text-[35px] text-[45px] xl:text-[45px] 2xl:text-[30px] leading-tight capitalize text-white">Ignite Your Strory <span className='text-[#f90] font-extrabold border-b-2 border-[#f90]'>Get Started Now</span> </h2>
                  <form className="mt-5">
                    <div className="grid grid-cols-12 gap-5">
                      <div className="my-3 col-span-3">
                        <Input name="FullName" placeholder="Enter Your Name" className="h-11" />
                      </div>
                      <div className="my-3 col-span-3">
                        <Input name="ClientEmail" placeholder="Enter Your Email" className="h-11" />
                      </div>
                      <div className="my-3 col-span-3">
                        <Input name="ClientPhone" placeholder="Enter Your Phone" className="h-11" />
                      </div>

                      <div className="my-3 col-span-3">
                        <Button className="h-11 w-full">Send</Button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <div className="mt-10">
                  <Image src={awards} alt={process.env.NEXT_PUBLIC_WEBSITE_ALT_TAGS} className="hidden sm:block" />
                </div> */}
                <div className='mt-6'>
                  <p className='text-black text-[11px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] leading-[24px]  font-semibold  flex'>Rated 9 out of 10 <span className=" mx-3 hidden md:flex">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio FOLD  */}
      <section className="py-[90px] bg-[#0e2033]">
        <div>
          <div className="container">
            <div className="grid grid-cols-12 gap-5 items-center">
              <div className="col-span-5">
                <h2 className="text-white font-mono font-semibold text-[35px] mb-5">We Have Supported Countless Writers Get <span className='text-[#f90] font-extrabold  '>Best Selling Books Published </span>Under Their Name <span className='text-[#f90] font-extrabold  '>.</span></h2>
                <p className="text-white xl:text-[16px] leading-loose ">Our experienced publishing service providers remove the hurdles of publishing books. From printing and publishing to distribution and marketing books on a global level, we take the writers through all.</p>
                <div className='flex gap-5 mt-5'>
                  <CTA text="lets Discusss" className=' capitalize bg-transparent border-[#f90] border-2' />
                  <CTA text="(855) 500 0057" className='capitalize' />
                </div>
              </div>
              <div className="col-span-7">
                <div className="mb-4">
                  <AutoScrollSlider >
                    {
                      booksImages.map((books, i) => (
                        <div key={i} className="grow-0 shrink-0 basis-[85%] lg:basis-[23%] min-w-0 pl-4 ">
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
                        <div key={i} className="grow-0 shrink-0 basis-[85%] lg:basis-[23%] min-w-0 pl-4 ">
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
      {/* Services FOLD */}



      <section className="py-[90px]">
        <div>
          <div className="container">
            <div>
              <h2 className="text-center font-mono text-[50px] font-semibold">Our Services</h2>
              <p className="text-[16px] leading-relaxed text-black text-center">We believe that every story is worth sharing. Our book writer for hire put effort into executing your idea to perfection.</p>
            </div>


            <div className="grid grid-cols-3 gap-8 mt-20">
              {
                [
                  {
                    title: "Book <span class='text-[#f90] font-extrabold '>Editing</span>",
                    desc: "Once your ideas are on paper, you need an expert’s eye to look for the red flags. Book editing can be a tiresome and redundant process for which we have experts running the show. Book Writing Expert enhances your book’s vocabulary and sentence formations, in order to provide your readers a refined product.",
                    link: "/",
                  },
                  {
                    title: "Book <span class='text-[#f90] font-extrabold  '>Writing</span> ",
                    desc: "From our writing approach to phrasing selection, we're all about creating riveting stories of any length or type. Let us handle your project from beginning to end with absolute finesse since, when you have professionals like us on your team, no responsibility is too huge.",
                    link: "/",
                  },
                  {
                    title: "Book <span class='text-[#f90] font-extrabold  '>Publishing Services </span> ",
                    desc: "Book Writing Expert is one of the most preferred publishing agencies, specializing in book publishing on all platforms. Having assisted thousands of fiction/non-fiction writers become documented authors. We guarantee you a completely seamless publication process.",
                    link: "/",
                  },
                  {
                    title: "Article <span class='text-[#f90] font-extrabold  '> Publication </span> ",
                    desc: "Content creation has always been an automated process to us. Writing blogs and Articles and publishing them is an easy task for us. Our job doesn’t end once we’re done publishing, we also share it on multiple online platforms in order to gain traction to your content.",
                    link: "/",
                  },
                  {
                    title: "Children’s  <span class='text-[#f90] font-extrabold  '>Book Publication</span>  ",
                    desc: "Publishing children's books is no easy undertaking. Even though the book is only a little over 100 pages long, not everything appeals to these tiny beings. It takes several rewrites and re-drafts to concisely express an idea with a clear message, and we are here to assist.",
                    link: "/",
                  },
                  {
                    title: "E-Book <span class='text-[#f90] font-extrabold  '>Writing</span> ",
                    desc: "Professional eBook writing increases traffic, and our experienced authors are aware of the best practices for retaining readers through compelling word choice. When it comes to custom eBook writing services, we are the best choice. Try collaborating with us! You won't regret doing it!",
                    link: "/",
                  },
                  {
                    title: "Children's <span class='text-[#f90] font-extrabold  '>Book Illustrations</span> ",
                    desc: "Kids may be choosy and unfiltered when they want to be with the things that are offered to them! That does not mean they are impartial. They pick up the book and flip over the pages to evaluate whether the illustrations and designs appeal to them. Give them books they'll be eager to return to time and time again!",
                    link: "/",
                  },
                  {
                    title: "Book  <span class='text-[#f90] font-extrabold  '> Marketing </span> ",
                    desc: "Stop getting lost in the mix with our remarkable book marketing services! We advertise and promote your book in the most efficient way possible, taking it from the back of the shelf to the top of the bestseller list. We are the marketing & promotion specialists for the books you require.",
                    link: "/",
                  }
                ].map(({ title, desc, link }, i) => (
                  <div key={i} className="p-7 border-2 rounded-[10px]   flex justify-between flex-col before:content-[''] hover:before:h-[100%] hover:before:w-[100%] before:top-[-10px]  before:left-[-10px]  relative before:w-[30px] before:h-[30px] before:bg-[#f90] before:absolute bg-white before:-z-10  before:rounded-tl-[10px]  after:content-[''] after:bottom-[-10px]  after:right-[-10px] after:w-[30px] hover:after:w-[100%] after:h-[30px] hover:after:h-[100%] after:bg-[#0e2033] after:absolute  after:rounded-br-[10px] after:-z-10 before:transition-all before:duration-1000 after:transition-all after:duration-1000 ">

                    <h3 className="font-mono font-semibold text-[25px] mb-5 " dangerouslySetInnerHTML={{ __html: title }} />
                    <p className="mb-5 leading-relaxed text-[15px] text-gray-500">{desc}</p>
                    <Link href={link} className="border-b-2 border-[#f90]">Read More</Link>
                  </div>
                ))
              }


              <div className="p-7 border-2 rounded-[10px] h-full overflow-hidden flex justify-between flex-col bg-[#f90]">
                <h3 className="font-sans font-semibold text-[35px] mb-2 text-white capitalize leading-snug">Book a call with one of <span className='text-gray-900 font-extrabold  '>our experts </span> </h3>
                <p className="mb-5 leading-relaxed text-white ">Book a call with one of our experts get a customized solution by best publishing services Book Writing Experts Is waiting for you to Ask for a Professional Writer.</p>
                <div className='flex gap-5 mt-3'>
                  <CTA text="lets Discusss" className='!bg-[#0e2033] capitalize bg-transparent border-gray-900 border-2' />

                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="">
        <div className="relative z-10 py-[90px] bg-[#0e2033]">
          <Image src={lines} alt="ABC" fill={true} className="-z-10 object-cover opacity-10" />
          <div className="container">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <h3 className="text-[50px] text-white font-mono font-semibold leading-snug">Why Choose <br /> <span className="text-[#f90] font-black">Book Writing Expert</span>?</h3>
                <p className="text-white leading-relaxed mt-5">We are well aware of unique content creation requirements for each client. With a team equipped with a wide array of expertise, experiences and knowledge, we are always an author’s top preference. Book Writing Expert will simplify the Writing, Editing, Publication and Marketing needs for you. Our collaboration would be transparent and hassle-free, reducing all the intricacies from your end. We only deliver content that is remarkable, genuine and original.</p>
                <div className="grid grid-cols-3 gap-5 mt-7">
                  <div className="border-2 border-white p-3 rounded-sm hover:border-[#f90] hover:cursor-pointer ">
                    <h4 className="text-white text-[18px] text-center">Research</h4>
                  </div>
                  <div className="border-2 border-white p-3 rounded-sm hover:border-[#f90] hover:cursor-pointer">
                    <h4 className="text-white text-[18px] text-center">Customer Service</h4>
                  </div>
                  <div className="border-2 border-white p-3 rounded-sm hover:border-[#f90] hover:cursor-pointer">
                    <h4 className="text-white text-[18px] text-center">Native Speaker</h4>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-5 mt-5">
                  <div className="border-2 border-white p-3 rounded-sm hover:border-[#f90] hover:cursor-pointer">
                    <h4 className="text-white text-[18px] text-center">Privacy Guaranted</h4>
                  </div>
                  <div className="border-2 border-white p-3 rounded-sm hover:border-[#f90] hover:cursor-pointer">
                    <h4 className="text-white text-[18px] text-center">Experienced Writers</h4>
                  </div>
                  <div className="border-2 bg-[#f90] border-[#f90] p-3 rounded-sm">
                    <h4 className="text-white text-[18px] text-center">Get Started Now</h4>
                  </div>

                </div>
              </div>
              <div >
                <Image src={whychoose} alt="boo" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMAZON KINDLE  */}

      <section >
        <div className="py-[90px]">
          <div className="container">
            <div className="grid grid-cols-12 gap-5 items-center">
              <div className="col-span-8 ">
                <h5 className="font-sans text-[25px] capitalize font-semibold text-[#f90]">Stop worrying about publishing books!</h5>
                <h3 className="font-mono text-[40px] capitalize font-semibold mt-3 leading-snug">Let Our Best Amazon Kindle Direct Publishing (KDP) Service Providers Handle All Your Publishing Troubles!</h3>
                <div className="mt-5">
                  <AutoPlaySlider >
                    {
                      booksImages.map((books, i) => (
                        <div key={i} className="grow-0 shrink-0 basis-[85%] lg:basis-[20%] min-w-0 pl-4 ">
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
              <div className="col-span-4">
                <div className="relative">
                  <Image src={kindle} alt="book" />
                  <video tabIndex={0} loop autoPlay muted playsInline aria-label="Video Player" className="absolute top-[64px] left-[88px] right-0 bottom-0 h-[370px] w-[273px] object-fill ">
                    <source src='https://player.vimeo.com/progressive_redirect/playback/950057618/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2f66c3a010fb9e04ad78b5c128befb1500e0bd02d8fd397b7c074615bd7e4f21' type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section>
        <div className="py-[90px] bg-slate-50">
          <div className="container">
            <div className="text-center">
              <h2 className="text-[50px] font-mono capitalize font-semibold">Where <span className="text-[#f90] font-bold">success speaks</span>  for itself <br /> hear what our clients have to say!</h2>
              <p className="text-[16px] text-black mx-[15%] mt-5 text-center">Our seasoned marketing professionals expertly employ advanced, effective techniques to
                boost your literal presence. Our seasoned marketing professionals</p>
              <div className="mt-14 flex  gap-5 items-center justify-center">
                <TooltipProvider>
                  {
                    [
                      {
                        image: face1,
                        name: "Cristian Venegas",
                        comment: "Book Writing Experts exceeded my expectations in every way. They were patient and understanding, providing excellent feedback and support throughout the entire process. My book is now published and receiving great reviews. I couldn't have done it without them",
                        color: "bg-yellow-300"
                      },
                      {
                        image: face2,
                        name: "Remy Despres",
                        comment: "I can't thank Book Writing Experts enough for their outstanding service. They took my rough draft and transformed it into a polished, professionally written book. Their marketing strategies also helped boost my sales significantly. I'm grateful for their dedication and expertise.",
                        color: "bg-red-300"
                      },
                      {
                        image: face3,
                        name: "Dante Fede",
                        comment: "From the moment I contacted Book Writing Experts, I knew I was in good hands. They handled every aspect of my book, from writing and editing to publishing and marketing. The team is incredibly knowledgeable and made the entire process stress-free. My book is now a bestseller, thanks to their expertise!",
                        color: "bg-blue-300"
                      },
                      {
                        image: face4,
                        name: "Hannes Ingimar",
                        comment: "Our marketing strategy for digital books was huge success. The team came up with a thorough plan that increased sales and exposure for our book. Their proficiency in email campaigns, SEO and social media marketing was vital. The reader interaction significantly increased, and the results were far above our expectations. We heartily recommend the marketing services provided by Book Writing Experts.",
                        color: "bg-purple-300"
                      },
                      {
                        image: face5,
                        name: "Annunciata Rocca",
                        comment: "Our experience working with BWE to produce our audiobook was excellent. The way she spoke was outstanding and did a fantastic job of bringing our narrative to life. Clear communication and regular updates characterized the faultless production process. Their technological know-how made for perfect editing and sound quality. The finished result and kind words from our listeners make us ecstatic.",
                        color: "bg-yellow-300"
                      },
                      {
                        image: face10,
                        name: "Paloma Delafuente",
                        comment: "Brain Jeffords from Book Writing Experts provided excellent guidance throughout the book marketing process. His expertise significantly boosted the visibility of my book.",
                        color: "bg-red-300"
                      },
                      {
                        image: face6,
                        name: "Evaine Bolton",
                        comment: "My story came to life with such rich emotional depth and detailed description thanks to their writing team. Excellent communication was maintained throughout the entire process, which ran smoothly and professionally. I am ecstatic about the finished product and am eager to present it to everyone. I heartily recommend Book Writing Experts to anyone trying to create an engaging story!",
                        color: "bg-green-300"
                      },
                      {
                        image: face7,
                        name: "Wilson Whistler",
                        comment: "Our book was expertly formatted and prepared for publishing by Book Writing Experts. Their attention to detail made sure that every component__ including the layout and fonts__ was precisely aligned. The procedure went smoothly and efficiently, with great communication all along the way. We are pleased to offer our readers a well-edited book that goes beyond our first expectation.",
                        color: "bg-red-300"
                      },
                      {
                        image: face8,
                        name: "Morth Hayward",
                        comment: "They produced a fantastic book trailer that effectively conveyed the main ideas of our narrative. The compelling storyline and excellent visuals in the teaser garnered a lot of interest on social media and other channels. Every frame showcased the team's technical prowess and creativity. the work was completed to perfection, and the trailer has been an excellent means of book promotion.",
                        color: "bg-purple-300"
                      },
                      {
                        image: face9,
                        name: "Kelvin Franklin",
                        comment: "Working with Stella Rose on my book's marketing strategy was a game-changer. Her innovative approach not only broadened my audience but also took the success of my book to unprecedented levels. The level of service she delivered went above and beyond what I had hoped for.",
                        color: "bg-blue-300"
                      },
                      {
                        image: face21,
                        name: "Cawrolf",
                        comment: "Book Writing Experts provided us excellent Web content for our project. Our internet presence was greatly enhanced by the team's creative and SEO-friendly content, which showed a thorough mastery of our niche. They deserve praise for their care and dedication to meeting deadline. we immediately saw a rise in user engagement and website traffic.. I strongly recommend their competence and polished demeanor!",
                        color: "bg-green-300"
                      },
                    ].map(({ image, name, comment, color }, i) => (

                      <Tooltip key={i}>
                        <TooltipTrigger> <Image src={image} alt="avc" className={`rounded-full ${color} w-[80px] h-[80px] hover:scale-95  hover:border-2 hover:border-black transition-all duration-700`} /></TooltipTrigger>
                        <TooltipContent className="bg-white">
                          <div className="p-7 border-2 rounded-[10px] text-left  flex justify-around flex-col before:content-[''] hover:before:h-[100%] hover:before:w-[100%] before:top-[-10px]  before:left-[-10px]  relative before:w-[30px] before:h-[30px] before:bg-[#f90] before:absolute bg-white before:-z-10  before:rounded-tl-[10px]  after:content-[''] after:bottom-[-10px]  after:right-[-10px] after:w-[30px] hover:after:w-[100%] after:h-[30px] hover:after:h-[100%] after:bg-[#0e2033] after:absolute  after:rounded-br-[10px] after:-z-10 before:transition-all before:duration-1000 after:transition-all after:duration-1000 ">

                            <div className="flex mb-5">
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
                            </div>
                            <p className="mb-5 leading-relaxed text-[15px] text-gray-500">{comment}</p>
                            <p className="text-[14px]">{name}</p>
                          </div>
                        </TooltipContent>
                      </Tooltip>

                    ))
                  }
                </TooltipProvider>
              </div>
              <div className="mt-2 flex  gap-5 items-center justify-center">
                <TooltipProvider>
                  {
                    [
                      {
                        image: face11,
                        name: "Oskar Grim",
                        comment: "Great experience! The team is professional and attentive. My book looks fantastic!",
                        color: "bg-purple-300"
                      },
                      {
                        image: face12,
                        name: "Logan Picard",
                        comment: "The quick response from Book Experts impressed me. They have a genuine understanding of their client,s needs!",
                        color: "bg-green-300"
                      },
                      {
                        image: face13,
                        name: "Aiden Hindergrass",
                        comment: "I struggled with my book's structure and flow until I got in touch with Book Writing Experts. Their book editing service was thorough, improving my work significantly. The team is friendly and very supportive.",
                        color: "bg-red-300"
                      },
                      {
                        image: face14,
                        name: "Dona Archard",
                        comment: "The article writing service provided by Book Writing Experts greatly enhanced my website's engagement. The content was not only well-researched but also captivating. Their team is a bunch of highly skilled professionals.",
                        color: "bg-blue-300"
                      },
                      {
                        image: face15,
                        name: "Logan ain Miller",
                        comment: "Writing a business plan helped us get the capital we needed for our startup. They created a thorough and organized business plan that spelled out our goals and tactics with clarity. We were given a solid business foundation by the team's obvious proficiency in financial predictions and market research. The professionalism and commitment of Book Writing Experts were much appreciated.",
                        color: "bg-purple-300"
                      },
                      {
                        image: face16,
                        name: "Nicolass Martins",
                        comment: "I was pleased with the Book Writing Experts' fast and timely updates. Their diligence is evident in all they do!",
                        color: "bg-yellow-300"
                      },
                      {
                        image: face17,
                        name: "Kaleb Stewart",
                        comment: "The professionalism at Book Writing Experts is unparalleled. They took my rough manuscript and turned it into a masterpiece. The book editing and publishing process were smooth and hassle-free. A big thanks to the team.",
                        color: "bg-green-300"
                      },
                      {
                        image: face18,
                        name: "Salazar Mallory",
                        comment: "Book Writing Experts turned my manuscript into a masterpiece. Their editing and ghostwriting services are second to none. I couldn't have asked for a better partner in my writing journey.",
                        color: "bg-yellow-300"
                      },
                      {
                        image: face19,
                        name: "Nathaniel Tiller",
                        comment: "They provided us with skilled and versed guidance throughout the book publishing process. Book Writing Expert's assistance was outstanding from the time of final publication. the remarkable degree of care and attention to detail made our publishing process enjoyable.",
                        color: "bg-red-300"
                      },
                      {
                        image: face20,
                        name: "Barbara Woncollins",
                        comment: "For anyone looking for top-notch ghostwriting services, look no further. The creativity and attention to detail from team at Book Writing Experts were exceptional. My story has never looked better.",
                        color: "bg-purple-300"
                      },




                    ].map(({ image, name, comment, color }, i) => (

                      <Tooltip key={name} delayDuration={500}>
                        <TooltipTrigger> <Image src={image} alt="Book Writing Experts" className={`rounded-full ${color} w-[80px] h-[80px] hover:scale-95  hover:border-2 hover:border-black transition-all duration-700`} /></TooltipTrigger>
                        <TooltipContent className="bg-white">
                          <div className="p-7 border-2 rounded-[10px] text-left  flex justify-around flex-col before:content-[''] hover:before:h-[100%] hover:before:w-[100%] before:top-[-10px]  before:left-[-10px]  relative before:w-[30px] before:h-[30px] before:bg-[#f90] before:absolute bg-white before:-z-10  before:rounded-tl-[10px]  after:content-[''] after:bottom-[-10px]  after:right-[-10px] after:w-[30px] hover:after:w-[100%] after:h-[30px] hover:after:h-[100%] after:bg-[#0e2033] after:absolute  after:rounded-br-[10px] after:-z-10 before:transition-all before:duration-1000 after:transition-all after:duration-1000 ">

                            <div className="flex mb-5">
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
                            </div>
                            <p className="mb-5 leading-relaxed text-[15px] text-gray-500">{comment}</p>
                            <p className="text-[14px]">{name}</p>
                          </div>
                        </TooltipContent>
                      </Tooltip>

                    ))
                  }
                </TooltipProvider>

              </div>
              <div className='flex gap-5 mt-14 justify-center'>
                <CTA text="lets Discusss" className=' capitalize bg-transparent text-[#0e2033] border-[#0e2033] border-2' />
                <CTA text="(855) 500 0057" className='capitalize' />

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Form Section */}

      <section>
        <div className="py-[90px] bg-[#0e2033]">
          <div className="container">
            <div className="grid grid-cols-2 gap-5 items-center">
              <div>
                <h2 className="text-white text-[50px] font-mono font-semibold leading-tight">Let<span className="text-[#f90]">'</span>s Turn Your Book Into A Best Seller<span className="text-[#f90]">.</span></h2>
                <p className="text-white text-[16px] leading-relaxed mt-5">Best Selling Publisher stands as the pinnacle of excellence in the world of publishing services, renowned for its unparalleled commitment to author success. With a dedicated team of industry experts and innovative resources at their disposal, Best Selling Publisher goes above and beyond. <br /> <br /> Don't hesitate to reach out and take the first step towards literary success with one of the finest publishers in the industry.</p>
                <div className='flex gap-5 mt-5'>
                  <CTA text="lets Discusss" className=' capitalize bg-transparent text-white border-[#f90] border-2' />
                  <CTA text="(855) 500 0057" className='capitalize' />
                </div>
              </div>
              <div>
                <div className="bg-slate-50 py-14 px-8 border-[10px] border-t-[#f90] border-r-transparent border-b-transparent border-l-[#f90]">
                  <h2 className="text-black text-[35px] font-semibold capitalize leading-[1.1]">Discover your potential <br /> <small className="text-[#f90] text-[25px]">with a free quote today!</small></h2>
                  <p className="text-[16px] mt-2 ">Unlocking cost-effectiveness and consumer-centricity: redefining book marketing with finesse!</p>
                  <div className="">
                    <form action="">
                      <div className="grid grid-cols-12 gap-4 mt-5">
                        <div className="col-span-6"><Input name="FullName" placeholder="Enter Your Name" className="h-11 border-black" /></div>
                        <div className="col-span-6"><Input name="Email" placeholder="Enter Your Email" className="h-11 border-black" /></div>
                        <div className="col-span-6"><Input name="FullName" placeholder="Enter Your Phone Number" className="h-11 border-black" /></div>
                        <div className="col-span-6"><Input name="Email" placeholder="Enter Your Service" className="h-11 border-black" /></div>
                        <div className="col-span-12"><Input name="Email" placeholder="Enter Your Message" className="h-28 border-black" /></div>
                        <div className="col-span-12">
                          <Button className="h-11 w-full bg-black">Send</Button>
                        </div>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  );
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
