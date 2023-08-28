import React from "react";
import {
  ExperienceContainer,
  ExperienceContainerBackEnd,
  ExperienceContainerBackEndText,
  ExperienceContainerDetails,
  ExperienceContainerDetailsFirstText,
  ExperienceContainerDetailsSecondText,
  ExperienceContainerDetailsWrapper,
  ExperienceContainerFrontEnd,
  ExperienceContainerFrontEndText,
  ExperienceContent,
  ExperienceWrapper,
  FirstText,
  SecondText,
} from "./styles";

import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const experiences = {
    "Frontend Development": [
      { tech: "Javascript", level: "Expert" },
      { tech: "Reactjs", level: "Expert" },
      { tech: "HTML", level: "Expert" },
      { tech: "CSS", level: "intermediate" },
    ],
    "Backend Development": [
      { tech: "Golang", level: "Expert" },
      { tech: "Nodejs", level: "Intermediate" },
      { tech: "Java", level: "Expert" },
      { tech: "AWS services", level: "Intermediate" },
    ],
  };
  return (
    <ExperienceWrapper>
      <SecondText>What Skills I Have</SecondText>

      <ExperienceContainer>
        <ExperienceContainerFrontEnd>
          <ExperienceContainerFrontEndText>
            Frontend Development
          </ExperienceContainerFrontEndText>
          <ExperienceContent>
            {experiences["Frontend Development"].map((item) => (
              <ExperienceContainerDetails>
                <BsPatchCheckFill className="experience__details-icon" />
                <ExperienceContainerDetailsWrapper>
                  <ExperienceContainerDetailsFirstText>
                    {item.tech}
                  </ExperienceContainerDetailsFirstText>
                  <ExperienceContainerDetailsSecondText>
                    {item.level}
                  </ExperienceContainerDetailsSecondText>
                </ExperienceContainerDetailsWrapper>
              </ExperienceContainerDetails>
            ))}
          </ExperienceContent>
        </ExperienceContainerFrontEnd>

        <ExperienceContainerBackEnd>
          <ExperienceContainerBackEndText>
            Backend Development
          </ExperienceContainerBackEndText>
          <ExperienceContent>
            {experiences["Backend Development"].map((item) => (
              <ExperienceContainerDetails>
                <BsPatchCheckFill className="experience__details-icon" />
                <ExperienceContainerDetailsWrapper>
                  <ExperienceContainerDetailsFirstText>
                    {item.tech}
                  </ExperienceContainerDetailsFirstText>
                  <ExperienceContainerDetailsSecondText>
                    {item.level}
                  </ExperienceContainerDetailsSecondText>
                </ExperienceContainerDetailsWrapper>
              </ExperienceContainerDetails>
            ))}
          </ExperienceContent>
        </ExperienceContainerBackEnd>
      </ExperienceContainer>
    </ExperienceWrapper>
  );
};

export default Experience;
