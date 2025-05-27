"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

function Aboutus() {
  const router = useRouter();
  const theme = useTheme();

  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("sm"));

  const ourInitiativesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const programsPageRef = useRef<HTMLElement>(null);
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
    { label: "About Us", ref: aboutRef, id: "about", path: "whoWeAre" },
    {
      label: "Our Initiatives",
      ref: ourInitiativesRef,
      id: "ourInitiatives",
      path: "ourInitiatives",
    },
    {
      label: "Programs",
      ref: programsPageRef,
      id: "programs",
      path: "programsPage",
    },
    { label: "Volunteer", ref: ourInitiativesRef, id: "volunteer" , path:"volunteer"},
    { label: "Get Involved", ref: portfolioRef, id: "getInvovled" , path:"getInvovled" },
  ];

  return (
    <>
      <div className="gradient-background min-h-screen">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Navigation List */}
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: isMobile ? "wrap" : "nowrap",
              justifyContent: isMobile ? "center" : "flex-start",
              gap: isMobile ? "0.5rem 1rem" : "0.25rem 1rem",
            }}
            className="mb-4 mt-2"
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
                  padding: "0.5rem",
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
                  className="text-[#00620B] font-extrabold text-sm sm:text-base"
                  onClick={() => router.push(`/${item?.path}`)}
                />
              </ListItem>
            ))}
          </List>

          {/* What We Do Section */}
          <div className="flex justify-center sm:justify-start text-[#00620B] text-2xl sm:text-3xl md:text-4xl font-bold leading-snug md:leading-[70px] font-[Dubai] text-center sm:text-left">
            What We Do
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mt-4 sm:mt-6">
            <div className="lg:col-span-7 md:col-span-6 col-span-12 p-4 sm:p-6 md:p-8 lg:p-8 xl:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
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
                  <div key={index} className="flex flex-col items-left">
                    <div className="text-left font-[Dubai] text-xl sm:text-2xl font-extrabold text-[#00620B]">
                      {item.title}
                    </div>
                    <div className="text-left font-[Dubai] text-xs sm:text-sm text-[#00620B]">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 md:col-span-6 col-span-12 flex justify-center items-center -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10">
              <Image
                src="/knowus.png"
                alt="Automotive Industry Solutions"
                className="w-full h-auto max-h-[250px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px] xl:max-h-[450px] object-contain rounded-lg"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap items-center justify-center sm:justify-around gap-4 p-4 sm:p-6">
            {[
              { value: "45000", label: "Hectares" },
              { value: "1M", label: "Trees" },
              { value: "10000", label: "Plants" },
              { value: "250", label: "Animals" },
            ].map((stat, index) => (
              <React.Fragment key={index}>
                <div className="text-center text-green-900 min-w-[100px]">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    {stat.value}
                  </h2>
                  <p className="text-base sm:text-lg font-semibold">
                    {stat.label}
                  </p>
                </div>
                {index < 3 && (
                  <div className="h-8 sm:h-10 lg:h-12 w-px bg-green-900 hidden sm:block"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Scaling Biodiversity Section */}
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 my-6 sm:my-8 md:my-10 rounded-lg shadow-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <h2 className="text-green-900 text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[50px] font-normal leading-tight">
                  Scaling Biodiversity and Ecosystem
                </h2>
                <p className="text-base sm:text-lg text-green-900 mt-2 sm:mt-4">
                  We're growing ecosystems, economies and a better future
                </p>
                <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="border p-4 rounded-xl shadow-sm">
                    <h3 className="text-green-900 text-lg sm:text-xl font-medium">
                      Ecosystem
                    </h3>
                    <p className="text-xs sm:text-sm text-green-900 mt-1">
                      We're growing ecosystems, economies and a better future
                    </p>
                  </div>
                  <div className="border p-4 rounded-xl shadow-sm">
                    <h3 className="text-green-900 text-lg sm:text-xl font-medium">
                      Biodiversity
                    </h3>
                    <p className="text-xs sm:text-sm text-green-900 mt-1">
                      We're growing ecosystems, economies and a better future
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
                <Image
                  src="/earthGroup.svg"
                  alt="Automotive Industry Solutions"
                  className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto object-contain rounded-lg"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          {/* Latest News Section */}
          <div className="container mx-auto px-4 sm:px-6 mt-6 sm:mt-8 md:mt-10">
            <h1 className="text-green-900 text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
              Latest News & Stories
            </h1>
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <div className="text-sm sm:text-base text-green-900">
                Showing {startIndex + 1}-{Math.min(endIndex, articles.length)}{" "}
                of {articles.length}
              </div>
              <div className="flex gap-2">
                <button
                  className={`flex items-center justify-center rounded-full p-2 ${
                    page === 1 ? "bg-gray-300" : "bg-[#005632]"
                  }`}
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                >
                  <ArrowLeftIcon color={page === 1 ? "black" : "white"} />
                </button>
                <button
                  className={`flex items-center justify-center rounded-full p-2 ${
                    endIndex >= articles.length ? "bg-gray-300" : "bg-[#005632]"
                  }`}
                  onClick={() => setPage(page + 1)}
                  disabled={endIndex >= articles.length}
                >
                  <ArrowRightIcon
                    color={endIndex >= articles.length ? "black" : "white"}
                  />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {visibleArticles.map((article: any, index: number) => {
                const isExpanded = expandedCards.includes(index);
                return (
                  <div key={index} className="w-full">
                    <div
                      className={`card transition-all duration-300 ${
                        isExpanded ? "h-auto" : "h-[420px]"
                      } overflow-hidden bg-white rounded-lg shadow-md`}
                    >
                      <img
                        src={
                          article?.urlToImage ||
                          "https://via.placeholder.com/150"
                        }
                        className="w-full h-[180px] object-cover"
                        alt={article?.title}
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-green-900">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-700 mt-2">
                          {isExpanded
                            ? article.description
                            : `${article.description?.slice(0, 100)}...`}
                        </p>
                        {!isExpanded && (
                          <button
                            onClick={() => toggleCard(index)}
                            className="text-green-800 text-xs font-medium mt-2"
                          >
                            ...read more
                          </button>
                        )}
                        {isExpanded && (
                          <div className="flex flex-col sm:flex-row justify-between gap-2 mt-4">
                            <a
                              href={article?.url}
                              className="text-green-800 text-sm font-semibold inline-flex items-center gap-1 hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Read Full Article <span>&rarr;</span>
                            </a>
                            <button
                              className="text-green-800 text-sm font-semibold"
                              onClick={() => toggleCard(index)}
                            >
                              Collapse
                            </button>
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
    </>
  );
}

export default Aboutus;
