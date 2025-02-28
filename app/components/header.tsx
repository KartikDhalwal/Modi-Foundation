"use client";

import React, { useEffect, useRef, useState } from "react";
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
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

// Define a type for the ref
type ScrollRef = React.RefObject<HTMLElement>;

export default function Header() {
  const pathname = usePathname();
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const careersRef = useRef<HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Initialize Next.js Router
  const router = useRouter();
  const [targetRef, setTargetRef] =
    useState<React.RefObject<HTMLElement> | null>(null);

  // Function to scroll to the section
  const scrollToSection = (ref: ScrollRef) => {
    console.log(ref, "refrefref");
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // UseEffect to scroll after route changes
  useEffect(() => {
    console.log(targetRef, "targetRef");
    if (targetRef) {
      // Delay the scroll after the page is loaded
      scrollToSection(targetRef);
      setTargetRef(null); // Reset targetRef after scrolling
    }
  }, [router.pathname, targetRef]); // Depend on the router.pathname to trigger when the path changes

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const FooterOptions = [
    "Contacts",
    "Terms of Use",
    "Help Center",
    "Case Study",
    "Contact Us",
  ];

  const navOptions = [
    { label: "Home", ref: homeRef, path: "/" },
    { label: "About Us", ref: aboutRef, path: "/" },
    { label: "Our Products", ref: productsRef, path: "/" },
    { label: "Our Services", ref: servicesRef, path: "/" },
    { label: "Portfolio", ref: portfolioRef, path: "/" },
    { label: "Careers", ref: careersRef, path: "/" },
    { label: "Events", ref: contactRef, path: "/" },
  ];

  const handleMenuClick = (ref: ScrollRef) => {
    console.log(ref, "ref");
    if (pathname == "/") {
      scrollToSection(ref);
    } else {
      router.push("/");
      setTargetRef(ref);
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          color: "white",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(5px)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
                sx={{ color: "black", mr: 20, flexGrow: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1 }}
                style={{ color: "black" }}
              >
                <Image
                  src="/logonew.PNG"
                  alt="Logo"
                  width={180}
                  height={180}
                  style={{ marginRight: 8 }}
                />
              </Typography>
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
                      onClick={() => handleMenuClick(item.ref, item.path)}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1 }}
                style={{ color: "black" }}
              >
                <Image
                  src="/logonew.PNG"
                  alt="Logo"
                  width={180}
                  height={180}
                  style={{ marginRight: 8 }}
                />
              </Typography>
              {navOptions.map((item, index) => (
                <Button
                  key={index}
                  color="primary"
                  onClick={() => handleMenuClick(item.ref)}
                  style={{ color: "#34251F" }}
                  className="text-Lato-1652"
                >
                  {item.label}
                </Button>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
