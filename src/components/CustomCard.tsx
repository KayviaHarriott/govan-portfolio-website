import { Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
interface CustomCardProps {
  label?: string;
  firstName?: string;
  lastName?: string;
  text: string;
  url: string;
  title?: string;
  version: string;
}
export const CustomCard: React.FC<CustomCardProps> = ({
  label,
  firstName,
  lastName,
  text,
  url,
  version,
  title,
}) => {
  switch (version) {
    case "large":
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
    case "medium":
      return (
        <Box
          sx={{
            border: "2px solid #B0BEC5",
            borderRadius: "24px",
            padding: "24px 36px",
            maxWidth: "500px",
          }}
          className="flex flex-col gap-[36px]"
        >
          <div className="flex flex-col gap-[24px]">
            <div>
              <div className="text-[32px] text-[#263238] font-[700] flex flex-col">
               <h2> {firstName}</h2>
               <h2> {lastName}</h2>
              </div>
              <p className="text-[#546E7A] text-[14px] uppercase">{title}</p>
            </div>
            <p className="text-[14px] text-[#37474F]">{text}</p>
          </div>
          <div className="flex justify-end">
            <Link to={url} className="flex gap-[8px] text-[#FB5B03]">
              <p className="font-[700]">Portfolio</p>{" "}
              <ArrowForwardIcon sx={{ color: "##FB5B03" }} />
            </Link>
          </div>
        </Box>
      );
      break;
  }
};
