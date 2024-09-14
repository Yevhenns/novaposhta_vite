import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container } from '@mui/material';
import * as SC from './Footer.styled';

export const Footer = () => {
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
            href="https://www.linkedin.com/in/%D1%94%D0%B2%D0%B3%D0%B5%D0%BD-%D0%B7%D1%8E%D1%81%D0%BA%D1%96%D0%BD-031b7b23b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7%2FUq8DgZSTybOwKAdJRrNQ%3D%3D"
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
