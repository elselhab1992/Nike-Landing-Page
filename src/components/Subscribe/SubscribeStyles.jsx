import styled from "styled-components";
import { Heading } from "../Headings/HeadingsStyles";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  padding: 3rem 10rem;

  @media (min-width: 300px) {
    flex-direction: column;
    gap: 1rem;
    padding: 20px 10px;
    text-align: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 5rem;
  }

  @media (min-width: 1200px) {
    padding: 3rem 10rem;
    gap: 10rem;
  }
`;

const NewsletterHeading = styled(Heading)`
  color: ${(props) => props.theme.colors.primary};

  @media (min-width: 300px) {
    font-size: ${(props) => props.theme.fontSize.medium};
  }

  @media (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontSize.large};
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  width: 25%;
  padding: 10px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.white};

  @media (min-width: 300px) {
    width: 100%;
    padding: 5px;
  }

  @media (min-width: 768px) {
    width: 40%;
    padding: 10px;
  }

  @media (min-width: 1200px) {
    width: 25%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-weight: ${(props) => props.theme.fontWeight.extraBold};
  border: 0;
  outline: none;
`;

export { Section, NewsletterHeading, InputContainer, Input };
