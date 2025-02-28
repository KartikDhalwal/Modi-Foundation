import React from "react";
import { Box, Skeleton } from "@mui/material";

const SectionSkeleton = () => {
  return (
    <Box sx={{ padding: 2 }}>
      {/* Header Skeleton */}
      <Skeleton variant="text" height={40} width="60%" sx={{ marginBottom: 2 }} />
      {/* Image Skeleton */}
      <Skeleton variant="rectangular" height={200} width="100%" sx={{ marginBottom: 2 }} />
      {/* Text Skeleton */}
      <Skeleton variant="text" height={30} width="80%" sx={{ marginBottom: 1 }} />
      <Skeleton variant="text" height={30} width="75%" sx={{ marginBottom: 1 }} />
      <Skeleton variant="text" height={30} width="90%" />
      <Skeleton variant="rectangular" height={200} width="100%" sx={{ marginBottom: 2 }} />
      <Skeleton variant="text" height={30} width="75%" sx={{ marginBottom: 1 }} />
      <Skeleton variant="rectangular" height={200} width="100%" sx={{ marginBottom: 2 }} />
    
    </Box>
  );
};

export default SectionSkeleton;
