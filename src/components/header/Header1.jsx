import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  IconButton,
  useTheme,
  Typography,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  Facebook,
  Instagram,
  LightModeOutlined,
  Twitter,
} from "@mui/icons-material";

const options = ["EN", "AR"];

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#301b70",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
        <Typography
          variant="body2"
          sx={{
            mr: 2,
            p: "3px 7px",
            bgcolor: "#D23F57",
            borderRadius: "10px",
            fontSize: "10px",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          HOT
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "12px",
            fontWeight: 300,
            color: "#fff",
            display: { xs: "none", sm: "flex" },
          }}
        >
          Free Express Shipping
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white",
          mr: 2.5,
          gap: 1.8,
        }}
      >
        <div>
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <LightModeOutlined fontSize="small" />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <DarkModeOutlined fontSize="small" />
            </IconButton>
          )}
        </div>
        <List sx={{ m: 0, p: 0 }} component="nav" aria-label="Device settings">
          <ListItem
            sx={{ cursor: "pointer", px: 0.1 }}
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText secondary={options[selectedIndex]} />
            <ExpandMore sx={{ fontSize: "16px" }} />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              // disabled={index === 0}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
        <Twitter fontSize="small" />
        <Facebook fontSize="small" />
        <Instagram fontSize="small" />
      </Box>
    </Box>
  );
};

export default Header1;
