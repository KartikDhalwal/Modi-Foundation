"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer({ scrollToSection }: { scrollToSection: (ref: React.RefObject<HTMLElement>) => void }) {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Footer options and their corresponding routes
  const FooterOptions = [
    {
      label: "Our Technologies",
      subtopics: ["React", "Java", "Asp.net", "Node.js", "Next.js 14"],
    },
    { label: "Team Autovyn", route: "/team" },
    {
      label: "Services",
      subtopics: ["Cloud Service", "Support Service", "Digital Marketing"],
    },
    { label: "Privacy Policy", route: "/privacy" },
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
    console.log(route,'route')
    router.push(route); 
  };

  return (
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
          <div className="flex w-full justify-evenly">
            {!isMobile ? (
              <>
                {FooterOptions.map((item, index) => (
                  <React.Fragment key={index}>
                    <div
                      className="uppercase font-semibold text-sm px-4"
                      style={{ color: "white", cursor: "pointer" }}
                      onClick={() => {() => scrollToSection(TeamRef)}}
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
                      className="uppercase font-semibold text-xs px-9"
                      style={{ color: "white", cursor: "pointer" }}
                      onClick={() => handleFooterOptionClick(item.route)}
                    >
                      {item.label}
                      <div className="grid grid-cols-1 mt-2">
                        {item?.subtopics?.map((subitem, subIndex) => (
                          <div key={subIndex} className="text-white text-sm">
                            {subitem}
                          </div>
                        ))}
                      </div>
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
          <Link href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
            <Image
              src="/instanew.png"
              alt="Instagram logo"
              width={40}
              height={40}
              style={{ marginRight: 8 }}
            />
          </Link>
          <Link href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
            <Image
              src="/fb.png"
              alt="Facebook logo"
              width={50}
              height={50}
              style={{ marginRight: 8 }}
            />
          </Link>
          <Link href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
            <Image
              src="/linkedin.png"
              alt="Linkedin logo"
              width={40}
              height={40}
              style={{ marginRight: 8 }}
            />
          </Link>
          <Link href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
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
  );
}
