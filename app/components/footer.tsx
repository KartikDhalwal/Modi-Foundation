"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
            <span style={{ fontSize: "18px" }}>📞</span>
            <span>Call us for Enquiry : (+91) 1800 1880 1880</span>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <span style={{ fontSize: "16px" }}>✉️</span>
            <span>support@modifoundation.com</span>
          </Box>
        </Box>

        {/* Social Icons */}
        <Box display="flex" justifyContent="center" mt={2} gap={3}>
          <a href="#" aria-label="Facebook" style={{ color: "#000" }}>
            🟢
          </a>
          <a href="#" aria-label="Instagram" style={{ color: "#000" }}>
            📸
          </a>
          <a href="#" aria-label="YouTube" style={{ color: "#000" }}>
            ▶️
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
