import { Box } from "@mui/material";
import { ReactNode } from "react";

interface SectionHeaderProps {
  subtext?: string;
  title: string | ReactNode;
  text?: string | ReactNode;
  backgroundImage?: string;
  stylePreference?: {
    darkBackground?: true;
    width?: number;
    leftAligned?: true;
    twoColumns?: true;
    pageHeader?: true;
    smallTitle?: true;
  };
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtext,
  title,
  text,
  backgroundImage,
  stylePreference,
}) => {
  return stylePreference?.pageHeader ? (
    <div>
      {/* <img src={backgroundImage}/> */}
      <Box
        sx={{
          fontSize: "80px",
          fontWeight: "bold",
          // textAlign: stylePreference?.leftAligned ? "left" : "center",
          color: "transparent",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          // transform: "rotate(35deg) translate(-10px, -10px)", // Rotate and move the background image
          display: "inline-block",
        }}
      >
        {title}
      </Box>
      <p className="font-[700] text-[32px]">{subtext}</p>
      <p className="font-[400] text-[#37474F]">{text}</p>
    </div>
  ) : (
    <div className="w-[100%] flex justify-center items-center">
      <div
        className={` ${
          stylePreference?.leftAligned ? "text-left" : "text-center"
        } ${
          stylePreference?.twoColumns
            ? "flex justify-between gap-[24px] "
            : "max-w-[520px] "
        }`}
      >
        <div>
          <Box
            sx={{
              color: stylePreference?.darkBackground ? "#B0BEC5" : "#546E7A",
            }}
          >
            <h5
              className={`uppercase text-[400] text-[14px] text-subtext-custom`}
            >
              {subtext}
            </h5>
          </Box>
          <Box className={`flex w-[100%] ${stylePreference?.leftAligned  ? "" : "text-center justify-center items-center"}`}>
            <h1
              className={`text-[${
                stylePreference?.darkBackground ? `#ECEFF1` : `#263238`
              }] ${
                stylePreference?.smallTitle ? `text-[20px] ` : `text-[32px]`
              }  font-[700] text-title-custom  ${
                stylePreference?.twoColumns ? "w-[400px]" : ""
              } `}
            >
              {title}
            </h1>
            {stylePreference?.smallTitle && (
              <Box
                sx={{
                  color: stylePreference?.darkBackground
                    ? "#CFD8DC"
                    : "#546E7A",
                }}
              >
                <p
                  className={`${
                    stylePreference?.twoColumns ? "max-w-[520px]" : " "
                  }`}
                >
                  {text}
                </p>
              </Box>
            )}
          </Box>
        </div>
        {!stylePreference?.smallTitle && (
          <Box
            sx={{
              color: stylePreference?.darkBackground ? "#CFD8DC" : "#546E7A",
            }}
          >
            <p
              className={`${
                stylePreference?.twoColumns ? "max-w-[520px]" : " "
              }`}
            >
              {text}
            </p>
          </Box>
        )}
      </div>
    </div>
  );
};
