import OpenInNewIcon from "@mui/icons-material/OpenInNew";
export const Footer = () => {
  const team = [
    {
      label: "Jey Kim",
      url: "https://www.linkedin.com/in/je-yeon-kim-5a26a2192/",
    },
    {
      label: "Kenneth Williams Jr.",
      url: "https://www.linkedin.com/in/kenneth-williams-dev/",
    },
    { label: "Michael Lue", url: "https://www.linkedin.com/in/mlue/" },
  ];
  
  return (
    <div className="bg-[#37474F] flex justify-center py-[48px] px-[120px]">
      <div className="w-[100%] max-w-[1200px] flex flex-col gap-[48px]">
        <div className="flex justify-between">
          <div>
            {" "}
            <img className="w-[86px]" src={"/images/GovanLogo_Square.png"} />
          </div>

          <div className="flex flex-col gap-[24px]">
            <h4 className="uppercase text-[#B0BEC5] font-[600]">The Team</h4>

            <ul className="flex flex-col gap-[24px] text-[#ECEFF1]">
              {team.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-[4px]"
                  >
                    {item.label}
                    <OpenInNewIcon sx={{ fontSize: "16px" }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <footer className="flex justify-between text-[14px] font-[600]">
          <p className="text-[#ECEFF1]">2024 Govan. All Rights Reserved.</p>
          <p className="text-[#B0BEC5]">
            Last updated on May 30, 2024, 12:35 AM EST
          </p>
        </footer>
      </div>
    </div>
  );
};
