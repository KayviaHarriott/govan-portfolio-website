import { CustomCard } from "../components/CustomCard";
import { SectionHeader } from "../components/SectionHeader";

export const LandingPage = () => {
  const padding = "py-[192px] px-[120px]";
  const lightBackground = "#ECEFF1";
  const darkBackground = "#263238";
  const locationStyling = "flex justify-end";

  const links = [
    {
      label: "Research",
      description:
        "Approached to gathering and interpreting the data that informed development",
      url: "/research",
    },
    {
      label: "Design",
      description:
        "Research findings and user needs with design principles and UX decisions",
      url: "/design",
    },
  ];
  return (
    <div>
      <div
        className={`bg-[${darkBackground}] py-[48px] px-[120px] ${locationStyling}`}
      >
        <div className="max-w-[550px] text-center flex flex-col justify-center items-center">
          <img className="w-[156px]" src="/images/GovanLogo_Square.png" />
          <h1 className="text-[64px] font-[700] text-[#FFFF]">Project</h1>
          <p className="text-[#CFD8DC] ">
            A platform that streamlines the process of finding, scheduling and
            reviewing household services
          </p>
        </div>
      </div>
      <div
        className={`bg-[${lightBackground}] py-[192px] px-[120px] ${padding}  ${locationStyling} `}
      >
        <div className={`flex flex-col gap-[96px]`}>
          <SectionHeader
            subtext={`The Team`}
            title={`Who we are`}
            text={`We're all friends from high school and our friendship 
            began with us working together trying to make a mobile game. 
            We've been lucky to have each other to share our experiences and 
            for sanity checks throughout our careers.`}
          />

          <SectionHeader
            subtext={`The Problem`}
            title={`There are many challenges in hiring household services`}
            text={`We conducted interviews to properly identify and define the needs.`}
          />
        </div>
      </div>

      <div className={`bg-[${darkBackground}] ${padding}  ${locationStyling}`}>
        <SectionHeader
          title={`Timeline`}
          stylePreference={{ darkBackground: true }}
        />
      </div>
      <div
        className={`bg-[${lightBackground}] py-[192px] px-[120px] ${padding}  ${locationStyling}`}
      >
        <div>
          <SectionHeader
            subtext={`Retrospective`}
            title={`What we could have done better`}
            text={`This was all our first times carrying out an end-to-end development 
                    plan for a product and we had many success and mistakes.`}
          />
          <p>Divider</p>
          <SectionHeader
            subtext={`Next Steps`}
            title={`Where we are`}
            text={`This was all our first times carrying out an end-to-end 
            development plan for a product and we had many success and mistakes.`}
          />
          <SectionHeader
            subtext={`Philosophy`}
            title={`Slow is smooth. Smooth is fast.`}
            text={`This was our slogan when starting this project. In the past, we felt disappointed when projects didn't pan out but we decided we needed a change of mindset in approaching projects.

            This was a labour of love for Jamaica, of camaraderie between 3 close friends and a project to challenge ourselves. We hope you will return when we follow up with more updates!`}
          />
          <SectionHeader
            subtext={`Current Status`}
            title={`Indefinite hiatus`}
            text={`We still haven't completed Govan with FE and a lot of research still needs to be done.

            We've had to put things on hiatus at the moment with one of the team migrating, one member getting familiar with a new workplace and another adjusting to a change in career.`}
          />
        </div>
      </div>
      <div className={`bg-[${darkBackground}] py-[96px] px-[120px] ${locationStyling}`}>
        <div className="flex flex-col sm:flex-row gap-[8px]">
          {links.map((item, index) => (
            <CustomCard
              key={index}
              label={item.label}
              text={item.description}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
