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
import { useGetproductByNameQuery } from "../../Redux/product";
const MainPro = () => {
  const handleChange = (event, newValue) => {
    setmyDataIs(newValue);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allProductsAPI = "products?populate=*";
  const frameProductsAPI = "products?populate=*&filters[proGroup][$eq]=frame";
  const lensesProductsAPI = "products?populate=*&filters[proGroup][$eq]=lenses";
  const SunGlassesProductsAPI =
    "products?populate=*&filters[proGroup][$eq]=sunGlasses";

  const [myDataIs, setmyDataIs] = useState(allProductsAPI);
  const { data, error, isLoading } = useGetproductByNameQuery(myDataIs);
  if (data) {
    console.log(data.data);
  }

  if (isLoading) {
    return (
      <Typography variant="h1" color="initial">
        Loading
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography sx={{ textAlign: "center" }} variant="h3" color="initial">
        Has Error......
        {
          // @ts-ignore
          error.message
        }
      </Typography>
    );
  }

  if (data) {
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
            value={myDataIs}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value={allProductsAPI}>ALL</ToggleButton>
            <ToggleButton value={frameProductsAPI}>Frame</ToggleButton>
            <ToggleButton value={SunGlassesProductsAPI}>
              SunGlasses
            </ToggleButton>
            <ToggleButton value={lensesProductsAPI}>Lensess</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Stack
          gap={1}
          justifyContent={"center"}
          direction={"row"}
          sx={{ flexWrap: "wrap", my: 3 }}
        >
          {data.data.map((item, i) => {
            return (
              <Card
                key={i}
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
                  // @ts-ignore
                  image={`${import.meta.env.VITE_BASE_URL}${
                    item.attributes.proImg.data[0].attributes.url
                  }`}
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {item.attributes.proName}
                    </Typography>
                    <Typography gutterBottom component="p">
                      ${item.attributes.proPrice}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.proInfo}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={handleClickOpen}
                    sx={{ textTransform: "capitalize" }}
                    size="medium"
                  >
                    <AddShoppingCartIcon sx={{ mr: 1 }} fontSize="small" /> add
                    to cart
                  </Button>
                  <Rating
                    name="read-only"
                    size="small"
                    precision={0.5}
                    value={item.attributes.proRating}
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
              alignItems: "flex-start",
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
            <Close />
          </IconButton>
          <ProductInfo />
        </Dialog>
      </Container>
    );
  }
};

export default MainPro;
