import React from "react";
import {
  ContactContainer,
  ContactContainerForm,
  ContactContainerFormButton,
  ContactContainerFormInput,
  ContactContainerFormTextArea,
  ContactOption,
  ContactOptionFirstText,
  ContactOptionLink,
  ContactOptions,
  ContactOptionSecondText,
  ContactWrapper,
  FirstText,
  SecondText,
} from "./styles";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <ContactWrapper>
      <FirstText>Get In Touch</FirstText>
      <SecondText>Get In Touch</SecondText>

      <ContactContainer>
        <ContactOptions>
          <ContactOption>
            <MdOutlineEmail className="contact-option-icon" />
            <ContactOptionFirstText>Email</ContactOptionFirstText>
            <ContactOptionSecondText>
              shivam21.t@gmail.com
            </ContactOptionSecondText>
          </ContactOption>
          <ContactOption>
            <BsWhatsapp className="contact-option-icon" />
            <ContactOptionFirstText>WhatsApp</ContactOptionFirstText>
            <ContactOptionSecondText>+918638403543</ContactOptionSecondText>
            <ContactOptionLink
              href="https://api.whatsapp.com/send=phone+918638403543"
              target="_blank"
            >
              Send a message
            </ContactOptionLink>
          </ContactOption>
        </ContactOptions>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
