"use client";

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
import MenuIcon from "@mui/icons-material/Menu";
import { LuBellDot } from "react-icons/lu";
import { useState } from "react";

const navOptions = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Programs", id: "programs" },
  { label: "Actions", id: "actions" },
  { label: "Donation", id: "donation" },
  { label: "Contact Us", id: "contactUs" },
  {
    label: "Get Involved",
    id: "getInvolved",
    children: [
      { label: "Our Work" },
      { label: "How to Join" },
      { label: "More Ways to Give" },
    ],
  },
];

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        background: "transparent",
        boxShadow: "none",
        zIndex: (theme) => theme.zIndex.appBar,
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "120%",
          height: "120%",
          backgroundImage: 'url("/homeBg1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
          transform: "scale(1.1)",
          zIndex: -2,
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.3)",
          zIndex: -1,
          pointerEvents: "none",
        },
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          onClick={() => setDrawerOpen(true)}
          sx={{ color: "white" }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton edge="end" sx={{ ml: "auto", color: "white" }}>
          <LuBellDot />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
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
                position: "relative",
                cursor: "pointer",
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
    </AppBar>
  );
}
