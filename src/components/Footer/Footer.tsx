import { FC } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container } from '@mui/material';
import * as SC from './Footer.styled';

export const Footer: FC = () => {
  return (
    <SC.Footer>
      <Container sx={{ display: 'flex', mx: 'auto' }}>
        <SC.IconSet>
          <SC.SocialLink
            href="https://github.com/Yevhenns"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitHubIcon fontSize="large" />
          </SC.SocialLink>
          <SC.SocialLink
            href="https://linkedin.com/in/yevhen-ziuskin-031b7b23b/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedInIcon fontSize="large" />
          </SC.SocialLink>
        </SC.IconSet>
      </Container>
    </SC.Footer>
  );
};
