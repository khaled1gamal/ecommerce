/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Stack,
  ToggleButton,
  Typography,
  useTheme,
} from "@mui/material";

import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

const ProductInfo = ({ addBTN }) => {
  const theme = useTheme();
  const [selectedImg, setSelectedImg] = useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: { sx: "center", sm: "space-around" },
        gap: 1.5,
        p: 1,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <img
          style={{ maxWidth: "450px" }}
          src={addBTN.attributes.proImg.data[selectedImg].attributes.url}
          alt=""
        />
      </Box>
      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">{addBTN.attributes.proName}</Typography>
        <Typography color={theme.palette.error.main} variant="h6">
          ${addBTN.attributes.proPrice}
        </Typography>
        <Typography component={"p"}>{addBTN.attributes.proInfo}</Typography>
        <Stack
          justifyContent={{ xs: "center", sm: "flex-start" }}
          gap={1}
          direction={"row"}
        >
          <ToggleButtonGroup
            value={selectedImg}
            exclusive
            aria-label="text alignment"
            sx={{".Mui-selected":{opacity:"1"}}}
          >
            {addBTN.attributes.proImg.data.map((item, i) => {
              return (
                <ToggleButton
                  key={i}
                  value={i}
                  sx={{ p: 0, mx: 1, opacity: "0.5" }}
                >
                  <img
                    onClick={() => {
                      setSelectedImg(i);
                    }}
                    style={{ cursor: "pointer" }}
                    width={60}
                    src={item.attributes.url}
                    alt=""
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </Stack>
        <Button sx={{ textTransform: "capitalize", mt: 1 }} size="medium">
          add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductInfo;
