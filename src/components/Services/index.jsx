import React from "react";
import {
  FirstText,
  SecondText,
  ServiceContainer,
  ServiceContainerHead,
  ServiceContainerHeadTitle,
  ServiceList,
  ServiceListItem,
  ServiceListItemParagraph,
  ServicesContainer,
  ServicesWrapper,
} from "./styles";

import { BiCheck } from "react-icons/bi";

const Services = () => {
  const services = {
    "Web Developer": [
      "Led a cross-functional team of 3 to integrate a pioneering Shoppable Video feature into REVO 2.0.",
      "Modifications with meticulous attention to pixel-perfect CSS and Redux to enhance Reactjs functionalities.",
      "Drove website optimization initiatives, resulting in load time reduction by 1s through SSR, gzip, and Cloudfront caching.",
      "Elevated user experience by reducing load time by 50%, automating mp4 video to HLS(m3u8) using Docker, ECR, and AWS Batch.",
    ],
    "Backend Developer": [
      "Pioneered the implementation of concurrency control measures, eliminating race conditions during read/write operations.",
      "Engineered 3rd-party APIs in Golang tailored to 10+ client-specific requirements, enhancing product functionality.",
      "Pivotal role in enhancing code quality written in Golang and streamlining APIs time complexity, reducing latency by at least 30%.",
      "Effectively maintained and fortified backend codes while promptly addressing bugs with tools like Lambda and CodeCommit.",
    ],
    "AWS Engineer": [
      "Executed intricate Elasticsearch queries, established CloudFront aliases for S3 buckets, and facilitated static S3 webpage hosting.",
      "Provided critical support for live streaming via SQS to ensure continuous updating of critical user information.",
      "Used AWS Codepipeline and Codebuild to build CI/CD pipepines for projects",
      "AWS Services used Lambda,CodeCommit,S3,ElasticSearch ,SQS,AWS Batch,Cloudfront,API Gateway.",
      "Automating image generation of different formats and dimensions using S3 and Lambda.",
    ],
  };
  return (
    <ServicesWrapper>
      <SecondText>Works I have done as a</SecondText>
      <ServicesContainer>
        {Object.keys(services).map((service, index) => (
          <ServiceContainer>
            <ServiceContainerHead>
              <ServiceContainerHeadTitle>{service}</ServiceContainerHeadTitle>
            </ServiceContainerHead>
            <ServiceList>
              {services[service].map((item) => (
                <ServiceListItem>
                  <BiCheck className="service__list-icon" />
                  <ServiceListItemParagraph>{item}</ServiceListItemParagraph>
                </ServiceListItem>
              ))}
            </ServiceList>
          </ServiceContainer>
        ))}
      </ServicesContainer>
    </ServicesWrapper>
  );
};

export default Services;
