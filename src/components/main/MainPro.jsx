import {
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

const MainPro = () => {
  const [alignment, setAlignment] = useState("all");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Container>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        sx={{flexWrap:"wrap"}}
      >
        <Typography variant="h4">Select Group</Typography>
        <ToggleButtonGroup
          sx={{
            gap: 1,
            flexWrap:"wrap",
            justifyContent:"center",
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
      <Stack></Stack>
    </Container>
  );
};

export default MainPro;
