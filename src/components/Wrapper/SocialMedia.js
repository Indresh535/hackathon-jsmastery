
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const socialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <TwitterIcon/>
      </div>
      <div>
      <a href="https://github.com/" target='_blank' rel="noreferrer">
        <GitHubIcon />
        </a>
      </div>
      <div>
      <a href="https://github.com/" target='_blank' rel="noreferrer">
      <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default socialMedia;
