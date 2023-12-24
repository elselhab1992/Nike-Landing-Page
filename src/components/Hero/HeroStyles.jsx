import styled from "styled-components";
import { HiArrowRightCircle } from "react-icons/hi2";
import img from "../../assets/images/collection-background.svg";
import thumbnailBg from "../../assets/images/thumbnail-background.svg";

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 8rem;

  @media (min-width: 300px) {
    padding: 10px;
    flex-direction: column-reverse;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    padding: 0 8rem;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;

  @media (min-width: 300px) {
    gap: 0.5rem;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 1024px) {
    gap: 1.5rem;
    align-items: flex-start;
    text-align: left;
  }
`;

const TopText = styled.p`
  color: ${(props) => props.theme.colors.secondary};
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: ${(props) => props.theme.fontWeight.extraBold};
  line-height: 1.2;

  @media (min-width: 300px) {
    font-size: ${(props) => props.theme.fontSize.large};
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.xl};
  }
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.secondary};
`;

const MainText = styled.p`
  width: 70%;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 70%;
  }
`;

const Icon = styled(HiArrowRightCircle)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSize.medium};
  border-radius: 50%;
`;

const Statistics = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4rem;
  margin-top: 3rem;
  line-height: 1.2;

  @media (min-width: 300px) {
    margin-top: 1rem;
    gap: 3rem;
  }

  @media (min-width: 768px) {
    gap: 4rem;
  }

  @media (min-width: 1200px) {
    margin-top: 3rem;
  }
`;

const StatisticsHeading = styled.h3`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.regular};
`;

const RightContainer = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  padding: 7rem 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;

  @media (min-width: 300px) {
    padding: 1rem;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    align-items: center;
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
  }

  @media (min-width: 1200px) {
    padding: 7rem 3.5rem;
    gap: 4rem;
  }
`;

const MainImages = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
`;

const Thumbnail = styled.img`
  background-image: url(${thumbnailBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export {
  Section,
  LeftContainer,
  TopText,
  Heading,
  Span,
  MainText,
  Icon,
  Statistics,
  StatisticsHeading,
  RightContainer,
  MainImages,
  Img,
  ThumbnailContainer,
  Thumbnail,
};
