import styled, { css } from "styled-components";

const styleButton = css`
  display: block;
  padding: 10px 15px;

  font-family: "Work Sans", "Arial", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;

  user-select: none;
`;

export const ButtonActive = styled.button`
  ${styleButton}
  border: 2px solid ${(props) => props.theme.colorActiveLink};
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorActiveLink};
`;

export const Button = styled.button`
  ${styleButton}
  border: 2px solid ${(props) => props.theme.colorActiveLink};
  background-color: ${(props) => props.theme.colorWhite};
`;
