/* eslint-disable react/prop-types */

import { Container, Heading, Info } from "./HeadingsStyles";

const Headings = ({ title, info }) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      <Info>{info}</Info>
    </Container>
  );
};

export default Headings;
