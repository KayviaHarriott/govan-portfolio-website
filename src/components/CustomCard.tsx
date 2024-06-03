import { Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
interface CustomCardProps {
  label: string;
  text: string;
  url: string;
}
export const CustomCard: React.FC<CustomCardProps> = ({ label, text, url }) => {
  return (
    <Box
      sx={{
        border: "2px solid #546E7A",
        borderRadius: "24px",
        padding: "24px 36px",
        maxWidth: "500px",
      }}
      className="flex flex-col gap-[36px]"
    >
      <div className="flex flex-col gap-[24px]">
        <h2 className="text-[32px] text-[#ECEFF1] font-[700]">{label}</h2>
        <p className="text-[14px] text-[#CFD8DC]">{text}</p>
      </div>
      <div className="flex justify-end">
        <Link to={url}>
          <ArrowForwardIcon sx={{ color: "#CFD8DC" }} />
        </Link>
      </div>
    </Box>
  );
};
