import styled from 'styled-components';
import theme from '../../style/theme';

export const HeaderLayout = styled.div`
  display: flex;
  box-sizing: border-box;
  width:100vw;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 100px;
  border-bottom: 1px solid ${theme.gray200};
`;

export const HeaderButton = styled.div`
display: flex;
align-items: center;
`;

export const HeaderLogin = styled.div`
`;

export const HeaderLogo = styled.div`
`;
