import styled from "styled-components";
import Burger from "/src/assets/menu.cmp.svg";
import Close from "/src/assets/close.cmp.svg";

export const StyleNavigation = styled.nav`
  position: relative;

  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.colorBlack};
`;

export const StyleNavigationActive = styled.nav`
  width: 70%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 7;
  display: flex;
  flex-direction: column;
  padding: 20px;

  background-color: ${(props) => props.theme.colorWhite};
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;

  background-color: rgba(251,251,251, 0.3);

  width: 100%;
  height: 100vh;

  cursor: pointer;
`;

export const ListNavigation = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;

export const BurgerNav = styled(Burger)`
  fill: #333333;
`;

export const CloseNav = styled(Close)`
  fill: #000000;
`;

export const ButtonNav = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  border: none;
  user-select: none;
  background-color: ${(props) => props.theme.colorWhite};

  &:hover ${BurgerNav} {
    fill: ${(props) => props.theme.colorActiveLink};
  }

  &:hover ${CloseNav} {
    fill: ${(props) => props.theme.colorActiveLink};
  }

  &:hover {
    cursor: pointer;
  }
`;
