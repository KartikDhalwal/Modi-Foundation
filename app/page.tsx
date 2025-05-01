"use client";

import React, { useEffect, useRef, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { LuBellDot } from "react-icons/lu";
import { useScroll } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingScreen from "./components/Loader";
import SectionSkeleton from "./components/skeleton";
import Footer from "./components/footer";

// Lazy loading with dynamic import (better for Next.js)
const Home1 = dynamic(() => import("./(compWebsite)/home1/page"), {
  suspense: true,
});
const Aboutus = dynamic(() => import("./(compWebsite)/about/page"), {
  suspense: true,
});
const Programs = dynamic(() => import("./(compWebsite)/programs/page"), {
  suspense: true,
});
const AfterNews = dynamic(() => import("./(compWebsite)/afterNews/page"), {
  suspense: true,
});
const AfterNews1 = dynamic(() => import("./(compWebsite)/afterNews1/page"), {
  suspense: true,
});
const Actions = dynamic(() => import("./(compWebsite)/actions/page"), {
  suspense: true,
});
const Donation = dynamic(() => import("./(compWebsite)/donation/page"), {
  suspense: true,
});
const ContactPage = dynamic(() => import("./(compWebsite)/contactus/page"), {
  suspense: true,
});

export default function Home() {
  const { scrollYProgress } = useScroll();
  const theme = useTheme();
  const isMobile : boolean = useMediaQuery(theme.breakpoints.down("sm"));

  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    products: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    programs: useRef<HTMLElement>(null),
    contactUs: useRef<HTMLElement>(null),
    donation: useRef<HTMLElement>(null),
    actions: useRef<HTMLElement>(null),
    portfolio: useRef<HTMLElement>(null),
    Whyautovyn: useRef<HTMLElement>(null),
    Team: useRef<HTMLElement>(null),
    Privacy: useRef<HTMLElement>(null),
  };

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsFading(true), 2500);
    const timer2 = setTimeout(() => setIsLoading(false), 500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const navOptions = [
    { label: "Home", ref: sectionRefs.home, id: "home" },
    { label: "About Us", ref: sectionRefs.about, id: "about" },
    { label: "Products", ref: sectionRefs.products, id: "products" },
    { label: "Resources", ref: sectionRefs.services, id: "services" },
    { label: "Programs", ref: sectionRefs.programs, id: "programs" },
    { label: "Actions", ref: sectionRefs.actions, id: "actions" },
    { label: "Donation", ref: sectionRefs.donation, id: "donation" },
    { label: "Contact Us", ref: sectionRefs.contactUs, id: "contactUs" },
    {
      label: "Get Involved",
      ref: sectionRefs.portfolio,
      id: "portfolio",
      children: [
        { label: "Our Work", ref: sectionRefs.Whyautovyn, id: "Whyautovyn" },
        { label: "How to Join", ref: sectionRefs.Whyautovyn, id: "Whyautovyn" },
        {
          label: "More Ways to give",
          ref: sectionRefs.Whyautovyn,
          id: "Whyautovyn",
        },
        {
          label: "Action Funds",
          ref: sectionRefs.Whyautovyn,
          id: "Whyautovyn",
        },
        { label: "Events", ref: sectionRefs.Whyautovyn, id: "Whyautovyn" },
      ],
    },
    {
      label: "Help",
      ref: sectionRefs.Whyautovyn,
      id: "Whyautovyn",
      children: [
        { label: "Privacy policy", ref: sectionRefs.Privacy, id: "Privacy" },
        {
          label: "Conservation policy",
          ref: sectionRefs.Whyautovyn,
          id: "Whyautovyn",
        },
        {
          label: "Environmental Justice",
          ref: sectionRefs.Whyautovyn,
          id: "Whyautovyn",
        },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
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
    sectionElements.forEach((el) => el && observer.observe(el));

    return () => {
      sectionElements.forEach((el) => el && observer.unobserve(el));
    };
  }, [navOptions]);
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  return (
    <div className="grid grid-cols-12 w-full">
      <div className="col-span-12">
        {isLoading ? (
          <div className={isFading ? "loading-fade-out" : ""}>
            <LoadingScreen />
          </div>
        ) : (
          <Box display="flex" flexDirection="column">
            <Drawer
              anchor="top"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              ModalProps={{
                keepMounted: true,
                sx: {
                  backdropFilter: "blur(5px)",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                },
              }}
              PaperProps={{
                sx: {
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  boxShadow: "none",
                },
              }}
            >
              <List
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  padding: "1px",
                  gap: "10px",
                  position: "relative",
                }}
              >
                {navOptions.map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      flexDirection: "column",
                      alignItems: "center",
                      color: "white",
                      cursor: "pointer",
                      position: "relative",
                      "&:hover .submenu": { display: "flex" },
                    }}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <ListItemText primary={item.label} />

                    {item.children && (
                      <List
                        className="submenu"
                        sx={{
                          display: hoveredItem === item.id ? "flex" : "none",
                          flexDirection: "column",
                          position: "absolute",
                          top: "100%",
                          zIndex: 1,
                          backgroundColor: "rgba(0,0,0,0.8)",
                          padding: "10px",
                          borderRadius: "4px",
                          minWidth: "150px",
                        }}
                      >
                        {item.children.map((child, i) => (
                          <ListItem
                            key={i}
                            sx={{ color: "white", padding: "5px 10px" }}
                          >
                            {child.label}
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <Box>
              <Suspense fallback={<SectionSkeleton />}>
                <Home1 isMobile={isMobile}/>
                <Aboutus isMobile={isMobile}/>
                <Programs />
                <AfterNews />
                <AfterNews1 />
                <Actions />
                <Donation />
                <ContactPage />
              </Suspense>
            </Box>
          </Box>
        )}
      </div>
    </div>
  );
}
