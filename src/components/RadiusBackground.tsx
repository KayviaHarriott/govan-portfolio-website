import { Box } from "@mui/material";
import { ReactNode } from "react";

interface RadiusBackgroundProps {
  content: ReactNode;
}
export const RadiusBackground: React.FC<RadiusBackgroundProps> = ({
  content,
}) => {
  return (
    <Box
      sx={{ backgroundColor: "#263238", padding: "36px", borderRadius: "24px" }}
    >
      {content}
    </Box>
  );
};
