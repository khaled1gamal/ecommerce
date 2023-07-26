import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Close } from "@mui/icons-material";
import ProductInfo from "./ProductInfo";
const MainPro = () => {
  const [alignment, setAlignment] = useState("all");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        sx={{ flexWrap: "wrap" }}
      >
        <Typography variant="h4">Select Group</Typography>
        <ToggleButtonGroup
          sx={{
            gap: 1,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          color="error"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="all">ALL</ToggleButton>
          <ToggleButton value="web">Frame</ToggleButton>
          <ToggleButton value="android">SunGlasses</ToggleButton>
          <ToggleButton value="ios">Lensess</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack
        gap={1}
        justifyContent={"center"}
        direction={"row"}
        sx={{ flexWrap: "wrap", my: 3 }}
      >
        {["1", "2", "3", "4"].map((item) => {
          return (
            <Card
              key={item}
              sx={{
                maxWidth: 300,
                ":hover .MuiCardMedia-root": {
                  scale: "1.1",
                  transition: "1s",
                  rotate: "2deg",
                },
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography gutterBottom component="p">
                    $100
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button
                  onClick={handleClickOpen}
                  sx={{ textTransform: "capitalize" }}
                  size="medium"
                >
                  <AddShoppingCartIcon sx={{ mr: 1 }} fontSize="small" /> add to
                  cart
                </Button>
                <Rating
                  name="read-only"
                  size="small"
                  precision={0.5}
                  value={4.5}
                  readOnly
                />
              </CardActions>
            </Card>
          );
        })}
      </Stack>
      <Dialog
        sx={{
          ".MuiPaper-root": {
            minWidth: { xs: "90%", md: 700 },
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: 'flex-start',
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          // sx={{ position: "absolute", top: 25, right: -5 }}
          onClick={handleClose}
        >
          <Close  />
        </IconButton>
        <ProductInfo />
      </Dialog>
    </Container>
  );
};

export default MainPro;
