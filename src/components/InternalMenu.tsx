import { Box } from "@mui/material";

interface InternalMenuProps {
  links: { label: string; ref: React.RefObject<HTMLDivElement> }[];
}

export const InternalMenu: React.FC<InternalMenuProps> = ({ links }) => {
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex w-[100%] fixed top-[100px]">
      <div className="w-1/3 flex justify-center items-center">
        <Box
          sx={{
            border: "1px solid #455A64",
            backgroundColor: "#263238",
            borderRadius: "24px",
            width: "fit-content",
          }}
        >
          <div className="py-[24px] px-[18px] text-[#CFD8DC] font-[700]">
            <div className="pr-[56px]">
              <ul className="flex flex-col gap-[16px]">
                {links.map((item, index) => (
                  <li
                    className="py-[6px] px-[16px]"
                    key={index}
                    onClick={() => scrollToRef(item.ref)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};
