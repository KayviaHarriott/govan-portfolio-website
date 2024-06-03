import { Divider } from "@mui/material";
import { CustomCard } from "../components/CustomCard";
import { SectionHeader } from "../components/SectionHeader";
import // useEffect,
// useRef,
// useState
"react";
import { RadiusBackground } from "../components/RadiusBackground";
import { CustomTimeline } from "../components/Timeline";
// import {Box} from "@mui/material";

export const LandingPage = () => {
  const padding = "py-[192px] px-[120px]";
  const lightBackground = "#ECEFF1";
  const darkBackground = "#263238";
  const locationStyling = "flex justify-end";
  // const [navOffset, setNavOffset] = useState(0);
  // const navRef = useRef(null);

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

  // const innerNavigation = [
  //   { label: "Introduction", ref: "introduction" },
  //   { label: "The team", ref: "" },
  //   { label: "The problem", ref: "" },
  //   { label: "Timeline", ref: "" },
  //   { label: "Retrospective", ref: "" },
  //   { label: "Next steps", ref: "" },
  // ];

  const team = [
    {
      member: { firstName: "Jey", lastName: "Kim" },
      title: "UI/UX Designer",
      description:
        "Multi-disciplinary designer and creative living in Kingston, Jamaica.",
      url: "",
    },
    {
      member: { firstName: "Kenneth", lastName: "Williams Jr." },
      title: "Back-End Developer",
      description:
        "Skilled back-end developer with a strong background in server-side logic.",
      url: "",
    },
    {
      member: { firstName: "Michael", lastName: "Lue" },
      title: "Front-End Developer",
      description:
        "Experienced front-end developer with a keen eye for detail ",
      url: "",
    },
  ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const navHeight = navRef.current.offsetHeight;
  //     const firstSectionOffset = document.getElementById("project").offsetTop;
  //     const scrollY = window.scrollY;
  //     if (scrollY >= firstSectionOffset) {
  //       setNavOffset(scrollY - firstSectionOffset);
  //     } else {
  //       setNavOffset(0);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="relative">
      {/* <Box
        ref={navRef}
        sx={{
          backgroundColor: "#263238",
          color: "#CFD8DC",
          width: "fit-content",
          padding: "24px 18px",
          border: "1px solid #455A64",
          borderRadius: "24px",
          position: "sticky",
          top: 100,
          left: 40,
          // zIndex: "10",
          marginTop: "-346px"
        }}
        className="flex flex-col gap-[16px]"
      >
        {innerNavigation.map((item, index) => (
          <p key={index} className="font-[700] py-[6px] px-[16px]">
            {item.label}
          </p>
        ))}
      </Box> */}

      <div className={`bg-[#263238] py-[48px] px-[120px] ${locationStyling} `}>
        <div className="w-[100%] max-w-[1000px] flex justify-center">
          <div className="max-w-[1000px]">
            <div className="max-w-[550px] text-center flex flex-col justify-center items-center">
              <img className="w-[156px]" src="/images/GovanLogo_Square.png" />
              <h1 className="text-[64px] font-[700] text-[#FFFF]">Project</h1>
              <p className="text-[#CFD8DC] ">
                A platform that streamlines the process of finding, scheduling
                and reviewing household services
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-[${lightBackground}] py-[192px] px-[120px] ${padding}  ${locationStyling} flex justify-end items-end`}
      >
        <div className="max-w-[1000px]">
          <div className={`flex flex-col gap-[96px]`}>
            <SectionHeader
              subtext={`The Team`}
              title={`Who we are`}
              text={`We're all friends from high school and our friendship 
              began with us working together trying to make a mobile game. 
              We've been lucky to have each other to share our experiences and 
              for sanity checks throughout our careers.`}
              stylePreference={{ leftAligned: true, twoColumns: true }}
            />
            <div className="flex gap-[8px]">
              {team.map((item, index) => (
                <CustomCard
                  key={index}
                  // label={item.member}
                  firstName={item.member.firstName}
                  lastName={item.member.lastName}
                  title={item.title}
                  text={item.description}
                  url={item.url}
                  version="medium"
                />
              ))}
            </div>
            <Divider
              sx={{ borderBottomWidth: "5px", borderColor: "#B0BEC5" }}
            />
            <div className="flex flex-col gap-[192px] items-center">
              <SectionHeader
                subtext={`The Problem`}
                title={`There are many challenges in hiring household services`}
                text={`We conducted interviews to properly identify and define the needs.`}
              />
              <div className="flex flex-col gap-[8px]">
                <RadiusBackground
                  content={
                    <>
                      <p className="text-[#FDFDFD]">
                        Many people were unsure about which service providers
                        were reliable
                      </p>
                    </>
                  }
                />
                <RadiusBackground
                  content={
                    <>
                      <div className="flex flex-col gap-[8px]">
                        <div className="flex gap-[8px]">
                          {[
                            {
                              text: "Some providers would arrive late or not at all.",
                            },
                            {
                              text: "Many people struggled to find reliable contact information.",
                            },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="bg-[#37474F] w-fit py-[16px] px-[36px] rounded-lg flex flex-col gap-[16px]"
                            >
                              <p>Icon</p>
                              <p className="text-[#ECEFF1] font-[400]">
                                {item.text}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="bg-[#C8E6C9] rounded-lg py-[16px] px-[36px]">
                          <p className="uppercase font-[600] text-[#2E7D32]">
                            Research Finding
                          </p>
                          <p>
                            What if service providers were accountable and
                            incentivized to be reliable?
                          </p>
                        </div>
                      </div>
                    </>
                  }
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <RadiusBackground
                  content={
                    <>
                      <p className="text-[#FDFDFD]">
                        People were at loss for judging what costs were
                        reasonable
                      </p>
                    </>
                  }
                />
                <RadiusBackground
                  content={
                    <>
                      <div className="flex flex-col gap-[8px]">
                        <div className="flex gap-[8px]">
                          {[
                            {
                              text: "Costs were not available upfront and contact had to be made in order to find out",
                            },
                            {
                              text: "Word of mouth is the main way people find service providers which is anecdotal",
                            },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="bg-[#37474F] w-fit py-[16px] px-[36px] rounded-lg flex flex-col gap-[16px]"
                            >
                              <p>Icon</p>
                              <p className="text-[#ECEFF1] font-[400]">
                                {item.text}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="bg-[#C8E6C9] rounded-lg py-[16px] px-[36px]">
                          <p className="uppercase font-[600] text-[#2E7D32]">
                            Research Finding
                          </p>
                          <p>
                            What if service providers were accountable and
                            incentivized to be reliable?
                          </p>
                        </div>
                      </div>
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-[${darkBackground}] ${padding}  ${locationStyling}`}>
        <div>
          <SectionHeader
            title={`Timeline`}
            stylePreference={{ darkBackground: true }}
          />
          <div className="bg-[#37474F] rounded-lg">
            <CustomTimeline
              year="2024"
              events={[
                { month: "Jan", text: "DevOps" },
                { month: "Feb", text: "Backend" },
                { month: "Mar", text: "Frontend" },
                { month: "May", text: "Hiatus" },
              ]}
            />
          </div>
        </div>
      </div>
      <div
        className={`bg-[${lightBackground}] ${padding}  ${locationStyling} flex justify-end items-end`}
      >
        <div className="flex flex-col gap-[192px] w-[100%]  max-w-[1000px] items-center">
          <SectionHeader
            subtext={`Retrospective`}
            title={`What we could have done better`}
            text={`This was all our first times carrying out an end-to-end development 
                    plan for a product and we had many success and mistakes.`}
          />
          <div className="flex flex-col gap-[8px] w-[100%]">
            <RadiusBackground
              content={
                <>
                  <div className="flex gap-[24px] ">
                    <p className="text-[#FDFDFD] w-[400px]">
                      Our MVP wasn't small enough
                    </p>
                    <p className="max-w-[400px] text-[#CFD8DC]">
                      In our attempt to keep it as small as we could but
                      <br></br> we made several mistakes.
                    </p>
                  </div>
                </>
              }
            />
            <RadiusBackground
              content={
                <>
                  <div className="">
                    <div className="flex flex-col gap-[8px]">
                      {[
                        {
                          text: "In-app payment system",
                        },
                        {
                          text: "There should have been less service categories",
                        },
                        {
                          text: "In-app offers, deals, or special offers",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-[#37474F] py-[16px] px-[36px] rounded-lg flex  gap-[16px]"
                        >
                          <p>Icon</p>
                          <p className="text-[#ECEFF1] font-[400]">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              }
            />
          </div>
          <div className="flex flex-col gap-[8px] w-[100%]">
            <RadiusBackground
              content={
                <>
                  <div className="flex gap-[24px] ">
                    <p className="text-[#FDFDFD] w-[400px]">
                      We should have been more agile
                    </p>
                    <p className="max-w-[400px] text-[#CFD8DC]">
                      In our attempt to keep it as small as we could but
                      <br></br> we made several mistakes.
                    </p>
                  </div>
                </>
              }
            />
            <RadiusBackground
              content={
                <>
                  <div className="">
                    <div className="flex flex-col gap-[8px]">
                      {[
                        {
                          text: "Estimating tasks, overly documenting and weekly sprints actually negatively the work",
                        },
                        {
                          text: "Weekly working meetings would have been a better use of the time",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-[#37474F] py-[16px] px-[36px] rounded-lg flex  gap-[16px]"
                        >
                          <p>Icon</p>
                          <p className="text-[#ECEFF1] font-[400]">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              }
            />
          </div>
          <Divider
            sx={{
              borderBottomWidth: "5px",
              borderColor: "#B0BEC5",
              width: "100%",
            }}
          />
          <SectionHeader
            subtext={`Next Steps`}
            title={`Where we are`}
            text={`This was all our first times carrying out an end-to-end 
            development plan for a product and we had many success and mistakes.`}
          />
          <div className="w-[100%]">
            <SectionHeader
              subtext={`Philosophy`}
              title={
                <div>
                  {" "}
                  <p>Slow is smooth.</p>
                  <p>Smooth is fast.</p>
                </div>
              }
              text={
                <div className="flex flex-col gap-[24px]">
                  <p>
                    This was our slogan when starting this project. In the past,
                    we felt disappointed when projects didn't pan out but we
                    decided we needed a change of mindset in approaching
                    projects.
                  </p>
                  <p>
                    This was a labour of love for Jamaica, of camaraderie
                    between 3 close friends and a project to challenge
                    ourselves. We hope you will return when we follow up with
                    more updates!`
                  </p>
                </div>
              }
              stylePreference={{ leftAligned: true, twoColumns: true }}
            />
          </div>
          <div className="w-[100%]">
            <SectionHeader
              subtext={`Current Status`}
              title={`Indefinite hiatus`}
              text={
                <div className="flex flex-col gap-[24px]">
                  <p>
                    We still haven't completed Govan with FE and a lot of
                    research still needs to be done.
                  </p>
                  <p>
                    We've had to put things on hiatus at the moment with one of
                    the team migrating, one member getting familiar with a new
                    workplace and another adjusting to a change in career.
                  </p>
                </div>
              }
              stylePreference={{ leftAligned: true, twoColumns: true }}
            />
          </div>
        </div>
      </div>
      <div
        className={`bg-[${darkBackground}] px-[16px] py-[32px] sm:py-[96px] sm:px-[120px] ${locationStyling}`}
      >
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
    </div>
  );
};
