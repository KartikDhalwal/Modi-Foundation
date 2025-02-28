// components/Navbar.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";

type NavbarProps = {
  navOptions: { label: string; ref: React.RefObject<HTMLElement>; id: string }[];
  toggleDrawer: (open: boolean) => () => void;
  drawerOpen: boolean;
  handleMenuClick: (ref: React.RefObject<HTMLElement>) => void;
};

const Navbar: React.FC<NavbarProps> = ({ navOptions, toggleDrawer, drawerOpen, handleMenuClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        color: "#34251F",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(5px)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        height: "60px",
      }}
    >
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)} sx={{ mr: 12, flexGrow: 1 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }} style={{ color: "#34251F" }}>
              <Image
                src="/logonew.png"
                alt="Linkedin logo"
                width={250}
                height={180}
                style={{ marginRight: 8 }}
              />
            </Typography>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List>
                {navOptions.map((item, index) => (
                  <ListItem component="li" button key={index} onClick={() => handleMenuClick(item.ref)}>
                    <ListItemText primary={item.label} className="text-nunito-2027" />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <>
            <Typography variant="h5" sx={{ mr: 12, flexGrow: 1 }}>
              <Image src="/logonew.png" alt="Linkedin logo" width={250} height={180} style={{ marginRight: 8 }} />
            </Typography>
            {navOptions.map((item, index) => (
              <Button
                key={index}
                color="primary"
                onClick={() => handleMenuClick(item.ref)}
                style={{ color: "#34251F" }}
                sx={{
                  fontFamily: "Ledger",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "52px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  color: "#34251F",
                }}
              >
                {item.label}
              </Button>
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
