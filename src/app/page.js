import { AmazonKindle, AutoPlaySlider, Button, CTA, Hero, Portfolio, SecondFoldHomePage, Services, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, WhyChosse } from "@/components";
import Image from "next/image";




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

  return (
    <>
      <Hero />
      <SecondFoldHomePage />
      <Portfolio />
      <Services />
      <WhyChosse />
      <AmazonKindle /> 
    


    
      {/* AMAZON KINDLE  */}


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

