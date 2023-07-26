import {
  Accordion,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Close,
  ExpandMore,
  KeyboardArrowRight,
  Window,
} from "@mui/icons-material";
import Links from "./Links";

const Header3 = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ width: 200, color: theme.palette.text.secondary }}
        >
          <Window />
          <Typography sx={{ textTransform: "capitalize", padding: 0, mx: 1.5 }}>
            Dashboard
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRight />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Box>
      {useMediaQuery("(min-width:900px)") && (
        <Stack gap={2.5} flexDirection={"row"} alignItems={"center"}>
          <Links titel={"Home"} />
          <Links titel={"Home2"} />
          <Links titel={"Home3"} />
          <Links titel={"Home4"} />
          <Links titel={"Home5"} />
        </Stack>
      )}
      {useMediaQuery("(max-width:900px)") && (
        <IconButton
          onClick={toggleDrawer("top", true)}
          sx={{ color: theme.palette.text.secondary }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".css-1qdun2q-MuiPaper-root-MuiDrawer-paper": { height: "100%" },
        }}
      >
        <Box
          sx={{
            ".css-mt2pj8-MuiPaper-root-MuiAccordion-root.Mui-expanded": {
              m: 0,
            },
            width: { xs: 250, sm: 400 },
            mx: "auto",
            mt: 4,
            position: "relative",
            pt: 10,
          }}
        >
          <IconButton
            sx={{ position: "absolute", top: 25, right: -5 }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>
          {["1111", "222", "333"].map((item) => {
            return (
              <Accordion key={item} elevation={9}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item}</Typography>
                </AccordionSummary>

                <List sx={{ py: 0, m: 0 }}>
                  {["link1", "link1", "link3", "link4"].map((link) => {
                    return (
                      <ListItem key={link} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
