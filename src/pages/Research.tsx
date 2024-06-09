import { Divider } from "@mui/material";
import { SectionHeader } from "../components/SectionHeader";
import { RadiusBackground } from "../components/RadiusBackground";
import { InternalMenu } from "../components/InternalMenu";
import { useRef } from "react";
import { SectionLayout } from "../components/SectionLayout";
import { CustomCard } from "../components/CustomCard";
import { HighlightList } from "../components/HightlightList";
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
                  <RadiusBackground
                    content={
                      <div className="flex flex-col gap-[24px]">
                        <SectionHeader
                          subtext={`Assumption 1`}
                          title={`Renters reach out to businesses`}
                          text={`This assumption was challenged during interview 
                              process with renters`}
                          stylePreference={{
                            leftAligned: true,
                            twoColumns: true,
                            darkBackground: true,
                            smallTitle: true,
                          }}
                        />
                        <RadiusBackground
                          title="Research Finding"
                          text="Renters actually reach out to landlords when they need household services."
                          stylePreferences={{ lightBackground: true }}
                        />
                      </div>
                    }
                  />
                  <RadiusBackground
                    content={
                      <div className="flex flex-col gap-[24px]">
                        <SectionHeader
                          subtext={`Assumption 2`}
                          title={`We assumed users needed a broad 
                          selection of household services`}
                          text={`This assumption came from the competitive research 
                          where many competitors offered a wide array of services`}
                          stylePreference={{
                            leftAligned: true,
                            twoColumns: true,
                            darkBackground: true,
                            smallTitle: true,
                          }}
                        />
                        <RadiusBackground
                          title="Research Finding"
                          text=" Most renters/landlords have a set of 4 - 5 services that are sought after most frequently"
                          stylePreferences={{ lightBackground: true }}
                        />
                      </div>
                    }
                  />
                  <RadiusBackground
                    content={
                      <div className="flex gap-[8px]">
                        <div className="w-[100%] bg-[#37474F] p-[36px] rounded-[24px]">
                          One
                        </div>
                        <div className="w-[100%] bg-[#37474F] p-[36px] rounded-[24px]">
                          <HighlightList
                            list={[
                              { label: "Home Repair" },
                              { label: "Plumbing", highlight: true },
                              { label: "Electrical", highlight: true },
                              { label: "Cleaning", highlight: true },
                              { label: "Appliance Repair", highlight: true },
                              { label: "Automotive Repair" },
                              { label: "Moving" },
                              { label: "Gardening" },
                            ]}
                          />
                        </div>
                      </div>
                    }
                  />
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
              <div className="flex flex-col gap-[192px]">
                <SectionHeader
                  subtext={`Approach 1`}
                  title={`Encouraging community`}
                  text={`We decided to tackle many of the problems discovered in 
                  research through a community platform. We incorporated 
                  established design patterns in the MVP with plans to test further 
                  after launch.`}
                  // stylePreference={{ darkBackground: true }}
                />
                <div className="flex flex-col gap-[8px]">
                  <RadiusBackground
                    content={
                      <SectionHeader
                        title={`Profiles`}
                        text={`We wanted to create a space where users 
                        would feel incentivized to contribute to the community.`}
                        stylePreference={{
                          leftAligned: true,
                          twoColumns: true,
                          darkBackground: true,
                          smallTitle: true,
                        }}
                      />
                    }
                  />
                  <RadiusBackground />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <RadiusBackground
                    content={
                      <SectionHeader
                        title={`Comments`}
                        text={`The review flow was added as a part of the rating flow for users
                         to share their experiences that may not be captured with a rating system.`}
                        stylePreference={{
                          leftAligned: true,
                          twoColumns: true,
                          darkBackground: true,
                          smallTitle: true,
                        }}
                      />
                    }
                  />
                  <RadiusBackground />
                </div>
                <Divider
                  sx={{ borderBottomWidth: "5px", borderColor: "#B0BEC5" }}
                />

                <SectionHeader
                  subtext={`Approach 2`}
                  title={`Safety and reporting`}
                  text={`Our decisions were guided by user research and best practices 
                  in digital security. We implemented intuitive, user-friendly 
                  reporting tools and safety protocols to ensure that users 
                  can confidently report any issues`}
                  // stylePreference={{ darkBackground: true }}
                />
                <div className="flex flex-col gap-[8px]">
                  <RadiusBackground
                    content={
                      <SectionHeader
                        title={`Sharing appointment info`}
                        text={`This feature was added for users to be able to send 
                        to their friends and family which would keep `}
                        stylePreference={{
                          leftAligned: true,
                          twoColumns: true,
                          darkBackground: true,
                          smallTitle: true,
                        }}
                      />
                    }
                  />
                  <RadiusBackground />
                </div>
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
