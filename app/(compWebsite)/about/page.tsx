"use client"
import * as React from 'react';
import Image from 'next/image';

function Aboutus() {
  return (
    <>
      <div className="flex justify-center font-[Frank] text-3xl font-bold leading-[70px] custom-tracking">
      Get to Know Us
      </div>
      <div className="grid relative -mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 px-4  ">

        {/* Text content section */}
        <div className="lg:col-span-7 md:col-span-6 col-span-12 lg:p-12 md:p-8 p-6">
          <div className="text-[18px] font-[nunito] font-normal leading-[23.24px] mb-4">
          Founded in 2017, Auto-vyn Software Consultants focuses on delivering client-centered software solutions through software development and systems consulting. We believe in simple solutions to complex problems for true client satisfaction.
          </div>
          <div className="text-[18px] font-[nunito] font-normal leading-[23.24px]  mb-4">
          VYN Automation Pvt. Ltd., based in Jaipur, specializes in IT, finance, and business operations, particularly within the Maruti Network. Founded by a team with top consulting experience, the company offers Software as a Service solutions in Accounting, Auditing, Taxation, Assurance, and Business Advisory.
          </div>
          <div className="text-[18px] font-[nunito] font-normal leading-[23.24px]  mb-4">
         We believe to provide a single window solution to our clients where all IT-software related challenges can be fulfilled within a single integrated software.
          </div>

          {/* Values Section */}
          <div className="flex flex-wrap mt-10 justify-between items-center gap-2">
            <div className="flex flex-col items-center">
              <Image
                src={'/aboutus/truth.jpg'}
                alt={'Automotive Industry Solutions'}
                className="w-[70px] h-[70px] rounded-full object-cover mb-2"
                width={1000}
                height={1000}
              />
              <div className="text-center font-serif font-semibold text-sm text-color">Truthfulness</div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={'/aboutus/ethics.jpg'}
                alt={'Automotive Industry Solutions'}
                className="w-[70px] h-[70px] rounded-full object-cover mb-2"
                width={100}
                height={100}
              />
              <div className="text-center font-serif font-semibold text-sm text-color">Ethics</div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={'/aboutus/frotitudenew.jfif'}
                alt={'Automotive Industry Solutions'}
                className="w-[70px] h-[70px] rounded-full object-cover mb-2"
                width={100}
                height={100}
              />
              <div className="text-center font-serif font-semibold text-sm text-color">Fortitude</div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                 src={'/aboutus/quality.jpg'}
                alt={'Automotive Industry Solutions'}
                className="w-[70px] h-[70px] rounded-full object-cover mb-2"
                width={100}
                height={100}
              />
              <div className="text-center font-serif font-semibold text-sm text-color">Quality</div>
            </div>

            <div className="flex flex-col items-center">
              <Image
               src={'/aboutus/Cust.jpg'}
                alt={'Automotive Industry Solutions'}
                className="w-[70px] h-[70px] rounded-full object-cover mb-2"
                width={100}
                height={100}
              />
              <div className="text-center font-serif font-semibold text-sm text-color">Customer-Centric</div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:col-span-5 md:col-span-6 col-span-12 pl-4 pr-4 lg:pt-10 lg:pb-10 md:pb-10">
          <Image
          src={'/aboutus/New1.JPG'}
            alt={'Automotive Industry Solutions'}
            className="w-full h-[300px] lg:h-[450px] md:h-[450px] object-contain rounded-lg mb-2"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
}

export default Aboutus;



