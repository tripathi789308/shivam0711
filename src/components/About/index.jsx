import React from "react";
import {
  AboutContainer,
  AboutContainerContent,
  AboutContainerContentCard,
  AboutContainerContentCardFirstText,
  AboutContainerContentCards,
  AboutContainerContentCardSecondText,
  AboutContainerMe,
  AboutContainerMeImg,
  AboutParagraph,
  AboutWrapper,
  FirstText,
  SecondText,
} from "./styles";

import { FaAward } from "react-icons/fa";

import Me from "../../assets/img/me-about.jpeg";
const About = () => {
  return (
    <AboutWrapper>
      <FirstText>Get To Know</FirstText>
      <SecondText>About Me</SecondText>

      <AboutContainer>
        <AboutContainerMe>
          <AboutContainerMeImg src={Me} alt="About Image" />
        </AboutContainerMe>

        <AboutContainerContent>
          <AboutContainerContentCards>
            <AboutContainerContentCard>
              <FaAward className="about__icon" />
              <AboutContainerContentCardFirstText>
                Experience
              </AboutContainerContentCardFirstText>
              <AboutContainerContentCardSecondText>
                2+ Years Working
              </AboutContainerContentCardSecondText>
            </AboutContainerContentCard>
          </AboutContainerContentCards>
          <AboutParagraph>
            With a foundation in cutting-edge technologies and a proven track
            record of impactful contributions, I am eager to take on new
            challenges and continue my journey of innovation in the field of
            software development.
          </AboutParagraph>
        </AboutContainerContent>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;
