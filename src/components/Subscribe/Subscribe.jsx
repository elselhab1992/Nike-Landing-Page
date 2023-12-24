import { Button } from "../index";
import {
  Section,
  NewsletterHeading,
  InputContainer,
  Input,
} from "./SubscribeStyles";

const Subscribe = () => {
  return (
    <Section>
      {/* left */}
      <div>
        <NewsletterHeading>
          sign up for <span>updates</span>
          <br /> & newsletter
        </NewsletterHeading>
      </div>
      {/* right */}
      <InputContainer>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Subscribe@nike.com"
        />
        <Button>Subscribe</Button>
      </InputContainer>
    </Section>
  );
};

export default Subscribe;
