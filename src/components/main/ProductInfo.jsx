import { Box, Button, Stack, Typography, useTheme } from "@mui/material";

const ProductInfo = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        p: 1,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{display:"flex"}}>
        <img src="src/images/hero-1.jpg" alt="" />
      </Box>
      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">Product Name</Typography>
        <Typography color={theme.palette.error.main} variant="h6">
          $150
        </Typography>
        <Typography component={"p"}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Stack
          justifyContent={{ xs: "center", sm: "flex-start" }}
          gap={1}
          direction={"row"}
        >
          {[
            "src/images/hero-4.jpg",
            "src/images/hero-4.jpg",
            "src/images/hero-4.jpg",
          ].map((item, i) => {
            return <img key={i} width={60} src={item} alt="" />;
          })}
        </Stack>
        <Button sx={{ textTransform: "capitalize", mt: 1 }} size="medium">
          add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductInfo;
