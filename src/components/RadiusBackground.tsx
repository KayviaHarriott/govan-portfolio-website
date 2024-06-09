import { Box } from "@mui/material";
import { ReactNode } from "react";

interface RadiusBackgroundProps {
  content?: ReactNode;
  title?: string;
  text?: string;
  stylePreferences?: {
    lightBackground: true;
  };
}
export const RadiusBackground: React.FC<RadiusBackgroundProps> = ({
  content,
  title,
  text,
  stylePreferences,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: stylePreferences?.lightBackground
          ? "#C8E6C9"
          : "#263238",
        paddingY: stylePreferences?.lightBackground ? "16px" : "36px",
        paddingX: "36px",
        borderRadius: stylePreferences?.lightBackground ? "16px" : "24px",
      }}
    >
      {stylePreferences?.lightBackground && (
        <>
          <p className="text-[#2E7D32] uppercase"> {title}</p>
          <p className="text-[#263238]"> {text}</p>
        </>
      )}
      {content}
    </Box>
  );
};
