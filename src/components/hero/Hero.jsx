import { Box, Container, Link, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./HeroSlider.css";

const mySlider = [
  { text: "MEN", link: "src/images/hero-2.jpg" },
  { text: "WOMEN", link: "src/images/hero-4.jpg" },
];

const Hero = () => {
  return (
    <Container sx={{ mt: 2, display: "flex", alignItems: "center", gap: 2 }}>
      <Swiper
      loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {mySlider.map((item) => {
          return (
            <SwiperSlide key={item.link}>
              <img src={item.link} alt="" />
              <Box sx={{ position: "absolute", left: "5%" }}>
                <Typography
                  sx={{
                    color: "#888",
                    fontWeight: 600,
                    fontSize: { xs: "20px", md: "50px" },
                  }}
                  variant="h3"
                >
                  {item.text}
                </Typography>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: 5,
          flexDirection: "column",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <img src="src/images/hero-3.jpg" alt="" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 15,
            }}
          >
            <Typography
              sx={{ fontSize: "18px", color: "#1d01ff" }}
              variant="caption"
            >
              new
            </Typography>
            <Typography sx={{ mt: 1, color: "#1d01ff" }} variant="h6">
              new2222
            </Typography>
            <Link
              sx={{
                color: "#19d2bc",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.5s",
                "&:hover": { color: "red", cursor: "pointer" },
              }}
            >
              Shop
              <ArrowForwardIcon sx={{ fontSize: "15px", ml: 2 }} />
            </Link>
          </Stack>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img src="src/images/hero-1.jpg" alt="" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 15,
            }}
          >
            <Typography
              sx={{ fontSize: "18px", color: "#1d01ff" }}
              variant="caption"
            >
              new
            </Typography>
            <Typography sx={{ mt: 1, color: "#1d01ff" }} variant="h6">
              new333
            </Typography>
            <Link
              sx={{
                color: "#19d2bc",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.5s",
                "&:hover": { color: "red", cursor: "pointer" },
              }}
            >
              Shop
              <ArrowForwardIcon sx={{ fontSize: "15px", ml: 2 }} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
