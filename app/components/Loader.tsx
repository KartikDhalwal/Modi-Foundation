// components/LoadingScreen.tsx
import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

const LoadingScreen: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
      flexDirection="column"
    >
      <CircularProgress
        size={80}
        thickness={5}
        sx={{ color: "#34251F", mb: 2 }}
      />
      <Typography variant="h6" color="#34251F" fontFamily="Roboto">
        Loading, please wait...
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
