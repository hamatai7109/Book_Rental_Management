import { useState } from "react";
import { Rating, Typography, Box } from "@mui/material";

const RatingParts = () => {
  const [value, setValue] = useState(2);
  return (
    <div>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </div>
  );
};

export default RatingParts;
