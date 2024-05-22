import React from 'react'
import Container from './Container'
import Flex from './Flex'
import offerImg1 from "../assets/Offer1.png"
import offerImg2 from "../assets/Offer2.png"
import offerImg3 from "../assets/Offer3.png"
import offerImg4 from "../assets/Offer4.png"

const SpecialOffer = () => {
  return (
    <section className='pb-[50px]'>
        <Container>
        <div className=" w-full">
                <h3 className=' font-dmsans text-[39px] font-bold text-[#262626]'>Special Offer</h3>
            </div>
            <Flex className=" justify-between flex-wrap">
            <div className="xl:w-[24%] md:w-[32.5%] w-[48%] cursor-pointer mt-[28px]">
                    <div className=" relative">
                        <img className='w-full lg:h-[350px] h-[200px]' src={offerImg1} alt="Product4" />
                        <div className="">
                            <p className=' absolute lg:top-5 lg:left-5 top-1 left-1 py-2 px-[33px] bg-[#262626] font-dmsans text-[14px] font-bold text-[#FFFFFF]'>New </p>
                        </div>
                    </div>
                    <div className=" flex justify-between mt-[24px]">
                        <div className=""><h3 className='font-dmsans text-[20px] font-bold text-[#262626]'>Basic Crew Neck Tee</h3></div>
                        <div className=""><h3 className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>$44.00</h3></div>
                    </div>
                    <div className=" mt-2">
                        <p className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>Black</p>
                    </div>
            </div>
            <div className="xl:w-[24%] md:w-[32.5%] w-[48%] cursor-pointer mt-[28px]">
                    <div className=" relative">
                        <img className='w-full lg:h-[350px] h-[200px]' src={offerImg2} alt="Product4" />
                        <div className="">
                            <p className=' absolute lg:top-5 lg:left-5 top-1 left-1 py-2 px-[33px] bg-[#262626] font-dmsans text-[14px] font-bold text-[#FFFFFF]'>New </p>
                        </div>
                    </div>
                    <div className=" flex justify-between mt-[24px]">
                        <div className=""><h3 className='font-dmsans text-[20px] font-bold text-[#262626]'>Basic Crew Neck Tee</h3></div>
                        <div className=""><h3 className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>$44.00</h3></div>
                    </div>
                    <div className=" mt-2">
                        <p className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>Black</p>
                    </div>
            </div>
            <div className="xl:w-[24%] md:w-[32.5%] w-[48%] cursor-pointer mt-[28px]">
                    <div className=" relative">
                        <img className='w-full lg:h-[350px] h-[200px]' src={offerImg3} alt="Product4" />
                        <div className="">
                            <p className=' absolute lg:top-5 lg:left-5 top-1 left-1 py-2 px-[33px] bg-[#262626] font-dmsans text-[14px] font-bold text-[#FFFFFF]'>New </p>
                        </div>
                    </div>
                    <div className=" flex justify-between mt-[24px]">
                        <div className=""><h3 className='font-dmsans text-[20px] font-bold text-[#262626]'>Basic Crew Neck Tee</h3></div>
                        <div className=""><h3 className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>$44.00</h3></div>
                    </div>
                    <div className=" mt-2">
                        <p className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>Black</p>
                    </div>
            </div>
            <div className="xl:w-[24%] md:w-[32.5%] w-[48%] cursor-pointer mt-[28px]">
                    <div className=" relative">
                        <img className='w-full lg:h-[350px] h-[200px]' src={offerImg4} alt="Product4" />
                        <div className="">
                            <p className=' absolute lg:top-5 lg:left-5 top-1 left-1 py-2 px-[33px] bg-[#262626] font-dmsans text-[14px] font-bold text-[#FFFFFF]'>New </p>
                        </div>
                    </div>
                    <div className=" flex justify-between mt-[24px]">
                        <div className=""><h3 className='font-dmsans text-[20px] font-bold text-[#262626]'>Basic Crew Neck Tee</h3></div>
                        <div className=""><h3 className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>$44.00</h3></div>
                    </div>
                    <div className=" mt-2">
                        <p className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>Black</p>
                    </div>
            </div>
            </Flex>
        </Container>
    </section>
  )
}

export default SpecialOffer