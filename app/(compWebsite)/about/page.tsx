"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

function Aboutus(isMobile) {
  const router = useRouter();
  let responsive = isMobile?.isMobile;
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const WhyautovynRef = useRef<HTMLElement>(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("sports");
  const [page, setPage] = useState(1);
  const articlesPerPage = 3;

  // Calculate the start and end indices
  const startIndex = (page - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const visibleArticles = articles.slice(startIndex, endIndex);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  useEffect(() => {
    const getNews = async () => {
      const today = new Date();
      today.setDate(today.getDate() - 2);
      const fromDate = today.toISOString().split("T")[0]; // formats to 'YYYY-MM-DD'

      const data = await axios.get(
        `https://newsapi.org/v2/everything?q=Plantation&from=${fromDate}&sortBy=popularity&apiKey=644e8c30e0674daaa3323c3c97161ae8`
      );
      setArticles(data?.data?.articles);
    };

    getNews();
  }, []);
  const navOptions = [
    { label: "About Us", ref: aboutRef, id: "about", path:'whoWeAre' },
    { label: "Our Initiatives", ref: homeRef, id: "home" },
    { label: "Programs", ref: productsRef, id: "products" },
    { label: "Volunteer", ref: homeRef, id: "mission" },
    { label: "Get Involved", ref: portfolioRef, id: "portfolio" },
    { label: "Resources", ref: servicesRef, id: "services" },
    { label: "Contact Us", ref: WhyautovynRef, id: "contactUs" },
  ];

  return (
    <>
      <div className="gradient-background min-h-screen">
        <div className="px-10">
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: responsive ? "wrap" : "nowrap",
              justifyContent: responsive ? "center" : "flex-start",
            }}
            className={`mb-4 mt-2 ${
              responsive ? "gap-2 sm:gap-4" : "sm:gap-1 lg:gap-4"
            }`}
          >
            {navOptions.map((item: any, index: number) => (
              <ListItem
                key={index}
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "white",
                  cursor: "pointer",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    width: "0%",
                    height: "3px",
                    backgroundColor: "green",
                    transition: "all 0.3s ease-in-out",
                    transform: "translateX(-50%)",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <ListItemText
                  primary={item.label}
                  className="text-[#00620B] font-extrabold"
                  onClick={() =>router.push(`/${item?.path}`)}
                />
              </ListItem>
            ))}
          </List>
          <div className="flex justify-center sm:justify-start sm:ml-12 text-[#00620B] text-2xl sm:text-4xl font-bold leading-snug sm:leading-[70px] font-[Dubai] text-center sm:text-left">
            What We Do
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-7 md:col-span-6 col-span-12 p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="flex flex-wrap mt-0 justify-between items-center gap-20">
                {[
                  {
                    title: "Our Project",
                    description:
                      "Creating innovative solutions for a sustainable future.",
                  },
                  {
                    title: "Our Team",
                    description:
                      "A group of passionate individuals committed to change.",
                  },
                  {
                    title: "Careers",
                    description: "Join us and make a difference in the world.",
                  },
                  {
                    title: "Press",
                    description:
                      "Stay updated with our latest news and initiatives.",
                  },
                  {
                    title: "FAQs",
                    description:
                      "Find answers to common questions about our work.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-left ">
                    <div className="text-left font-[Dubai] text-2xl font-extrabold text-[#00620B]">
                      {item.title}
                    </div>
                    <div className="text-left font-[Dubai] text-sm text-[#00620B]">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 md:col-span-6 col-span-12 flex justify-center -mt-6 sm:-mt-10 lg:-mt-14">
              <Image
                src="/knowus.png"
                alt="Automotive Industry Solutions"
                className="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[450px] object-contain rounded-lg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center sm:justify-around gap-4 p-6 sm:p-4">
          <div className="text-center text-green-900">
            <h2 className="lg:text-3xl sm:text-xl font-bold">45000</h2>
            <p className="text-lg font-semibold">Hectares</p>
          </div>
          <div className="h-12 w-px bg-green-900"></div>
          <div className="text-center text-green-900">
            <h2 className="lg:text-3xl sm:text-xl font-bold">1M</h2>
            <p className="text-lg font-semibold">Trees</p>
          </div>
          <div className="h-12 w-px bg-green-900"></div>
          <div className="text-center text-green-900">
            <h2 className="lg:text-3xl sm:text-xl font-bold">10000</h2>
            <p className="text-lg font-semibold">Plants</p>
          </div>
          <div className="h-12 w-px bg-green-900"></div>
          <div className="text-center text-green-900">
            <h2 className="lg:text-3xl sm:text-xl font-bold">250</h2>
            <p className="text-lg font-semibold">Animals</p>
          </div>
        </div>
        <div className="">
          <div className="p-10">
            {responsive ? (
              <div className="bg-white px-4 py-10 sm:py-2 w-auto">
                {/* Main Section */}
                <div className="flex flex-col gap-10">
                  {/* Image on top for mobile */}
                  <div className="w-full flex justify-center">
                    <Image
                      src="/earthGroup.svg"
                      alt="Automotive Industry Solutions"
                      className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                      width={500}
                      height={500}
                    />
                  </div>

                  {/* Text Content */}
                  <div className="w-full">
                    <h2 className="text-center sm:text-left text-green-900 text-3xl sm:text-4xl font-semibold leading-snug">
                      Scaling Biodiversity and Ecosystem
                    </h2>
                    <p className="text-center sm:text-left text-lg font-light text-green-900 mt-2">
                      We’re growing ecosystems, economies and a better future
                    </p>

                    {/* Cards */}
                    <div className="mt-10 flex flex-col gap-6">
                      <div className="border p-4 rounded-xl shadow-sm">
                        <h3 className="text-green-900 text-xl font-medium">
                          Ecosystem
                        </h3>
                        <p className="text-sm font-light text-green-900 mt-1">
                          We’re growing ecosystems, economies and a better
                          future
                        </p>
                      </div>
                      <div className="border p-4 rounded-xl shadow-sm">
                        <h3 className="text-green-900 text-xl font-medium">
                          Biodiversity
                        </h3>
                        <p className="text-sm font-light text-green-900 mt-1">
                          We’re growing ecosystems, economies and a better
                          future
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white lg:p-10 sm:p-20 sm:m-4 w-auto">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                  <div className="lg:w-1/2 sm:w-96">
                    <h2 className="text-left text-green-900 text-3xl md:text-4xl lg:text-[50px] font-normal">
                      Scaling Biodiversity and Ecosystem
                    </h2>
                    <p className="text-lg font-light text-green-900">
                      We’re growing ecosystems, economies and a better future
                    </p>
                    <div className="mt-16 flex flex-col sm:flex-row justify-between gap-4">
                      <div className="w-1/2 border p-4 rounded-xl">
                        <h2 className="text-left text-green-900 text-[20px] font-normal">
                          Ecosystem
                        </h2>
                        <p className="text-sm font-light text-green-900">
                          We’re growing ecosystems, economies and a better
                          future
                        </p>
                      </div>
                      <div className="w-1/2  border p-4 rounded-xl">
                        <h2 className="text-left text-green-900 text-[20px] font-normal">
                          Biodiversity
                        </h2>
                        <p className="text-sm font-light text-green-900">
                          We’re growing ecosystems, economies and a better
                          future
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <Image
                      src="/earthGroup.svg"
                      alt="Automotive Industry Solutions"
                      className="w-full max-w-[400px] h-auto object-contain rounded-lg"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="container mt-4">
              <h1 className="text-left mb-4 text-success">
                Latest News & Stories
              </h1>
              <div className="flex justify-center sm:justify-end mt-4 gap-2 mb-2 flex-wrap">
                <button
                  className={`flex ${
                    page === 1 ? "bg-gray-500" : "bg-[#005632]"
                  } items-center justify-center rounded-full p-2`}
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                >
                  <ArrowLeftIcon color={page === 1 ? "black" : "white"} />
                </button>

                <button
                  className="flex bg-[#005632] items-center justify-center rounded-full p-2"
                  onClick={() => setPage(page + 1)}
                  disabled={endIndex >= articles.length}
                >
                  <ArrowRightIcon color="white" />
                </button>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {visibleArticles.map((article: any, index: number) => {
                  const isExpanded = expandedCards.includes(index);
                  return (
                    <div key={index} className="w-full sm:w-[300px]">
                      <div
                        className={`card transition-all duration-300 ${
                          isExpanded ? "h-auto" : "h-[420px]"
                        } overflow-hidden`}
                      >
                        {/* Image */}
                        <img
                          src={
                            article?.urlToImage ||
                            "https://via.placeholder.com/150"
                          }
                          className="w-full h-[180px] object-cover"
                          alt={article?.title}
                        />

                        {/* Title & Description */}
                        <div className="p-4">
                          <h3 className="text-lg font-semibold">
                            {article.title}
                          </h3>
                          <p className="text-sm text-gray-700">
                            {isExpanded
                              ? article.description
                              : `${article.description?.slice(0, 100)}...`}
                          </p>
                          {!isExpanded && (
                            <button
                              onClick={() => toggleCard(index)}
                              className="text-green-800 text-xs font-medium mt-1"
                            >
                              ...read more
                            </button>
                          )}

                          {/* Read more link */}
                          {isExpanded && (
                            <div className="flex justify-center gap-4 mt-3">
                              <a
                                href={article?.url}
                                className="text-green-800 text-sm font-semibold inline-flex items-center gap-1 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Read Full Article <span>&rarr;</span>
                              </a>
                              <button
                                className="btn btn-secondary mt-2"
                                onClick={() => toggleCard(index)}
                              >
                                {isExpanded ? "Collapse" : "Expand"}
                              </button>{" "}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
