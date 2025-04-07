// style.ts
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
  gap: 20px; /* 메뉴 아이템 간 간격 */
`;

export const MenuItem = styled.div`
  display: flex;
  width: 80%;
  height: 40px;
  padding: 4px 20px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.2s ease;

  &.active {
    background-color: ${theme.blue50};
    font-weight: 600;
  }
`;
