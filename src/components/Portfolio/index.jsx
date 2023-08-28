import React from "react";
import {
  FirstText,
  PortfolioContainer,
  PortfolioItem,
  PortfolioItemCta,
  PortfolioItemImage,
  PortfolioItemImageContainer,
  PortfolioItemLink,
  PortfolioItemLinkTwo,
  PortfolioTitle,
  PortfolioWrapper,
  SecondText,
} from "./styles";
import Image01 from "../../assets/img/Portfolio1.png";
import Image02 from "../../assets/img/Portfolio2.png";
import Image03 from "../../assets/img/Portfolio3.png";
import Image04 from "../../assets/img/Portfolio4.png";
import Image05 from "../../assets/img/Portfolio5.png";
import Image06 from "../../assets/img/Portfolio6.png";

const data = [
  {
    id: 1,
    image: Image01,
    title: "Seam Carving Project with Python and Django",
    href1:
      "https://drive.google.com/file/d/1HRCD5A9tsNP3PAybYIexJsfUeJRUX_dG/view?usp=sharing",
    href2: "https://github.com/tripathi789308/seam-carving",
    button1: "Video",
    button2: "Github",
  },
  {
    id: 2,
    image: Image02,
    title: "Play Suduko",
    href1: "https://master--fantastic-taffy-9cea1c.netlify.app/",
    href2: "https://github.com/tripathi789308/play-sudoko",
    button1: "Demo",
    button2: "Github",
  },
  {
    id: 3,
    image: Image03,
    title: "Roll the Dice",
    href1: "https://tripathi789308.github.io/roll-the-dice",
    href2: "https://github.com/tripathi789308/roll-the-dice",
    button1: "Demo",
    button2: "Github",
  },
  {
    id: 4,
    image: Image04,
    title: "Mirror Chat Bot",
    href1: "https://mirror-chat-bot.vercel.app/",
    href2: "https://github.com/tripathi789308/mirror-chat-bot",
    button1: "Demo",
    button2: "Github",
  },
  {
    id: 5,
    image: Image05,
    title: "Invoice Generator",
    href1:
      "https://drive.google.com/file/d/1cBrwMKrkgG-G3tA1iu9Xn-cgwY7UJVHB/view?usp=drivesdk",
    href2: "https://github.com/tripathi789308/bcf-invoice",
    button1: "Video",
    button2: "Github",
  },
  {
    id: 6,
    image: Image06,
    title: "Diagnosis - Diseases Predictor",
    href1: "https://github.com/tripathi789308/Diagnosis",
    href2: "https://github.com/tripathi789308/Diagnosis#readme",
    button1: "Github",
    button2: "Usage",
  },
];

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <FirstText>My Recent Work</FirstText>
      <SecondText>Portfolio</SecondText>

      <PortfolioContainer>
        {data.map((item) => (
          <PortfolioItem key={item.id}>
            <PortfolioItemImageContainer>
              <PortfolioItemImage src={item.image} alt={item.title} />
            </PortfolioItemImageContainer>
            <PortfolioTitle>{item.title}</PortfolioTitle>
            <PortfolioItemCta>
              <PortfolioItemLink href={item.href1} target="_blank">
                {item.button1}
              </PortfolioItemLink>
              <PortfolioItemLinkTwo href={item.href2} target="_blank">
                {item.button2}
              </PortfolioItemLinkTwo>
            </PortfolioItemCta>
          </PortfolioItem>
        ))}
      </PortfolioContainer>
    </PortfolioWrapper>
  );
};

export default Portfolio;
