import { Box } from "@mui/material";
import { ReactNode } from "react";

interface SectionLayoutProps {
  backgroundColor: string;
  content: ReactNode;
  stylePreference?: {
    removeTopPadding: true
  };
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({
  backgroundColor,
  content,
  stylePreference
}) => {
  return (
    <Box sx={{ backgroundColor: backgroundColor }}>
      <div className="flex">
        <div className="w-1/3"></div>
        <Box  sx={{zIndex: 99}}className={`w-2/3 ${stylePreference?.removeTopPadding ? `pt-[12px] pb-[96px]` : ` py-[96px]` } pr-[120px] flex flex-col justify-center items-center`}>
          {" "}
          {content}
        </Box>
      </div>
    </Box>
  );
};
