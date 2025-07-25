"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

export default function GetInvolvedPage() {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const faqItems = [
    {
      id: 1,
      title: "Is MODI Foundation a registered and verified NGO?",
      description:
        "Yes, we are a registered non-governmental organization under the name Mission of Dream India Foundation, with NGO Darpan ID HR/2025/0513950 and CIN U85300HR2019NPL084417. We follow all statutory regulations and operate with transparency and accountability.",
    },
    {
      id: 2,
      title: "How can you make a difference with MODI Foundation?",
      description:
        "Content explaining how individuals can contribute to MODI Foundation's initiatives.",
    },
    {
      id: 3,
      title: "What are the benefits of joining our community?",
      description:
        "Details about community perks, networking, and impact opportunities.",
    },
    {
      id: 4,
      title:
        "How can you contribute to a sustainable future with MODI Foundation?",
      description:
        "Specific actions like volunteering, donations, or awareness campaigns.",
    },
    {
      id: 5,
      title:
        "How can you be a part of our mission to create a greener tomorrow?",
      description:
        "Steps to get involved, from small daily actions to long-term commitments.",
    },
    {
      id: 6,
      title: "What drives our passion for environmental conservation?",
      description:
        "This is where you can add content that applies to the point above.",
    },
    {
      id: 7,
      title: "How does MODI Foundation ensure transparency in its work?",
      description:
        "We regularly document our initiatives, provide impact reports, and maintain clear communication with our donors and supporters. Our team is committed to ethical practices and responsible management of all resources",
    },
  ];

  const handleClick = (id: number) => {
    setSelectedItem((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#f9fdfc] text-[#222] font-sans">
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="inline-block bg-green-50 text-green-700 text-3xl font-semibold w-full px-6 py-4 rounded-lg mb-8 border-l-4 border-green-500">
          How to Get Involved with Us
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Get Involved</h3>
        <p className="mb-4 leading-7 text-justify">
          Be a Part of Our Impactful Initiatives! At Mission of Dream India
          (MODI) Foundation, we believe everyone has a role to play in
          protecting the environment. Whether you're a student, a professional,
          or a concerned citizen, there are countless ways to get involved and
          contribute to creating a sustainable future. Together, we can make a
          lasting difference!
        </p>
        <p className="mb-4 leading-7 text-justify">
          A non-governmental organization committed to environmental
          conservation and promoting sustainable practices. At Mission of Dream
          India (MODI) Foundation, we believe in the strength of collective
          action to tackle critical environmental challenges and build a
          healthier, greener future for generations to come.
        </p>
        <p className="mb-4 leading-7 text-justify">
          Our mission at Mission of Dream India (MODI) Foundation is to protect
          and preserve the environment by fostering community engagement,
          driving advocacy, and implementing sustainable initiatives. We strive
          to raise awareness about critical environmental issues, promote
          conservation efforts, and inspire a global culture of environmental
          responsibility.
        </p>
        <p className="mb-10 leading-7 text-justify">
          MODI Foundation was founded by Manasi Jaiswal, a passionate
          environmentalist committed to creating a positive impact on the
          planet. Since its inception, the organization has steadily grown,
          earning support from individuals, businesses, and communities around
          the world. Our team comprises dedicated professionals with expertise
          in environmental science, conservation, advocacy, community outreach,
          and social welfare. Together, we work diligently to develop and
          execute effective solutions to environmental challenges while
          promoting sustainable living practices.
        </p>

        {/* Bottom Image */}
        <div className="w-full mt-10">
          <Image
            src="/getInvolvedWithUs.svg"
            width={800}
            height={400}
            alt="Team"
            className="w-full rounded-md"
          />
        </div>
        <div
          className={`${
            isMobile
              ? "col-span-12"
              : "col-span-12 lg:col-span-6 lg:col-start-4"
          } mt-8`}
        >
          <div className="space-y-2 w-full">
            {faqItems.map((item) => (
              <div key={item.id} className="w-full">
                {/* Question */}
                <div
                  className={`w-full bg-slate-100 flex px-4 sm:px-6 items-center min-h-[70px] 
                        font-[Frank] text-base sm:text-lg md:text-xl font-medium 
                        tracking-wider cursor-pointer hover:bg-slate-200 transition-colors
                        ${
                          selectedItem === item.id
                            ? "rounded-t-lg"
                            : "rounded-lg"
                        }`}
                  onClick={() => handleClick(item.id)}
                >
                  <div className="flex-1 text-left px-2">{item.title}</div>
                  <div className="ml-4 mr-2">
                    <IoIosAddCircle
                      className={`text-green-500 transition-transform duration-200 ${
                        selectedItem === item.id ? "rotate-45" : ""
                      }`}
                      size={isMobile ? 20 : 24}
                    />
                  </div>
                </div>

                {/* Answer */}
                {selectedItem === item.id && (
                  <div className="w-full p-4 sm:p-6 border-2 border-t-0 border-gray-200 bg-white rounded-b-lg">
                    <p className="text-gray-700 font-[Frank] font-light text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
