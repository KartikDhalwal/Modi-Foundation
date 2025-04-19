"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GrFacebook } from "react-icons/gr";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export default function Footer({
}: {
}) {
  const router = useRouter();
  const theme = useTheme();

  return (
    <footer>
      <Box
        sx={{
          background: "#E6F5F0", 
          borderTop: "1px solid #ccc",
          pt: 2,
          pb: 3,
          mt: 5,
        }}
      >
        {/* Contact info */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={3}
          flexDirection={{ xs: "column", sm: "row" }}
          gap={2}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <span style={{ fontSize: "18px" }}><IoIosCall /></span>
            <span>Call us for Enquiry : (+91) 70731 83163</span>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <span style={{ fontSize: "16px" }}>✉️</span>
            <span>support@modifoundation.com</span>
          </Box>
        </Box>

        {/* Social Icons */}
        <Box display="flex" justifyContent="center" border={1} padding={3} mt={2} gap={3}>
          <a href="#" aria-label="Facebook" className="flex bg-[#005632] items-center justify-center rounded-full p-2">
          <FaFacebookF color="white"  />
          </a>
          <a href="#" aria-label="Instagram" className="flex bg-[#005632] items-center justify-center rounded-full p-2">
          <FaInstagram color="white" />
          </a>
          <a href="#" aria-label="YouTube" className="flex bg-[#005632] items-center justify-center rounded-full p-2">
          <FaYoutube color="white" />
          </a>
        </Box>

        {/* Copyright */}
        <Box display="flex" justifyContent="center" mt={2} fontSize="14px">
          © 2025 modifoundation – All rights reserved
        </Box>
      </Box>
    </footer>
  );
}
