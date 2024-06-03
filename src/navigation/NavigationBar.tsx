import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  const links = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Research",
      url: "/research",
    },
    {
      label: "Design",
      url: "/design",
    },
  ];
  return (
    <Box  sx={{ zIndex: "10",}}className="flex justify-center px-[16px] py-[16px] sm:px-[120px] sm:py-[20px]">
      <div className="w-[100%] max-w-[1200px] flex flex-col sm:flex-row items-center gap-[24px] sm:gap-[70px]">
        <img className="w-[100px]" src={"/images/GovanLogo.png"} />
        <div className="flex gap-[70px] font-[700] text-[#263238]">
          {links.map((item, index) => (
            <Link key={index} to={item.url}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </Box>
  );
};
