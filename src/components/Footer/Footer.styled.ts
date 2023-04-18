import styled from 'styled-components';

export const Footer = styled.footer`
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const IconSet = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const SocialLink = styled.a`
  color: black;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #1976d2;
  }
`;
