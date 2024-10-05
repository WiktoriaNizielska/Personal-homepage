import styled from "styled-components";
import { ReactComponent as SunIcon } from '../../../images/sun.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
 font-size: 12px;
 font-weight: 700;
 line-height: 15.6px;
 color: ${({ theme }) => theme.text.paragraph};
`;

export const Button = styled.button`
  width: 48px;
  height: 26px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.themeButton.border};
  background-color: ${({ theme }) => theme.themeButton.background};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Dot = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.text.paragraph};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Sun = styled(SunIcon)`
  width: 14px;
  height: 14px;
  color: ${({ theme }) => theme.sun};
  transform: rotate(180deg);
`;