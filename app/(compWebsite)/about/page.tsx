"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

function Aboutus() {
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
  console.log({ visibleArticles });
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  useEffect(() => {
    const getNews = async () => {
      const data = await axios.get(
        "https://newsapi.org/v2/everything?q=Plantation&from=2025-04-15&sortBy=popularity&apiKey=644e8c30e0674daaa3323c3c97161ae8"
      );
      console.log({ data }, "ihhgihbknkjn");

      setArticles(data?.data?.articles);
    };
    getNews();
  }, []);
  const navOptions = [
    { label: "About Us", ref: aboutRef, id: "about" },
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
            sx={{ display: "flex", flexDirection: "row" }}
            className="mb-4 mt-2 gap-4"
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
                />
              </ListItem>
            ))}
          </List>
          <div className="flex justify-start ml-12 text-[#00620B] text-4xl font-bold leading-[70px] font-[Dubai]">
            What We Do
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-7 md:col-span-6 col-span-12 lg:p-12 md:p-8 p-6">
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
            <div className="lg:col-span-5 md:col-span-6 col-span-12 -mt-14">
              <Image
                src={"/knowus.png"}
                alt={"Automotive Industry Solutions"}
                className="w-full h-[300px] lg:h-[450px] md:h-[450px] object-contain rounded-lg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around p-16 rounded-lg">
          <div className="text-center text-green-900">
            <h2 className="text-3xl font-bold">45000</h2>
            <p className="text-lg font-semibold">Hectares</p>
          </div>
          <div className="h-12 w-px bg-green-900"></div>
          <div className="text-center text-green-900">
            <h2 className="text-3xl font-bold">1M</h2>
            <p className="text-lg font-semibold">Trees</p>
          </div>
          <div className="h-12 w-px bg-green-900"></div>
          <div className="text-center text-green-900">
            <h2 className="text-3xl font-bold">10000</h2>
            <p className="text-lg font-semibold">Plants</p>
          </div>
          <div className="h-12 w-px bg-green-900"></div>
          <div className="text-center text-green-900">
            <h2 className="text-3xl font-bold">250</h2>
            <p className="text-lg font-semibold">Animals</p>
          </div>
        </div>
        <div className="px-28 p-4">
          <div className="px-28 p-10">
            <div className="bg-white p-10">
              {/* Main Section */}
              <div className="flex items-top justify-between">
                {/* Text Section */}
                <div className="w-1/2">
                  <h2 className="text-left text-green-900 text-[50px] font-normal">
                    Scaling Biodiversity and Ecosystem
                  </h2>
                  <p className="text-lg font-light text-green-900">
                    We’re growing ecosystems, economies and a better future
                  </p>
                  <div className="mt-16 flex justify-between gap-4">
                    <div className="w-1/2 border p-4 rounded-xl">
                      <h2 className="text-left text-green-900 text-[20px] font-normal">
                        Ecosystem
                      </h2>
                      <p className="text-sm font-light text-green-900">
                        We’re growing ecosystems, economies and a better future
                      </p>
                    </div>
                    <div className="w-1/2  border p-4 rounded-xl">
                      <h2 className="text-left text-green-900 text-[20px] font-normal">
                        Biodiversity
                      </h2>
                      <p className="text-sm font-light text-green-900">
                        We’re growing ecosystems, economies and a better future
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image Section */}
                <div className="w-1/2 flex justify-end">
                  <Image
                    src={"/earthGroup.svg"}
                    alt={"Automotive Industry Solutions"}
                    className="w-full max-w-[500px] h-[300px] lg:h-[450px] md:h-[450px] object-contain rounded-lg"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
            <div className="container mt-4">
              <h1 className="text-left mb-4 text-success">
                Latest News & Stories
              </h1>
              <div className="flex justify-end mt-4 gap-2 mb-2">
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
              <div className="row">
                {visibleArticles.map((article: any, index: number) => {
                  const isExpanded = expandedCards.includes(index);
                  return (
                    <div key={index} className="col-md-4 mb-4">
                      <div
                        className={`card w-[300px] transition-all duration-300 ${
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
