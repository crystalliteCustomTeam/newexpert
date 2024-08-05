import secondfold from 'media/Home/bookProcess.webp';
import Image from "next/image"
import { Input } from "@/components/ui/input";
import {  Button } from "@/components";

export default function SecondFoldHomePage() {
  return (
      <section className="py-[50px] md:py-0 md:pt-[80px] ">
        <div>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <div className="hidden md:block md:col-span-4 lg:col-span-4 xl:col-span-4 ">

                <Image src={secondfold} alt="new" className="md:w-full lg:max-w-[80%] mx-auto
                   object-contain" />
              </div>
              <div className=" col-span-8 xl:col-span-8  ">
                <h2 className="font-mono font-semibold xs:text-[35px] md:text-[30px] lg:text-[40px] xl:text-[50px]  leading-tight capitalize">Professional <span className='text-[#f90] font-bold'>Book Writers</span><br className="hidden xl:block" /> are here to help you! </h2>
                <p className="mt-3 2xl:mt-5 xs:text-justify text-[15px] md:text-[12px] lg:text-[14px] xl:text-[16px] leading-loose">At our core, we believe in the power of every story. Our dedicated book writers bring your ideas to life with meticulous care and craftsmanship. Achieving excellence requires unwavering commitment and hard work, qualities ingrained in our team. To craft compelling narratives, we rely on gathering the essential details from our manuscript writing project brief—the foundational step toward your success.</p>

                <div className="border-2  relative rounded-md bg-white-100 shadow-lg mt-5 2xl:mt-10 p-5 bg-[#0e2033]">
                  <h2 className="font-mono font-semibold text-[30px] md:text-[20px] lg:text-[30px] xl:text-[30px] leading-tight capitalize text-white">Ignite Your Strory <span className='text-[#f90] font-extrabold border-b-2 border-[#f90]'>Get Started Now</span> </h2>
                  <form className="mt-5">
                    <div className="grid grid-cols-12 gap-3 xl:gap-5">
                      <div className=" xl:my-3 xs:col-span-12 col-span-6 xl:col-span-3">
                        <Input name="FullName" placeholder="Enter Your Name" className="md:h-8  lg:h-9 xl:h-11  " />
                      </div>
                      <div className=" xl:my-3 xs:col-span-12 col-span-6 xl:col-span-3">
                        <Input name="ClientEmail" placeholder="Enter Your Email" className="md:h-8 lg:h-9 xl:h-11  " />
                      </div>
                      <div className=" xl:my-3  xs:col-span-12 col-span-6 xl:col-span-3">
                        <Input name="ClientPhone" placeholder="Enter Your Phone" className="md:h-8 lg:h-9 xl:h-11  " />
                      </div>

                      <div className=" xl:my-3 xs:col-span-12 col-span-6 xl:col-span-3">
                        <Button className="md:h-8 lg:h-9 xl:h-11   w-full">Send</Button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='mt-6'>
                  <p className='text-black  sm:text-[13px] md:text-[10px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] leading-[24px]  font-semibold  flex'>Rated 9 out of 10 <span className="hidden sm:flex mx-3 ">
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
  )
}
