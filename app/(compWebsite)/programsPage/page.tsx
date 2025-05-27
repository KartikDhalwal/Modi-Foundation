"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

export default function ContactPage() {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="bg-[#f9fdfc] text-[#222] font-sans">
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="w-full mb-6">
          <Image
            src="/programsTop.svg"
            width={800}
            height={400}
            alt="Team"
            className="w-full rounded-md"
          />
        </div>
        <h2 className="inline-block bg-green-50 text-green-700 text-3xl font-semibold w-full px-6 py-4 rounded-lg mb-8 border-l-4 border-green-500">
          Programs Conducted by us
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Get Involved</h3>
        <p className="mb-4 leading-7 text-justify">
          Modi foundation ( The mission of dream India ) is to protect and
          preserve the environment by fostering community engagement, driving
          advocacy, and implementing sustainable initiatives.
        </p>
        <p className="mb-4 leading-7 font-bold text-justify">
          Modi foundation ( The mission of dream India ) is to protect and
          preserve the environment by fostering community engagement, driving
          advocacy, and implementing sustainable initiatives.
        </p>
        <p className="mb-4 leading-7 text-justify">
          Over the years, Modi Foundation, Mission of Dream India (MODI)
          Foundation, we advocate for sustainable development practices that
          balance environmental conservation, social equity, and economic
          growth. By collaborating with businesses, governments, and
          communities, we promote initiatives such as sustainable agriculture,
          renewable energy adoption, and responsible resource management. Our
          efforts aim to inspire long term solutions that ensure prosperity
          while protecting our planet for future generations.
        </p>

        <div className="flex flex-col md:flex-row gap-8 w-full mt-10">
          {/* Before Condition */}
          <div className="flex-1 text-center">
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
              <Image
                src="/before.svg"
                width={800}
                height={400}
                alt="Before Condition"
                className="w-full rounded-md object-cover"
              />
            </div>
            <p className="mt-4 text-xl font-semibold text-gray-700">
              Before Condition
            </p>
          </div>

          {/* After Collaboration */}
          <div className="flex-1 text-center">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Image
                src="/after.svg"
                width={800}
                height={400}
                alt="After Collaboration"
                className="w-full rounded-md object-cover"
              />
            </div>
            <p className="mt-4 text-xl font-semibold text-green-700">
              After Our Collaboration
            </p>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="w-full mt-10">
          <p className="mt-4 text-center text-sm italic text-gray-600">
            Modi foundation ( The mission of dream India ) is to protect and
            preserve the environment by fostering community engagement, driving
            advocacy, and implementing sustainable initiatives. Modi foundation
            ( The mission of dream India ) is to protect and preserve the
            environment by fostering community engagement, driving advocacy, and
            implementing sustainable initiatives.
          </p>
        </div>
      </section>
    </div>
  );
}
