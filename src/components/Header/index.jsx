import React from "react";

import CallToAction from "./components/CallToAction";

import {
  ContainerMyProfile,
  FirstText,
  HeaderContainer,
  HeaderWrapper,
  MyPhoto,
  SecondText,
  ThirdText,
  ScrollDownLink,
} from "./styles";

import Me from "../../assets/img/Me.jpg";
import Socials from "./components/Socials";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <FirstText>Hello I'm</FirstText>
        <SecondText>Shivam Tiwari</SecondText>
        <ThirdText>Full Stack Developer</ThirdText>

        <CallToAction />
        <Socials />

        <ContainerMyProfile>
          <MyPhoto style={{ borderRadius: "inherit" }} src={Me} alt="Me" />
        </ContainerMyProfile>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
