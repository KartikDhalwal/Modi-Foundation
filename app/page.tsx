

"use client";

import React, { useEffect, useRef, useState, Suspense } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Skeleton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import LoadingScreen from "./components/Loader";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
const Home1 = React.lazy(() => import("./(compWebsite)/home1/page"));
const Aboutus = React.lazy(() => import("./(compWebsite)/about/page"));
const Products = React.lazy(() => import("./(compWebsite)/product/page"));
const Services1 = React.lazy(() => import("./(compWebsite)/services/page"));
const PortTestimonial = React.lazy(() => import("./(compWebsite)/portfolio/page"));
const Careers = React.lazy(() => import("./(compWebsite)/careers/page"));
// const Events = React.lazy(() => import("./(compWebsite)/events/page"));
const Whyautovyn = React.lazy(() => import("./(compWebsite)/whyautovyn/page"));
// const Ratings = React.lazy(() => import("./(compWebsite)/feedback/page"));
const Contactus = React.lazy(() => import("./(compWebsite)/contactus/page"));
const PartnerPrgm = React.lazy(() => import("./(compWebsite)/PartnerProgm/page"));
const Team = React.lazy(() => import("./(compWebsite)/team/page"));
const Privacy = React.lazy(() => import("./(compWebsite)/privacy/page"))
import "bootstrap/dist/css/bootstrap.min.css";
import { InView } from "react-intersection-observer";
import SectionSkeleton from "./components/skeleton";
import { motion, useScroll } from "framer-motion";
import Footer from "./components/footer";

type ScrollRef = React.RefObject<HTMLElement>;

export default function Home() {
  const { scrollYProgress } = useScroll();
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const PartnerPrgmRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const careersRef = useRef<HTMLElement>(null);
  const TestimonialRef = useRef<HTMLElement>(null);
  const WhyautovynRef = useRef<HTMLElement>(null);
  const EventsRef = useRef<HTMLElement>(null);
  const TeamRef = useRef<HTMLElement>(null);
  const PrivacyRef = useRef<HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [DetailPage, setDetailPage] = useState(false);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsFading(true), 2500);
    const timer2 = setTimeout(() => setIsLoading(false), 500);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  const scrollToSection = (ref: ScrollRef) => {
    if (ref == productsRef && DetailPage == true) {
      setDetailPage(false);
    }
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const FooterOptions = [
    {
      label: "Our Technologies",
      subtopics: ["React", "Java", "Asp.net", "Node.js", "Next.js 14"],
    },
    { label: "Team Autovyn", route: TeamRef },
    {
      label: "Services",
      subtopics: ["Cloud Service", "Support Service", "Digital Marketing"],
    },
    { label: "Privacy Policy", route: PrivacyRef },
    {
      label: "Our Product",
      subtopics: [
        "Payroll System",
        "Insurance System",
        "Asset Management",
        "Banking Management",
        "Finance Payout",
        "Discount Management",
      ],
    },
    {
      label: "Get In Touch",
      subtopics: [
        "Mobile: +91 907 - 978 - 2505",
        "Website: www.autovyn.com",
        "E-mail: sales@autovyn.com",
        "support@autovyn.com",
      ],
    },
    ,
  ];

  const handleFooterOptionClick = (route: any) => {
    console.log(route, 'route')
    router.push(route);
  };


  const navOptions = [
    { label: "Home", ref: homeRef, id: "home" },
    { label: "About Us", ref: aboutRef, id: "about" },
    { label: "Products", ref: productsRef, id: "products" },
    { label: "Services", ref: servicesRef, id: "services" },
    { label: "Portfolio", ref: portfolioRef, id: "portfolio" },
    // { label: "Testimonials", ref: TestimonialRef, id: "Testimonials" },
    { label: "Why Autovyn", ref: WhyautovynRef, id: "Whyautovyn" },
    { label: "Careers", ref: careersRef, id: "careers" },
    { label: "Contact Us", ref: contactRef, id: "contact" },
    { label: "Referral Prgm", ref: PartnerPrgmRef, id: "PartnerPrgm" },
    // { label: "Team", ref: TeamRef, id: "Team" },
  ];

  const handleMenuClick = (ref: React.RefObject<HTMLElement>) => {
    scrollToSection(ref);
    setDrawerOpen(false);
  };

  const BackToProducts = () => {
    setDetailPage(false);
    scrollToSection(productsRef);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) =>
              prev.includes(entry.target.id) ? prev : [...prev, entry.target.id]
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    const sectionElements = navOptions.map((item) =>
      document.getElementById(item.id)
    );
    sectionElements.forEach((element) => element && observer.observe(element));

    return () => {
      sectionElements.forEach(
        (element) => element && observer.unobserve(element)
      );
    };
  }, []);

  return (
    <div className="grid grid-cols-12 w-full">
      <div className="col-span-12">
        <>
          {isLoading ? (
            <>
              <div className={isFading ? "loading-fade-out" : ""}>
                <LoadingScreen />
              </div>
            </>
          ) : (
            <>
              <Box
                display="flex"
                flexDirection="column"
                minHeight="100vh"
                color="#34251F"
              >
                <AppBar
                  position="sticky"
                  color="transparent"
                  elevation={0}
                  sx={{
                    // color: "#34251F",
                    // backgroundColor: "rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(0px)",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    height: "60px",
                  }}
                >
                  <Toolbar>
                    {isMobile ? (
                      <>
                        <IconButton
                          edge="start"
                          color="inherit"
                          onClick={toggleDrawer(true)}
                          sx={{ mr: 12, flexGrow: 1 }}
                        >
                          <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" sx={{ mr: 12, flexGrow: 1 }}>
                          {/* <Image
                            src="/logonew.png"
                            alt="Linkedin logo"
                            width={250}
                            height={180}
                            style={{ marginRight: 8 }}
                          /> */}
                        </Typography>
                        {/* <Typography
                          variant="h6"
                          sx={{ flexGrow: 1 }}
                          style={{ color: "#34251F" }}
                        >
                          <Image
                            src="/logonew.png"
                            alt="Linkedin logo"
                            width={250}
                            height={180}
                            style={{ marginRight: 8 }}
                          />
                        </Typography> */}
                        <Drawer
                          anchor="left"
                          open={drawerOpen}
                          onClose={toggleDrawer(false)}
                        >
                          <List>
                            {navOptions.map((item, index) => (
                              <ListItem
                                component="li"
                                button
                                key={index}
                                onClick={() => handleMenuClick(item.ref)}
                              >
                                <ListItemText
                                  primary={item.label}
                                  className="text-nunito-2027"
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Drawer>
                      </>
                    ) : (
                      <>
                        <Typography variant="h5" sx={{ mr: 12, flexGrow: 1 }}>
                          {/*  */}
                        </Typography>
                        {navOptions.map((item, index) => (
                          <Button
                            key={index}
                            color="primary"
                            onClick={() => scrollToSection(item.ref)}
                            style={{ color: "white" }}
                            sx={{
                              fontFamily: "Ledger",
                              // fontWeight: 400,
                              // fontSize: "16px",
                              lineHeight: "52px",
                              textAlign: "left",
                              textUnderlinePosition: "from-font",
                              textDecorationSkipInk: "none",
                              color: "white",
                            }}
                            className="text-[8px] md:text-[10px] lg:text-[10px] xl:text-[16px] whitespace-nowrap text-ellipsis"
                          >
                            {item.label}
                          </Button>
                        ))}
                      </>
                    )}
                  </Toolbar>
                </AppBar>
                <motion.div
                  className="progress-bar"
                  style={{
                    position: "fixed",
                    top: 60,
                    left: 0,
                    right: 0,
                    height: "5px",
                    backgroundColor: "orange",
                    transformOrigin: "0%",
                    scaleX: scrollYProgress,
                    zIndex: 1000,
                  }}
                />

                {navOptions.map((item, index) => (
                  <Box
                    id={item.id}
                    ref={item.ref}
                    key={index}
                    sx={{
                      minHeight: "calc(100vh - 0px)",
                      bgcolor: "white",
                      paddingX: 1,
                    }}
                  >
                    <Suspense fallback={<SectionSkeleton />}>
                      {(() => {
                        switch (item.id) {
                          case "home":
                            return <Home1 isMobile={isMobile} />;
                          case "about":
                            return <Aboutus />;
                          case "products":
                            return (
                              <>
                                {DetailPage && (
                                  <Button
                                    variant="outlined"
                                    onClick={BackToProducts}
                                    className="mt-4"
                                    sx={{
                                      background: "#34251F",
                                      color: "white",
                                      fontSize: "10px",
                                      textTransform: "none",
                                      height: "50px",
                                      "&:hover": {
                                        backgroundColor: "#713f12",
                                      },
                                    }}
                                  >
                                    Back To Products
                                  </Button>
                                )}
                                <Products
                                  setDetailPage={setDetailPage}
                                  DetailPage={DetailPage}
                                />
                                {DetailPage && (
                                  <Button
                                    variant="outlined"
                                    onClick={BackToProducts}
                                    className="mt-4"
                                    sx={{
                                      background: "#34251F",
                                      color: "white",
                                      fontSize: "10px",
                                      textTransform: "none",
                                      height: "50px",
                                      "&:hover": {
                                        backgroundColor: "#713f12",
                                      },
                                    }}
                                  >
                                    Back To Products
                                  </Button>
                                )}
                              </>
                            );
                          case "services":
                            return <Services1 isMobile={isMobile} />;
                          case "portfolio":
                            return <PortTestimonial />;
                          // case "Testimonials":
                          //   return <Ratings />;
                          case "Whyautovyn":
                            return <Whyautovyn />;
                          case "careers":
                            return <Careers />;
                          case "contact":
                            return <Contactus />;
                          case "PartnerPrgm":
                            return <PartnerPrgm />;
                          // case "Team":
                          //   return <Team />;
                          default:
                            return null;
                        }
                      })()}
                    </Suspense>
                  </Box>
                ))}
                <Box ref={TeamRef} id="team">
                  <Suspense fallback={<SectionSkeleton />}>
                    <Team /> {/* The Team section */}
                  </Suspense>
                </Box>
                <Box ref={PrivacyRef} id="privacy">
                  <Suspense fallback={<SectionSkeleton />}>
                    <Privacy /> {/* The Team section */}
                  </Suspense>
                </Box>
              </Box>
              {/* <Footer scrollToSection={scrollToSection}/> */}
              <footer>
                <Box
                  display="flex"
                  flexDirection="column"
                  gap={3} // Gap between the rows
                  justifyContent="center"
                  alignItems="center"
                  p={3}
                  sx={{
                    background: "#34251F",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                >
                  {/* Footer options in one row */}
                  <Box
                    display="flex"
                    flexDirection="row" // Ensures items are in a single row
                    gap={1} // Adjust spacing between items
                    flexWrap="nowrap" // Prevents wrapping
                    justifyContent="center" // Centers the items horizontally
                    alignItems="center" // Centers items vertically
                    sx={{ width: "100%" }}
                    className="frankfooter text-ellipsis whitespace-nowrap"
                  >
                    <div className="grid grid-cols-12 w-full gap-x-6">
                      {!isMobile ? (
                        <>
                          {FooterOptions.map((item, index) => (
                            <React.Fragment key={index}>
                              <div
                                className="uppercase font-semibold text-sm px-4 col-span-3 md:col-span-3 lg:col-span-2 gap-x-1"
                                style={{ color: "white", cursor: "pointer" }}
                                onClick={() => scrollToSection(item?.route)}
                              >
                                {item.label}
                                <div className="grid grid-cols-1 mt-2 font-light">
                                  {item?.subtopics?.map((subitem, subIndex) => (
                                    <div key={subIndex} className="text-white text-[10px]">
                                      {subitem}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </React.Fragment>
                          ))}
                        </>
                      ) : (
                        <>
                          {FooterOptions.map((item, index) => (
                            <React.Fragment key={index}>
                              <div
                                className="uppercase font-semibold text-[9px] px-2 col-span-4"
                                style={{ color: "white", cursor: "pointer" }}
                                onClick={() => handleFooterOptionClick(item.route)}
                              >
                                {item.label}

                              </div>
                            </React.Fragment>
                          ))}
                        </>
                      )}
                    </div>
                  </Box>
                  <Box
                    display="flex"
                    gap={3}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ width: "100%" }}
                  >
                    <Link href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
                      <Image
                        src="/youtubenew.png"
                        alt="Youtube logo"
                        width={70}
                        height={70}
                        style={{ marginRight: 8 }}
                      />
                    </Link>
                    <Link href="https://www.instagram.com/vyn_automation/?next=%2F&hl=en">
                      <Image
                        src="/instanew.png"
                        alt="Instagram logo"
                        width={40}
                        height={40}
                        style={{ marginRight: 8 }}
                      />
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=100086357197639">
                      <Image
                        src="/fb.png"
                        alt="Facebook logo"
                        width={50}
                        height={50}
                        style={{ marginRight: 8 }}
                      />
                    </Link>
                    <Link href="https://www.linkedin.com/in/vyn-automation-276753337/">
                      <Image
                        src="/linkedin.png"
                        alt="Linkedin logo"
                        width={40}
                        height={40}
                        style={{ marginRight: 8 }}
                      />
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=100086357197639">
                      <Image
                        src="/twitternew.png"
                        alt="Twitter logo"
                        width={70}
                        height={70}
                        style={{ marginRight: 8 }}
                      />
                    </Link>
                  </Box>
                </Box>
              </footer>
            </>
          )}
        </>
      </div>
    </div>

  );
}
