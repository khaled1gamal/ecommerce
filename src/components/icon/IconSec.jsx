import {
  BeachAccess,
  Pets,
  Tsunami,
  VolunteerActivism,
} from "@mui/icons-material";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";

// eslint-disable-next-line react/prop-types
const MyBoox = ({ icon, title }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        ".MuiSvgIcon-root": {
          color: theme.palette.primary.dark,
          fontSize: "43px",
        },
        flexGrow: 1,
        gap: 2,
        justifyContent: "center",
        py: 4,
      }}
    >
      {icon}
      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 25,
            color: theme.palette.error.main,
          }}
          variant="body1"
          color="initial"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

const IconSec = () => {
  return (
    <Container>
      <Stack sx={{ flexWrap: "wrap" }} direction={"row"} alignItems={"center"}>
        <MyBoox icon={<Pets />} title={"CAT"} />
        <MyBoox icon={<Tsunami />} title={"WAVES"} />
        <MyBoox icon={<BeachAccess />} title={"UMBRELLA"} />
        <MyBoox icon={<VolunteerActivism />} title={"GIVE LOVE"} />
      </Stack>
    </Container>
  );
};

export default IconSec;
