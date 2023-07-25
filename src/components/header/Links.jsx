import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const Links = ({ titel }) => {
  return (
    <Box
      // className="border"
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        ":hover .show-when-hover": { display: "block" },
        cursor: "pointer",
      }}
    >
      <Typography variant="body1">{titel}</Typography>
      <ExpandMore sx={{ fontSize: "15px" }} />
      <Box
        className="show-when-hover"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "120px",
          transform: "translateX(-50%)",
          left: "50%",
          display: "none",
          zIndex:2
        }}
      >
        <Paper sx={{ mt: 1 }} className="">
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                    primary="Link1"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                sx={{
                  position: "relative",
                  ":hover .sub-link": { display: "block" },
                  
                }}
                disablePadding
              >
                <ListItemButton sx={{ display: "flex" }}>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                    primary="Link2"
                  />
                  <Box flexGrow={1} />
                  <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>
                <Box
                  className="sub-link"
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: "100%",
                    display: "none",
                    
                  }}
                >
                  <Paper sx={{ ml: 1, minWidth: 120 }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary="Trash" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Spam" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                    primary="Link3"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Links;
