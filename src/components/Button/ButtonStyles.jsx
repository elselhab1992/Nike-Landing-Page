import styled from "styled-components";

const Buttons = styled.button`
  width: 150px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  padding: 10px;
  border-radius: 20px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  transition: 700ms;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.secondary};
  }
`;

export default Buttons;
