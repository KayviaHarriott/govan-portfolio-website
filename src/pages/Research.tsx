import { Divider } from "@mui/material";
import { SectionHeader } from "../components/SectionHeader";
import { RadiusBackground } from "../components/RadiusBackground";
// import { Link } from "react-router-dom";

export const Research = () => {
  return (
    <>
      <div className="bg-[orange]">
        <div className="bg-[green] w-fit">
          {" "}
         
        </div>
      </div>
      <div className="bg-[red]">
        <p>Research</p>
        <p>Introduction</p>
        <p>Text</p>
        <Divider sx={{ width: "200px" }}></Divider>
        <SectionHeader
          subtext={`Assumptions`}
          title={`The research challenged our assumptions`}
          text={`Our assumptions were challenged during the research 
            interview process with renters and landlords. `}
        />
        <RadiusBackground content={<></>} />
      </div>
    </>
  );
};
