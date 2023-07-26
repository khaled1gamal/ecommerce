import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";

const ScrollTop = () => {
  return (
    <Zoom in={useScrollTrigger({threshold:120})}>
      <Fab
      onClick={() => {
        window.scrollTo(0,0)
      }}
        variant="extended"
        size="small"
        sx={{ position: "fixed", bottom: 15, right: 15 }}
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
};

export default ScrollTop;
