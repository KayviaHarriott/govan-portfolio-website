import { SectionHeader } from "../components/SectionHeader";

export const LandingPage = () => {
  const padding = "py-[192px] px-[120px]";
  const lightBackground = "#ECEFF1";
  const darkBackground = "#263238";
  const locationStyling = "flex justify-end"
  return (
    <div>
      <div className={`bg-[${darkBackground}] py-[48px] px-[120px] ${locationStyling}`}>
        <div className="max-w-[550px] text-center flex flex-col justify-center items-center">
          <img className="w-[156px]" src="/images/GovanLogo_Square.png" />
          <h1 className="text-[64px] font-[700] text-[#FFFF]">Project</h1>
          <p className="text-[#CFD8DC]">
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
            stylePreference={{ darkBackground: true }}
          />
  
          <SectionHeader
            subtext={`The Problem`}
            title={`There are many challenges in hiring household services`}
            text={`We conducted interviews to properly identify and define the needs.`}
            stylePreference={{ darkBackground: true }}
          />
       </div>
      </div>

      <div className={`bg-[${darkBackground}] ${padding}  ${locationStyling}`}>
        <SectionHeader title={`Timeline`} />
      </div>
      <div
        className={`bg-[${lightBackground}] py-[192px] px-[120px] ${padding}  ${locationStyling}`}
      >
        <SectionHeader
          subtext={`Retrospective`}
          title={`What we could have done better`}
          text={`This was all our first times carrying out an end-to-end development 
                  plan for a product and we had many success and mistakes.`}
          stylePreference={{ darkBackground: true }}
        />
      </div>
      <p>Where we are</p>
      <div>
        <p>Research </p>
        <p>Design</p>
      </div>
    </div>
  );
};
