import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  padding: 20px;
  width: 90%;
`;

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  & img {
  }
`;

export const LinkContainerStyled = styled.div`
  display: flex;
  color: white;
  gap: 20px;
  font-size: 14px;

  & p:hover {
    color: var(--orange);
  }
`;
