import styled from "styled-components";
import theme from "../../style/theme";

export const SideBarLayout = styled.div`
  width: 200px;
  height: 100vh;
  border-right: 1px solid ${theme.gray200};
  padding: 32px 20px 0px 20px;
`;

export const SideBarMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const MenuItem = styled.div`
  display: flex;
  height: 40px;
  padding: 4px 20px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  font-size: 18px;
  transition: background-color 0.2s ease;

  &.active {
    background-color: ${theme.blue50};
    font-weight: 600;
  }
`;
