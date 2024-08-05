import Image from 'next/image'
import React from 'react'
import lines from "media/Home/lines.png";
import whychoose from "media/Home/world.png";

export default function WhyChosse() {
  return (
    <section className="">
    <div className="relative z-10 py-[50px] lg:py-[90px] bg-[#0e2033]">
      <Image src={lines} alt="ABC" fill={true} className="-z-10 object-cover opacity-10" />
      <div className="container">
        <div className="grid grid-cols-12 xs:gap-0 gap-10 items-center">
          <div className="col-span-12 lg:col-span-7 xl:col-span-6 text-wrap">
            <h3 className="text-[35px] md:text-[35px] lg:text-[40px] xl:text-[50px] text-white font-mono font-semibold leading-snug">Why Choose <br /> <span className="text-[#f90] font-black">Book Writing Expert</span>?</h3>
            <p className="text-white leading-relaxed mt-5 text-[12px] xl:text-[15px] md:text-[14px] 2xl:text-[16px]">We are well aware of unique content creation requirements for each client. With a team equipped with a wide array of expertise, experiences and knowledge, we are always an author’s top preference. Book Writing Expert will simplify the Writing, Editing, Publication and Marketing needs for you. Our collaboration would be transparent and hassle-free, reducing all the intricacies from your end. We only deliver content that is remarkable, genuine and original.</p>
            <div className="grid xs:grid-cols-2 grid-cols-3 gap-3 xl:gap-5 mt-7">
              <div className="border-2 border-white p-3 rounded-sm hover:border-[#f90] hover:cursor-pointer ">
                <h4 className="text-white text-[13px] xl:text-[14px] md:text-[14px]  2xl:text-[16px] text-center">Research</h4>
              </div>
              <div className="border-2 border-white p-3 rounded-sm hover:border-[#f90] hover:cursor-pointer ">
                <h4 className="text-white text-[13px] xl:text-[14px] md:text-[14px]  2xl:text-[16px] text-center">Customer Service</h4>
              </div>
              <div className="border-2 border-white p-3 rounded-sm hover:border-[#f90] hover:cursor-pointer ">
                <h4 className="text-white text-[13px] xl:text-[14px] md:text-[14px]  2xl:text-[16px] text-center">Native Speaker</h4>
              </div>
              <div className="border-2 border-white p-3 rounded-sm hover:border-[#f90] hover:cursor-pointer ">
                <h4 className="text-white text-[13px] xl:text-[14px] md:text-[14px]  2xl:text-[16px] text-center">Privacy Guaranted</h4>
              </div>
              <div className="border-2 border-white p-3 rounded-sm hover:border-[#f90] hover:cursor-pointer ">
                <h4 className="text-white text-[13px] xl:text-[14px] md:text-[14px]  2xl:text-[16px] text-center">Experienced Writers</h4>
              </div>
              <div className="border-2 bg-[#f90] border-[#f90] p-3 rounded-sm ">
                <h4 className="text-white text-[13px] xl:text-[14px] md:text-[14px]  2xl:text-[16px] text-center">Get Started Now</h4>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5">
             

            </div>
          </div>
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6">
            <Image src={whychoose} alt="boo" className="mx-auto " />
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}
