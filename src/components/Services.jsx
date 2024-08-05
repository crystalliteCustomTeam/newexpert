import {  CTA } from "@/components";
import Link from "next/link";
export default function Services() {
    return (
        <section className="py-[90px]">
            <div>
                <div className="container">
                    <div>
                        <h2 className="text-center font-mono xs:text-[35px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-semibold">Our Services</h2>
                        <p className="text-[16px] md:text-[12px] lg:text-[16px] leading-relaxed text-black text-center">We believe that every story is worth sharing. Our book writer for hire put effort into executing your idea to perfection.</p>
                    </div>


                    <div className="grid grid-cols-12  gap-8 mt-20">
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
                                <div key={i} className="col-span-12 md:col-span-6 xl:col-span-4 p-7 border-2 rounded-[10px]   flex justify-between flex-col before:content-[''] hover:before:h-[100%] hover:before:w-[100%] before:top-[-10px]  before:left-[-10px]  relative before:w-[30px] before:h-[30px] before:bg-[#f90] before:absolute bg-white before:-z-10  before:rounded-tl-[10px]  after:content-[''] after:bottom-[-10px]  after:right-[-10px] after:w-[30px] hover:after:w-[100%] after:h-[30px] hover:after:h-[100%] after:bg-[#0e2033] after:absolute  after:rounded-br-[10px] after:-z-10 before:transition-all before:duration-1000 after:transition-all after:duration-1000 ">

                                    <h3 className="font-mono font-semibold text-[25px] mb-5 " dangerouslySetInnerHTML={{ __html: title }} />
                                    <p className="mb-5 leading-relaxed text-[15px] text-gray-500">{desc}</p>
                                    <Link href={link} className="border-b-2 border-[#f90]">Read More</Link>
                                </div>
                            ))
                        }


                        <div className="col-span-12 xl:col-span-4 p-7 border-2 rounded-[10px] h-full overflow-hidden flex justify-between flex-col bg-[#f90]">
                            <h3 className="font-sans font-semibold  text-[35px] xl:text-[30px] 2xl:text-[35px] mb-2 text-white capitalize leading-snug">Book a call with one of <span className='text-gray-900 font-extrabold  '>our experts </span> </h3>
                            <p className="mb-5 leading-relaxed text-white ">Book a call with one of our experts get a customized solution by best publishing services Book Writing Experts Is waiting for you to Ask for a Professional Writer.</p>
                            <div className='flex gap-5 mt-3'>
                                <CTA text="lets Discusss" className='!bg-[#0e2033] capitalize bg-transparent border-gray-900 border-2' />

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>

    )
}
