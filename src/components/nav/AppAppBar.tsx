"use client";

import * as React from "react";
import { PaletteMode } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import { redirect } from "next/navigation";

const logoStyle = {
  width: "90px",
  marginLeft: "20px",
  height: "auto",
  cursor: "pointer",
};

function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <img
                src={
                  "https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png"
                }
                style={logoStyle}
                alt="logo of Pokemon"
              />
            </Box>
            <Box sx={{ display: "flex" }}>
              <MenuItem
                onClick={() => (window.location.href = "/")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography variant="body2" color="text.primary">
                  Home
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => (window.location.href = "/pokemon-list")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography variant="body2" color="text.primary">
                  Pokemon List
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => (window.location.href = "/pokemon")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography variant="body2" color="text.primary">
                  Pokemon Search
                </Typography>
              </MenuItem>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
