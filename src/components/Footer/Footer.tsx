import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container } from '@mui/material';
import css from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={css.footer}>
      <Container sx={{ display: 'flex', mx: 'auto' }}>
        <div className={css.iconSet}>
          <a
            className={css.socialLink}
            href="https://github.com/Yevhenns"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            className={css.socialLink}
            href="https://linkedin.com/in/yevhen-ziuskin-031b7b23b/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
      </Container>
    </footer>
  );
};
