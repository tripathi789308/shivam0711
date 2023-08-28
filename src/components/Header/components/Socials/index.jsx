import React from "react";
import { Container, Link } from "./styles";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <Container>
      <Link href="http://linkedin.com/in/tripathi789308" target="_blank">
        <BsLinkedin />
      </Link>
      <Link href="http://github.com/tripathi789308" target="_blank">
        <FaGithub />
      </Link>
    </Container>
  );
};

export default Socials;
