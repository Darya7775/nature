import styled from "styled-components";

export const WrapperButtons = styled.div `
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ButtonActive = styled.button `
  border: 2px solid ${(props) => props.theme.colorActiveLink};
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorActiveLink};
  padding: 10px 15px;

  font-family: "Work Sans", "Arial", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;

  user-select: none;
  cursor: default;
`;

export const Button = styled.button `
  border: 2px solid ${(props) => props.theme.colorActiveLink};
  background-color: ${(props) => props.theme.colorWhite};
  padding: 10px 15px;

  font-family: "Work Sans", "Arial", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;

  user-select: none;
  cursor: pointer;
`;

export const Content = styled.div `
  width: 100%;
`;
