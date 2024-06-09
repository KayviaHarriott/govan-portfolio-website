import { Divider } from "@mui/material";
import { SectionHeader } from "../components/SectionHeader";
import { RadiusBackground } from "../components/RadiusBackground";
import { InternalMenu } from "../components/InternalMenu";
import { useRef } from "react";
import { SectionLayout } from "../components/SectionLayout";
import { CustomCard } from "../components/CustomCard";
// import { Link } from "react-router-dom";

export const Research = () => {
  const introductionRef = useRef<HTMLDivElement>(null);
  const assumptionsRef = useRef<HTMLDivElement>(null);
  const challengesRef = useRef<HTMLDivElement>(null);
  const approachesRef = useRef<HTMLDivElement>(null);
  const analysesRef = useRef<HTMLDivElement>(null);

  const links = [
    // {
    //   label: "Research",
    //   description:
    //     "Approached to gathering and interpreting the data that informed development",
    //   url: "/research",
    // },
    {
      label: "Design",
      description:
        "Research findings and user needs with design principles and UX decisions",
      url: "/design",
    },
  ];

  return (
    <>
      <div className="relative">
        <InternalMenu
          links={[
            { label: "Introduction", ref: introductionRef },
            { label: "Assumptions", ref: assumptionsRef },
            { label: "Challenges", ref: challengesRef },
            { label: "Approaches", ref: approachesRef },
            { label: "Analyses", ref: analysesRef },
          ]}
        />

        <div ref={introductionRef}>
          <SectionLayout
            backgroundColor="#ECEFF1"
            content={
              <div className="flex flex-col gap-[192px]">
                <SectionHeader
                  backgroundImage="/images/researchBackgroundImage.png"
                  title={"Research"}
                  subtext="Introduction"
                  text={`This was a continual process where initial findings 
                  uncovered the need for further exploration. This was critical 
                  in informing the direction of UX/UI and development.`}
                  stylePreference={{ pageHeader: true }}
                />
                <Divider
                  sx={{ borderBottomWidth: "5px", borderColor: "#B0BEC5" }}
                />
                <SectionHeader
                  subtext={`Assumptions`}
                  title={`The research challenged our assumptions`}
                  text={`Our assumptions were challenged during the research 
                interview process with renters and landlords.`}
                />

                <div className="flex flex-col gap-[8px]">
                  <RadiusBackground content={<></>} />
                  <RadiusBackground content={<></>} />
                  <RadiusBackground content={<></>} />
                </div>
              </div>
            }
            stylePreference={{ removeTopPadding: true }}
          />
        </div>

        <div ref={introductionRef}>
          <SectionLayout
            backgroundColor="#263238"
            content={
              <div>
                <SectionHeader
                  subtext={`Challenges`}
                  title={`We encountered challenges with upfront costs`}
                  text={`The research showed that seeing upfront costs was a high 
                  priority for people, but there were a few challenges to address this.`}
                  stylePreference={{ darkBackground: true }}
                />
              </div>
            }
          />
        </div>
        <div ref={introductionRef}>
          <SectionLayout
            backgroundColor="#ECEFF1"
            content={
              <div>
                <SectionHeader
                  subtext={`Approach 1`}
                  title={`Encouraging community`}
                  text={`We decided to tackle many of the problems discovered in 
                  research through a community platform. We incorporated 
                  established design patterns in the MVP with plans to test further 
                  after launch.`}
                  // stylePreference={{ darkBackground: true }}
                />
              </div>
            }
          />
        </div>
        <div ref={introductionRef}>
          <SectionLayout
            backgroundColor="#263238"
            content={
              <div>
                <SectionHeader
                  subtext={`Analyses`}
                  title={`Looking at the competition`}
                  text={`This helped us in gaining a comprehensive understanding 
                  of the competition and to position Govan’s value proposition.`}
                  stylePreference={{ darkBackground: true }}
                />
              </div>
            }
          />
        </div>
        <SectionLayout
        backgroundColor="#263238"
        content={
          <div>
            <div className="flex flex-col sm:flex-row gap-[8px]">
              {links.map((item, index) => (
                <CustomCard
                  key={index}
                  label={item.label}
                  text={item.description}
                  url={item.url}
                  version="large"
                />
              ))}
            </div>
          </div>
        }
      />
      </div>
    </>
  );
};
