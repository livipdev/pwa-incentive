import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Box from '@livipdev/core/Box';
import Button from '@livipdev/core/Button';
import Typography from '@livipdev/core/Typography';

import messages from './messages';

const ProjectCard = ({ classes, company, title }) => {
  const subtitle = { ...messages.subtitle, values: { company } };

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.title} variant="h3" color="commmon.white">
        {title}
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1" color="commmon.white">
        <FormattedMessage {...subtitle} />
      </Typography>
      <Button variant="outlined">
        <FormattedMessage {...messages.button} />
      </Button>
    </Box>
  );
};

ProjectCard.propTypes = {
  classes: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    wrapper: PropTypes.string,
  }),
  company: PropTypes.object,
  title: PropTypes.object,
};

export default ProjectCard;
