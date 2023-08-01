import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box  sx={{ textAlign: "center",mt:10,mb:3 }}>
      <Box>
        <Typography>&copy; 2023 - All rights reserved.</Typography>
        By
        <Button>
          KHALED
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
